interface AboutProps {
  name: string;
  description: string;
}

const About = ({ name, description }: AboutProps) => {
  return (
    <div className="flex flex-col items-center text-center font-Malayalam font-normal">
      <div className="text-7xl">About</div>
      <div className="pb-20 text-9xl">{name}</div>
      <div className="size-4/12 text-center text-description">
        {description}
      </div>
    </div>
  );
};
export default About;
