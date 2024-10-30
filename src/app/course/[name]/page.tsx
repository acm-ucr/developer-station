import Name from "@/components/course/name";
import { courses } from "@/courses";

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
      <Name>{name}</Name>
    </>
  );
};

export default Page;
