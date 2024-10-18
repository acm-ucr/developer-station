import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  backgroundImage?: StaticImageData;
  description1: string;
  description2?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description1,
  backgroundImage,
  description2,
  title,
}) => {
  return (
    <div className="border-7 flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border-[#529546] bg-[#3b7227b2] p-5">
      <div className="relative mb-2 flex min-h-[55%] w-[75%] items-end justify-end overflow-hidden rounded-2xl">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        )}
        <div className="font-[Malayalam MN] absolute inset-0 flex items-end justify-end p-[2px_20px] text-right uppercase">
          {title}
        </div>
      </div>

      <div className="font-[Malayalam MN] flex w-[80%] items-center text-center text-[10px] font-normal leading-[15px] text-white">
        {description1}
      </div>

      {description2 && (
        <div className="font-[Malayalam MN] flex w-[80%] items-center text-center text-[10px] font-normal leading-[15px] text-white">
          {description2}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
