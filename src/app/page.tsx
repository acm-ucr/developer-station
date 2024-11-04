import Image from "next/image";
import HomePic from "@/public/images/homePage2.webp";
import Landing from "@/components/home/Landing";
import About from "@/components/home/about";
import ProjectCard from "@/components/home/ProjectCard";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="flex flex-col">
        <Image alt="graphics of home page" src={HomePic} />
        <div className="absolute mt-[10%] text-white">
          <About />
        </div>
        <div className="absolute ml-[8vw] w-1/4">
          <ProjectCard
            backgroundImage={HomePic}
            title="Lorem Ipsum"
            description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
