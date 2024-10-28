interface CourseNameProps {
  children: string;
}

const Name = ({ children }: CourseNameProps) => {
  return (
    <div className="bg-dark-cyan font-Malayalam flex w-full flex-col items-center rounded-2xl text-center">
      <div className="pb-16 pt-16 text-6xl text-white">{children}</div>
    </div>
  );
};
export default Name;
