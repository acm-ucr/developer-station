import TryCourseButton from "../components/try-course-button";
const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-devstation-green-100 text-white">
      <div className="text-white">The Developer's Station</div>
      <br></br>
      <TryCourseButton></TryCourseButton>
    </div>
  );
};

export default Home;
