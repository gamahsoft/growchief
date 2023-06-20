import { FC } from "react";

const FaqComponent: FC<{ faq: Array<{ question: string; answer: string }> }> = (
  props
) => {
  const { faq } = props;
  return (
    <div className="flex flex-col space-y-5 mt-10">
      {faq.map((f) => (
        <div
          key={f.question}
          className="flex-1 text-xl rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full colorb"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(150,102,255,.2) 0,transparent 70%),radial-gradient(circle,rgba(150,102,255,.1) 0,transparent 70%),radial-gradient(ellipse at center,hsla(0,0%,100%,.075) 0,transparent 100%)",
          }}
        >
          <p>{f.question}</p>
          <p className="text-sm mt-2">{f.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
