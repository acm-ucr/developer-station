import Image from "next/image";
import HomePic from "@/public/images/homePage2.webp";
import Landing from "@/components/home/Landing";
import About from "@/components/home/about";
import ProjectCard from "@/components/home/ProjectCard";
import Cat from "@/public/images/randomCat.webp";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="flex flex-col">
        <Image alt="graphics of home page" src={HomePic} />
        <div className="absolute mt-[10%] text-white">
          <About />
        </div>
        <div className="absolute ml-[8vw] mt-[200vh] w-1/4">
          <ProjectCard
            backgroundImage={Cat}
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
