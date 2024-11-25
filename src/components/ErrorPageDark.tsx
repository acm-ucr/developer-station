import Image from "next/image";
import errorImageDark from "/public/error/Error Page (Dark Mode).svg";

const ErrorPageDark = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="relative h-full w-full">
        <Image src={errorImageDark} alt="Error background" fill priority />
      </div>
      <p className="font-sans-serif drop-shadow-glow absolute -translate-y-[9vh] text-[8vw] text-yellow-400">
        404 Error
      </p>
    </div>
  );
};

export default ErrorPageDark;
