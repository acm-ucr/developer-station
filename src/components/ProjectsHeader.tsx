import ProjectPic from "@/public/images/Projects_home.svg";
import Image from "next/image";

const ProjectsHome = () => {
  return (
    <div className="relative flex">
      <Image alt="header" src={ProjectPic} />
      <p className="absolute ml-[45%] mt-[45%] font-malayalam text-9xl text-white">
        PROJECTS
      </p>
    </div>
  );
};

export default ProjectsHome;
