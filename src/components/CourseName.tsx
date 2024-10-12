interface CourseNameProps {
    name: string;
  }
 
  const CourseName = ({ name }: CourseNameProps) => {
    return (
      <div className="flex flex-col w-full rounded-2xl items-center text-center font-Malayalam font-normal bg-dark-cyan">
        <div className="text-white pb-16 pt-16 text-6xl">{name}</div>
      </div>
    );
  };
  export default CourseName;