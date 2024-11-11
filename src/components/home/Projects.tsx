import ProjectCard from "../home/ProjectCard";
import backgroundImage from "@/public/projects/projects-header-bg-image-dark.webp";

const Projects = () => {
  return (
    <div className="mx-[3vw] my-[5vw] flex flex-col items-center rounded-xl bg-devstation-green-50 bg-opacity-80 p-[2.5vw] text-center text-black dark:bg-devstation-green-200 dark:text-white">
      <div className="text-[4vw]">Our Projects</div>

      <div className="mb-[2vw] text-lg">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </div>
      <div className="grid grid-cols-3 flex-col items-center justify-center">
        <div className="mx-[2vw] mb-[1vw]">
          <ProjectCard
            backgroundImage={backgroundImage}
            description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            title="Title"
          />
        </div>
        <div className="mx-[2vw] mb-[1vw]">
          <ProjectCard
            backgroundImage={backgroundImage}
            description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            title="Title"
          />
        </div>
        <div className="mx-[2vw] mb-[1vw]">
          <ProjectCard
            backgroundImage={backgroundImage}
            description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            title="Title"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
