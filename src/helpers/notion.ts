import { Client } from "@notionhq/client";
import moment from "moment";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getAllUsedDates = async () => {
  const information = await notion.databases.query({
    database_id: process.env.NOTION_CUSTOMERS_DB!,
    filter: {
      and: [
        {
          property: "Release Date",
          date: {
            after: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        },
      ],
    },
  });

  return (
    information.results
      // @ts-ignore
      .reduce((all, current) => {
        // @ts-ignore
        const info = current?.properties?.["Release Date"]?.date?.start;
        if (info) {
          all.push(info);
        }
        return all;
      }, [] as string[])
  );
};

export const insertCustomer = async (
  price: number,
  email: string,
  date: string,
  packageInformation: string,
  programmingLanguage: string,
  fullName: string,
  githubURL: string
) => {
  return notion.pages.create({
    parent: {
      database_id: process.env.NOTION_CUSTOMERS_DB!,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "",
            },
          },
        ],
      },
      Package: {
        multi_select: [
          {
            name: packageInformation,
          },
        ],
      },
      "GitHub URL": {
        rich_text: [
          {
            text: {
              content: githubURL,
            },
          },
        ],
      },
      "Customer Name": {
        rich_text: [
          {
            text: {
              content: fullName,
            },
          },
        ],
      },
      Email: {
        email,
      },
      "Release Date": {
        date: {
          start: date,
        },
      },
    },
  });
};

export const notionDbInformation = async () => {
  const load = await notion.databases.query({
    database_id: process.env.NOTION_TEXT_DB!,
  });

  return (
    load.results
      // @ts-ignore
      .filter((f) => f.properties?.Identifier?.select?.name!)
      .reduce((all, current) => {
        return {
          ...all,
          // @ts-ignore
          [current?.properties?.Identifier?.select?.name!]:
            // @ts-ignore
            current?.properties?.Content?.rich_text,
        };
      }, {})
  );
};

export const getFaq = async () => {
  const load = await notion.databases.query({
    database_id: process.env.NOTION_FAQ_DB!,
  });

  return load.results
    .map((p: any) => ({
      question: p.properties?.Name?.title?.[0]?.text?.content!,
      answer: p.properties?.Content?.rich_text
        .map((r: any) => r.plain_text)
        .join("\n"),
    }))
    .filter((f) => f.question);

  // load.results
  //     // @ts-ignore
  //     .filter((f) => f.properties?.Identifier?.select?.name!)
  //     .reduce((all, current) => {
  //         return {
  //             ...all,
  //             // @ts-ignore
  //             [current?.properties?.Identifier?.select?.name!]:
  //             // @ts-ignore
  //             current?.properties?.Content?.rich_text,
  //         };
  //     }, {})
};
