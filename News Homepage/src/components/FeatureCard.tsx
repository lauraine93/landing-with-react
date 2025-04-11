interface FeatureCardProps {
  src: string;
  number: string;
  title: string;
  description: string;
}
const FeatureCard = ({ src, number, title, description }: FeatureCardProps) => {
  return (
    <div className="flex text-left gap-6">
      <img className="w-4/12 h-32" src={src} alt="" />
      <div className="">
        <p className="text-orange-700 font-extrabold text-[30px]">{number}</p>
        <p className=" text-black font-semibold text-[17px]">{title}</p>
        <p className="text-[#A4A8C4] w-3/4 text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
