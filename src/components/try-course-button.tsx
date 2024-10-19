const TryCourseButton = () => {
  return (
    <div className="relative w-[20%] p-1.5">

      <div className="flex justify-center">
        <button className="relative w-[96%] rounded-full bg-[#eaf7dc] px-12 py-3 text-xl font-bold text-black shadow-md">
          <p>TRY COURSE</p>
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[#eaf7dc] opacity-50"></div>
        </button>
      </div>
    </div>
  );
};

export default TryCourseButton;
