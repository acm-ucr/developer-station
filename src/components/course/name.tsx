interface CourseNameProps {
  children: string;
}

const Name = ({ children }: CourseNameProps) => {
  return (
    <div className="font-Malayalam rounded-2xl bg-devstation-cyan-100 py-4 text-center text-6xl text-white">
      {children}
    </div>
  );
};
export default Name;
