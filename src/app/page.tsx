import Image from "next/image";
import HomePic from "@/public/images/homePage.webp";
import Landing from "@/components/home/Landing";
import About from "@/components/home/about";
import Projects from "@/components/home/Projects";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="flex flex-col">
        <Image alt="graphics of home page" src={HomePic} className="absolute" />
        <div className="relative mt-[10%] text-white">
          <About />
        </div>
        <div className="flex h-screen w-screen justify-center">
          <div className="relative mt-[50%] flex h-[90%] w-[90%] rounded-2xl bg-devstation-green-200 bg-opacity-70" />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
