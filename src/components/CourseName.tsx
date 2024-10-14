interface CourseNameProps {
  name: string;
}

const CourseName = ({ name }: CourseNameProps) => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-dark-cyan text-center font-Malayalam">
      <div className="pb-16 pt-16 text-6xl text-white">{name}</div>
    </div>
  );
};
export default CourseName;
