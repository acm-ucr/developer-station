import Name from "./name";
import ShortCourseDescription from "./short_course_description";
import CourseTimeline from "./timeline";
import TryCourseButton from "./try-course-button";

const CourseLearnPage = () => {
  return (
    <div className="flex flex-col items-center space-y-[4vh]">
      <Name children="COURSE NAME" />
      <ShortCourseDescription />
      <CourseTimeline />
      <TryCourseButton />
    </div>
  );
};

export default CourseLearnPage;
