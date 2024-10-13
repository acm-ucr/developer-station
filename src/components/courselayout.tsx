interface CourseLayoutProps {
  title: string;
  description: string;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ title, description }) => {
  return (
    <div className="mx-auto flex w-full max-w-[calc(100%-100px)] flex-col items-center rounded-[20px] bg-course-layout-background/80 text-center font-Malayalam font-normal p-8">
      <div className="text-center font-Malayalam text-[80px] font-normal leading-[100px] pt-8 pb-4">
        {title}
      </div>

      <div className="text-center font-Malayalam text-[25px] font-normal leading-[40px] px-10">
        {description}
      </div>
    </div>
  );
};

export default CourseLayout;
