import BgImageDark from "@/public/projects/projects-header-bg-image-dark.webp";
import BgImageLight from "@/public/projects/projects-header-bg-image-light.webp";
import Image from "next/image";

const ProjectsHome = () => {
  return (
    <div className="flex">
      <Image className="hidden dark:block" alt="header" src={BgImageDark} />

      <Image
        className="dark:hidden"
        alt="header"
        src={BgImageLight}
        style={{
          background: "linear-gradient(180deg, #6FCFF7 0%, #00498D 100%)",
        }}
      />

      <p className="absolute ml-[38%] mt-[42%] font-malayalam text-[11vw] text-white dark:text-devstation-yellow-300">
        PROJECTS
      </p>
    </div>
  );
};

export default ProjectsHome;
