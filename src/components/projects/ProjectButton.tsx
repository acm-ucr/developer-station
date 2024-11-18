import Image from "next/image";
import TrainImage from "@/public/projects/projectbuttontrain.webp";

interface ProjectButtonProps {
  description: string;
  difficulty: string;
  name: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  description,
  difficulty,
  name,
}) => {
  return (
    <div className="flex flex-col gap-2 text-center font-normal text-devstation-yellow-400">
      <div className="text-5xl">{name}</div>

      <button
        className="rounded-full px-10 py-5"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(5, 86, 160, 0.7) 0%, rgba(204, 231, 255, 0.7) 100%)",
        }}
      >
        <Image src={TrainImage} alt={`${name}-project-button-train`} />
      </button>

      <div className="flex items-center justify-center gap-6 text-lg leading-none">
        <div className="pt-1">{description}</div>

        <div className="h-4 w-px bg-devstation-yellow-400"></div>

        <div className="pt-1">{difficulty}</div>
      </div>
    </div>
  );
};

export default ProjectButton;
