interface CourseLayoutProps {
  title: string;
  description: string;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ title, description }) => {
  return (
    <div className="mx-auto flex w-full max-w-[calc(100%-100px)] flex-col items-center rounded-[20px] bg-course-layout-background/80 p-8 text-center font-Malayalam font-normal">
      <div className="pb-4 pt-8 text-center font-Malayalam text-[80px] font-normal leading-[100px]">
        {title}
      </div>

      <div className="px-10 text-center font-Malayalam text-[25px] font-normal leading-[40px]">
        {description}
      </div>
    </div>
  );
};

export default CourseLayout;
