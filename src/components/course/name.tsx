interface CourseNameProps {
  children: string;
}

const Name = ({ children }: CourseNameProps) => {
  return (
    <div className="font-Malayalam w-3/5 rounded-2xl bg-white bg-opacity-50 p-4 text-center text-[4vw] text-devstation-blue-500 dark:bg-devstation-cyan-100 dark:text-white">
      {children}
    </div>
  );
};
export default Name;
