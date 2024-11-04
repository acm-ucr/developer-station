import Image from "next/image";
import errorImageDark from "/public/error/Error Page (Dark Mode).webp";

const ErrorPageDark = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="relative h-full w-full">
        <Image
          className="object-contain"
          src={errorImageDark}
          alt="Error background"
          fill
          priority
        />
      </div>
      <p className="font-sans-serif absolute -translate-y-16 text-[8vw] text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
        404 Error
      </p>
    </div>
  );
};

export default ErrorPageDark;
