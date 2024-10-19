import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  backgroundImage?: StaticImageData;
  description: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  backgroundImage,
  description,
  title,
}) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border-4 border-devstation-project-card-border-green bg-devstation-project-card-bg-green p-5">
      <div className="mb-2 flex w-3/4 items-end justify-end rounded-2xl">
        {backgroundImage && (
          <Image src={backgroundImage} alt={title} className="rounded-2xl" />
        )}

        <div className="absolute flex items-end justify-end p-[2px_20px] text-right uppercase">
          {title}
        </div>
      </div>

      <div className="w-2/3 text-center text-xs">{description}</div>
    </div>
  );
};

export default ProjectCard;
