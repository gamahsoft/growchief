import Image from "next/image";
import StarComponent from "@growchief/components/stars/star.component";
import FaqComponent from "@growchief/components/faq/faq.component";
import DevComponent from "@growchief/components/dev/dev.component";
import ProcessComponent from "@growchief/components/process/process.component";
import ResourcesComponent from "@growchief/components/resources/resources.component";
import PackagesComponent from "@growchief/components/packages/packages.component";
import { loadDevToAnalytics } from "@growchief/helpers/dev.to";
import { getFaq, notionDbInformation } from "@growchief/helpers/notion";
import { useMemo } from "react";
import Link from "next/link";
import {NextSeo} from "next-seo";
export default function Home(props: { dev: any; notion: any; faq: any, url: string }) {
    const { dev, notion, faq, url } = props;

    const process = useMemo(() => {
        return notion.process[0].plain_text.split("\n").filter((f: any) => f);
    }, []);

    const resources = useMemo(() => {
        return notion.resources.reduce((all: any[], current: any) => {
            const split = current.text.content.split("\n").filter((f: any) => f);

            for (const text of split) {
                if (current.text.link) {
                    all.push(
                        <a
                            key={current.text.content}
                            href={current.text.link.url}
                            target="_blank"
                            className="hover:underline"
                        >
                            {text}
                        </a>
                    );
                    continue;
                }
                all.push(<>{text}</>);
            }

            return all;
        }, []);
    }, []);

    return (
        <>
            <NextSeo
                title="GrowChief"
                description={`${notion.title[0].plain_text} - ${notion.sub_title[0].plain_text}`}
                canonical={url}
                openGraph={{
                    url: "https://www.url.ie/a",
                    title: "GrowChief",
                    description: `${notion.title[0].plain_text} - ${notion.sub_title[0].plain_text}`,
                    images: [
                        {
                            url: `${url}/og-new.png`,
                            width: 800,
                            height: 600,
                            alt: "GrowChief",
                            type: "image/png",
                        },
                    ],
                    siteName: "GrowChief",
                }}
            />
            <div className="mx-auto max-w-[1492px] px-10 flex flex-col w-full">
                <div className="flex flex-col w-full py-4">
                    <div className="flex">
                        <Link
                            href="/"
                            className="text-2xl flex-1 bg-top-gradient text-transparent bg-clip-text"
                        >
                            GrowChief
                        </Link>
                        <StarComponent />
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center mt-20">
                        <div className="flex">
                            <div>
                                <img
                                    src="/star-icon.svg"
                                    className="w-[50px] h-[50px] mr-5 max-sm:hidden"
                                />
                            </div>
                            <h1 className="bg-top-gradient text-center text-6xl max-sm:text-5xl font-bold text-transparent bg-clip-text">
                                {notion.title[0].plain_text}
                            </h1>
                            <div>
                                <img
                                    src="/star-icon.svg"
                                    className="w-[50px] h-[50px] ml-5 max-sm:hidden"
                                />
                            </div>
                        </div>
                        <h2 className="text-center mt-10 text-2xl max-sm:text-xl">
                            {notion.sub_title[0].plain_text}
                        </h2>
                    </div>
                    <div className="pointer-events-none absolute left-0 top-0 w-full h-[1079px] overflow-hidden">
                        <div
                            className="pointer-events-none -z-20 absolute -top-[348px] left-[50%] -translate-x-[50%] w-[1079px] h-[1079px] opacity-20"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle,#96f 0,rgba(14,10,15,0) 70%)",
                            }}
                        />
                    </div>
                </div>
                <PackagesComponent type="purchase" />
                <div className="mt-28 mb-28">
                    <h1 className="text-center text-6xl max-sm:text-5xl font-bold">
                        FAQ
                    </h1>
                    <FaqComponent faq={faq} />
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const faq = await getFaq();
    const dev = await loadDevToAnalytics();
    const notion = await notionDbInformation();
    return {
        revalidate: 86400,
        props: {
            url: process.env.WEBSITE_URL,
            faq,
            dev,
            notion,
        },
    };
};
