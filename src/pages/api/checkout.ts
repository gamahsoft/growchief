// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createACheckoutSession} from "@growchief/helpers/stripe";
import moment from "moment";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({error: "Method not allowed"});
    }
    if (!req?.query?.packages || !req?.query?.language || !req.query.date) {
        return res.status(400).json({error: "Missing query parameters"});
    }

    if (['community', 'growth', 'growthforyou'].indexOf(req.query.packages as string) === -1) {
        return res.status(400).json({error: "Invalid package"});
    }

    if (['javascript', 'typescript'].indexOf(req.query.language as string) === -1) {
        return res.status(400).json({error: "Invalid language"});
    }

    if (!moment(req.query.date).isValid()) {
        return res.status(400).json({error: "Invalid date"});
    }

    // @ts-ignore
    return res.json(await createACheckoutSession(req.query.packages, req.query.language, req.query.date));
}
