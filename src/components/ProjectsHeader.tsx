import ProjectPic from "@/public/images/Projectshome1.webp";
import Image from "next/image";

const ProjectsHome = () => {
  return (
    <div className="flex">
      <Image alt="header" src={ProjectPic} />
      <p className="absolute ml-[38%] mt-[42%] font-malayalam text-[12vh] text-[12vw] text-devstation-yellow-100">
        PROJECTS
      </p>
    </div>
  );
};

export default ProjectsHome;
