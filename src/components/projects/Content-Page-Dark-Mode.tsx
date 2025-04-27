import Image from "next/image";
import ImageDark from "/public/backgroundSVG/Content Page (Dark Mode).svg";

const ContentPageDark = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="relative h-full w-full">
        <Image src={ImageDark} alt="Background" fill priority />
      </div>
    </div>
  );
};

export default ContentPageDark;
