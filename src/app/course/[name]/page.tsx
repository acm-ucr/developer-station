import coursePic from "@/public/images/courseLearnPic.webp";
import CourseLearnPage from "@/components/course/courseLearnPage";
import { courses } from "@/courses";
import Image from "next/image";

interface props {
  params: {
    name: string;
  };
}

export const generateStaticParams = () => {
  return courses.map(({ param }) => ({ name: param }));
};

const Page = ({ params }: props) => {
  const { name } = params;

  return (
    <>
      <Image
        alt="graphics of course page"
        src={coursePic}
        className="absolute"
      />
      <div className="relative">
        <CourseLearnPage title={name} />
      </div>
    </>
  );
};

export default Page;
