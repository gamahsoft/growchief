import StarComponent from "@growchief/components/stars/star.component";
import Link from "next/link";

export default function Home(props: { dev: any; notion: any, faq: any }) {
    return (
        <div className="mx-auto max-w-[1492px] px-10 flex flex-col w-full">
            <div className="flex flex-col min-h-[100vh] w-full py-4 pb-16">
                <div className="flex">
                    <Link href="/" className="text-2xl flex-1">GrowChief</Link>
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
                        <h1
                            className="text-center text-6xl max-sm:text-5xl font-bold text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(120.9deg,hsla(0,0%,100%,0) 36.54%,hsla(0,0%,100%,.5) 47.09%,hsla(0,0%,100%,0) 56.65%),linear-gradient(84.79deg,#f4d0ff 27.33%,#ba7dc5 47.55%,#dcdfff 66.08%)",
                            }}
                        >
                            Thank you!
                        </h1>
                        <div>
                            <img
                                src="/star-icon.svg"
                                className="w-[50px] h-[50px] ml-5 max-sm:hidden"
                            />
                        </div>
                    </div>
                    <h2 className="text-center mt-10 text-2xl max-sm:text-xl">
                       We will contact you soon with the next steps!
                    </h2>
                </div>
            </div>
        </div>
    );
}
