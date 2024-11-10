interface CourseNameProps {
  children: string;
}

const Name = ({ children }: CourseNameProps) => {
  return (
    <div className="font-Malayalam w-3/5 rounded-2xl bg-devstation-cyan-100 p-4 text-center text-[4vw] text-white">
      {children}
    </div>
  );
};
export default Name;
