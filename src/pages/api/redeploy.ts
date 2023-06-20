// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req?.query?.key === process.env.REDEPLOY_KEY) {
        await axios.post(process.env.REDEPLOY_URL!);
    }
    res.status(200).json({ send: true });
}
