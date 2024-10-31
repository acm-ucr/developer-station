import ProjectCard from "../home/ProjectCard";
import backgroundImage from "/public/images/Projectshome1.webp";
const CourseLayout = () => {
  return (
    <div className="bg-opacity-80 mx-[3vw] flex flex-col items-center rounded-xl bg-devstation-green-200  p-[2.5vw] text-center my-[5vw] text-white">
      <div className="text-[4vw]">Our Projects</div>

      <div className="mb-[2vw] text-lg">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </div>
      <div className="grid h-full flex-col place-items-center items-center justify-center sm:grid-cols-1 md:grid-cols-3">
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

export default CourseLayout;
