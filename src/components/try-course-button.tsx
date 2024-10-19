const TryCourseButton = () => {
  return (
    <div className="relative inline-block w-[20%] p-1.5">
      <div className="absolute inset-0 rounded-full bg-[#cff2aa]"></div>

      <div className="flex justify-center">
        <button className="relative w-[96%] rounded-full bg-[#eaf7dc] px-12 py-3 text-xl font-bold uppercase text-black shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
          <span className="relative z-10">TRY COURSE</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[#eaf7dc] opacity-50"></div>
        </button>
      </div>
    </div>
  );
};

export default TryCourseButton;
