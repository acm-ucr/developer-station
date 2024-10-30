import Name from "@/components/course/name";
import { courses } from "@/courses";

interface props {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  return courses.map(({ param }) => ({ name: param }));
}

const Page = ({ params }: props) => {
  console.log(params);

  return (
    <>
      <Name>hello</Name>
    </>
  );
};

export default Page;
