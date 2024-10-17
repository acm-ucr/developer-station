import Image from "next/image";
import train from "/public/landing/landingpagetrain.webp";
import path from "/public/landing/landingpagetrainpath.webp";
import rectangle35 from "/public/landing/Rectangle35.webp";
import rectangle36 from "/public/landing/Rectangle36.webp";
import rectangle37 from "/public/landing/Rectangle37.webp";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-blue-950">
      <div className="pb-4">
        <div className="h-1/8 flex flex-row justify-between p-4">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div className="ml-4 h-8 w-24 bg-gray-300 text-center">
            <p className="bg-gray-300 p-2">LOGO</p>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="h-1/8 flex w-full flex-col space-y-4 bg-blue-950 pt-8">
          <Image className="ml-4 h-1/6 w-1/6" src={rectangle36} alt=""></Image>
          <div className="bottom-4 flex h-full w-full flex-row">
            <Image
              className="ml-40 mr-12 h-1/6 w-1/2"
              src={rectangle37}
              alt=""
            ></Image>
            <h1 className="font-sans-serif w-full text-[3vw] text-yellow-300">
              DEVELOPER STATION
            </h1>
          </div>
        </div>
      </div>

      <div className="relative h-1/2 bg-blue-950">
        <Image className="absolute h-3/4 w-full" src={rectangle35} alt="" />
        <Image className="relative top-48 h-5/6 w-full" src={path} alt="" />
        <Image className="absolute top-8 h-full w-full" src={train} alt="" />
      </div>

      <div className="flex h-1/4 flex-row bg-blue-950 pt-12">
        <p className="ml-11 w-1/3 text-lg text-white">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Home;
