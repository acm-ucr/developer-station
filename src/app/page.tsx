import Landing from "@/components/home/Landing";
import About from "@/components/home/about";
import Projects from "@/components/home/Projects";
import CourseLearnPage from "@/components/course/courseLearnPage";
const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <CourseLearnPage />
    </div>
  );
};

export default Home;
