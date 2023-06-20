import {
  FC,
  useMemo,
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios"; // a plugin!
import ReactLoading from "react-loading";

const options = ["community", "growth", "growthforyou"] as const;
const programmingLanguageList = ["javascript", "typescript"] as const;

type OptionsType = typeof options[number];
type OptionsProgramming = typeof programmingLanguageList[number];

const DayContext = createContext<{
  package: OptionsType;
  min: Date;
  usedDates: string[];
  language: OptionsProgramming;
  purchasePackage: (
    packages: OptionsType,
    language: OptionsProgramming,
    date: string
  ) => Promise<void>;
}>({
  package: "community",
  min: new Date(),
  usedDates: [],
  language: "javascript",
  purchasePackage: async () => {},
});

const InnerCell: FC<{
  date: string;
  dayNumberText: string;
  isOther: boolean;
}> = (props) => {
  const { date, dayNumberText, isOther } = props;
  const context = useContext(DayContext);
  const getDateFormatted = moment(date).format("YYYY-MM-DD");
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const startingDate = context.usedDates.length
    ? context.usedDates[0]
    : moment().add(2, "week").startOf("week").day(1);

  const isBusyDate = useMemo(() => {
    if (isOther) {
      return true;
    }

    if (
      context.usedDates.some((uDate) => {
        return (
          getDateFormatted === moment(uDate).format("YYYY-MM-DD") ||
          (context.package !== "community" &&
            moment(uDate).add(2, "week").isAfter(moment(getDateFormatted)))
        );
      })
    ) {
      return true;
    }

    if (context.package === "community") {
      return false;
    }

    if (
      moment(date).weekday() !== 1 ||
      (context.package === "growthforyou" &&
        moment(date).subtract(1, "week").diff(startingDate, "days") % 14 === 0)
    ) {
      return true;
    }
    return false;
  }, [date, context]);

  const purchase = useCallback(async () => {
    setLoading(true);
    await context.purchasePackage(
      context.package,
      context.language,
      moment(date).format("YYYY-MM-DD")
    );
    setLoading(false);
  }, [context.package, context.language, context.purchasePackage, date]);

  if (loading) {
    return (
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
        <ReactLoading type="spin" color="#F7E16F" height={50} width={50} />
      </div>
    );
  }
  return (
    <div>
      {isBusyDate ? (
        <div className="absolute left-0 top-0 w-full h-full bg-[#d1d1d1d9]/30" />
      ) : (
        <div className="text-right p-2 absolute left-0 top-0 w-full h-full drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white">
          <div
            className="absolute top-[50%] -translate-y-[40%] left-0 w-full h-[40px] bg-[#F7E16F] flex justify-center items-center text-black cursor-pointer"
            onClick={purchase}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {!hover ? "Free" : "Move to purchase"}
          </div>
          {dayNumberText}
        </div>
      )}
      {dayNumberText}
    </div>
  );
};
function Cell(props: {
  date: string;
  dayNumberText: string;
  isOther: boolean;
}) {
  const { date, dayNumberText, isOther } = props;
  return (
    <InnerCell date={date} dayNumberText={dayNumberText} isOther={isOther} />
  );
}

const PurchaseComponent: FC<{ initial: OptionsType }> = (props) => {
  const [option, setOption] = useState(props.initial as OptionsType);
  const [usedDates, setUsedDates] = useState<string[]>([]);
  const [programmingLanguage, setProgrammingLanguage] =
    useState<OptionsProgramming>("javascript");

  useEffect(() => {
    loadDates();
  }, []);

  const purchasePackage = useCallback(
    async (
      packages: OptionsType,
      language: OptionsProgramming,
      date: string
    ) => {
      const {
        data: { url },
      } = await axios.get(
        `/api/checkout?packages=${packages}&language=${language}&date=${date}`
      );

      window.location.href = url;
    },
    []
  );

  const loadDates = useCallback(async () => {
    const { data } = await axios.get("/api/get-available-dates");
    setUsedDates(data);
  }, []);

  const end = useMemo(() => {
    return moment().add(4, "month").toDate();
  }, []);

  const start = useMemo(() => {
    switch (option) {
      case "growthforyou":
      case "growth":
        return moment().add(1, "month").toDate();
      case "community":
        return moment().add(2, "weeks").toDate();
    }
  }, [option]);
  return (
    <div className="pt-4">
      <div className="flex mb-5">
        <div className="flex-1 flex justify-center items-center">
          Select Package:
          <select
            onChange={(event) => setOption(event.target.value as OptionsType)}
            className="outline-0 ml-2 border border-white/10 drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white p-4"
          >
            {options.map((opt) => (
              <option key={opt} value={opt} selected={option === opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          Select Language:
          <select
            onChange={(event) =>
              setProgrammingLanguage(event.target.value as OptionsProgramming)
            }
            className="outline-0 ml-2 border border-white/10 drop-shadow-aura bg-grad-blue bg-[#080C23] colorb text-white p-4"
          >
            {programmingLanguageList.map((opt) => (
              <option
                key={opt}
                value={opt}
                selected={programmingLanguage === opt}
              >
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <DayContext.Provider
        value={{
          purchasePackage,
          language: programmingLanguage,
          min: start,
          usedDates,
          package: option,
        }}
      >
        <FullCalendar
          validRange={{
            start,
            end,
          }}
          dayCellContent={Cell}
          weekends={false}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </DayContext.Provider>
    </div>
  );
};

export default PurchaseComponent;
