// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsedDates } from "@growchief/helpers/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(await getAllUsedDates());
}
