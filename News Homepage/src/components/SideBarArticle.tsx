interface SideBarArticleProps {
  title: string;
  description: string;
}

const SideBarArticle = ({ title, description }: SideBarArticleProps) => {
  return (
    <div className="mb-12  text-left">
      <p className="font-bold text-white capitalize text-[18px]">{title}</p>
      <p className="text-[#A4A8C4] text-sm font-bold">{description}</p>
    </div>
  );
};

export default SideBarArticle;
