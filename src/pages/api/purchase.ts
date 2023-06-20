// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { purchase } from "@growchief/helpers/stripe";
import { insertCustomer } from "@growchief/helpers/notion";

export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const purchaseLoad = await purchase(req);
    if (!purchaseLoad) {
      return ;
    }

    await insertCustomer(
      +purchaseLoad.price,
      purchaseLoad.email as string,
      purchaseLoad.date as string,
      purchaseLoad.packageInformation,
      purchaseLoad.programmingLanguage,
      purchaseLoad.fullName as string,
      purchaseLoad.githubURL as string
    );

  } catch (err) {}
  res.status(200).json({ send: true });
}
