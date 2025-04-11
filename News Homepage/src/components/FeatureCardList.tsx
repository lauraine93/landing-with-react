import FeatureCard from "./FeatureCard";
const FeatureCardList = () => {
  return (
    <div className="flex ">
      <FeatureCard
        src={"/src/assets/images/image-retro-pcs.jpg"}
        number={"01"}
        title={"Reviving Retro PCs"}
        description={"  What happens when old PCs are given modern upgrades?"}
      />
      <FeatureCard
        src={"/src/assets/images/image-top-laptops.jpg"}
        number={"02"}
        title={"  Top 10 Laptops of 2022"}
        description={"   Our best picks for various needs and budgets."}
      />
      <FeatureCard
        src={"/src/assets/images/image-gaming-growth.jpg"}
        number={"03"}
        title={"  The Growth of Gaming"}
        description={"  How the pandemic has sparked fresh opportunities."}
      />
    </div>
  );
};

export default FeatureCardList;
