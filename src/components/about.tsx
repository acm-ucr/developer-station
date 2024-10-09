interface AboutProps {
  name: string;
  description: string;
}

const About = ({ name, description }: AboutProps) => {
  return (
    <div className="flex-col flex items-center text-center font-normal font-Malayalam">
      <div className="text-7xl pb-5">About</div>
      <div className="text-9xl pb-36">{name}</div>
      <div className="size-4/12 text-center text-description">{description}</div>
    </div>
  );
};
export default About;
