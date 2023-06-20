/// <reference types="stripe-event-types" />

import Stripe from "stripe";
import moment from "moment";
import { buffer } from "micro";
const stripe = new Stripe(process.env.PAYMENT_SECRET_KEY!, {} as any);

export const purchase = async (req: any) => {
  const signature = req.headers["stripe-signature"] as string;
  const reqBuffer = await buffer(req);

  try {
    const event = stripe.webhooks.constructEvent(
      reqBuffer,
      signature,
      process.env.PAYMENT_SIGNING_SECRET!
    ) as Stripe.DiscriminatedEvent;

    if (
      event.type !== "checkout.session.async_payment_succeeded" &&
      event.type !== "checkout.session.completed"
    ) {
      return false;
    }

    if (event?.data?.object?.payment_status !== "paid") {
      return false;
    }

    const { price, date, packageInformation, programmingLanguage } =
      event?.data?.object?.metadata!;

    const fullName = event?.data?.object?.custom_fields?.find(
      (p) => p?.key === "fullname"
    )?.text?.value;

    const githubURL = event?.data?.object?.custom_fields?.find(
      (p) => p?.key === "githuburl"
    )?.text?.value;

    const { id } = event.data.object;

    return {
      id,
      price,
      date,
      email: event?.data?.object?.customer_details?.email!,
      packageInformation,
      programmingLanguage,
      fullName,
      githubURL,
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createACheckoutSession = async (
  packages: "community" | "growth" | "growthforyou",
  programmingLanguage: string,
  date: string
) => {
  const price =
    packages === "community"
      ? 600
      : packages === "growth"
      ? 1500
      : packages === "growthforyou"
      ? 1800
      : 0;

  const packageInformation =
    packages === "community"
      ? "Community"
      : packages === "growth"
      ? "Growth"
      : packages === "growthforyou"
      ? "Growth for you"
      : "";

  const formatDate = moment(date).format("DD/MM/YYYY");

  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    custom_fields: [
      {
        type: "text",
        key: "fullname",
        label: { type: "custom", custom: "First name" },
        optional: false,
      },
      {
        type: "text",
        key: "githuburl",
        label: { type: "custom", custom: "Github url" },
        optional: false,
      },
    ],
    metadata: {
      price,
      date,
      packageInformation,
      programmingLanguage,
    },
    line_items: [
      {
        price_data: {
          currency: "USD",
          product_data: {
            name: "GrowChief",
            description: `${packageInformation} (${programmingLanguage}) on: ${formatDate}`,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url:
      process.env.WEBSITE_URL! + "/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.WEBSITE_URL!,
  });

  return { url: url! };
};
