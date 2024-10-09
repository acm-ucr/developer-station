import { StaticImageData } from "next/image";
import "./index.css";

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
    <div className="project-card">
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${backgroundImage?.src})` }}
      >
        {title}
      </div>

      <div className="description">{description1}</div>

      <div className="description">{description2}</div>
    </div>
  );
};

export default ProjectCard;
