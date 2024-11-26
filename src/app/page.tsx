import Banner from "./component/banner";
import Image from "next/image";
import Courses from "./routes/courses/page";
import Team from "./routes/team/page";
import Testimonials from "./routes/testimonials/page";

export default function Home() {
  return (
    <div>
   
      <Banner />
      <div className="bg-grey flex flex-col md:flex-row gap-3 py-4 w-full max-w-[1280px] h-[150px] justify-between  items-center ">
        <h1 className="text-lg px-8 md:text-2xl font-semibold md:font-bold">
        Trusted by 2000+ companies worldwide.
        </h1>
        <div className="flex flex-row gap-3 ">
          <div
            className={`font-serif font-bold  flex items-center justify-center rounded-md`}
          >
            <Image
              src={"/images/logo2.png"}
              alt="logo1"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center  ">
            <Image
              src={"/images/logo3.png"}
              alt="logo2"
              width={123}
              height={38}
            />
          </div>
          <div className="font-monospace font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-full">
            <Image
              src={"/images/logo4.png"}
              alt="logo3"
              width={123}
              height={38}
            />
          </div>
          <div className="font-serif font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md ">
            <Image
              src={"/images/logo5.png"}
              alt="logo4"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md">
            <Image
              src={"/images/logo6.png"}
              alt="logo5"
              width={123}
              height={38}
            />
          </div>
          <div className="font-Georgia font-bold md:w-[123.8px] h-[38.52px]  flex items-center justify-center rounded-md">
            <Image
              src={"/images/logo7.png"}
              alt="logo6"
              width={123}
              height={38}
            />
          </div>
        </div>
      </div>
      <Courses />
      <Team />
      <Testimonials />
   
    </div>
  );
}