import SideBarArticle from "./SideBarArticle";

const SideBar = () => {
  return (
    <div className="bg-[#00000d] p-6 w-[420px] text-left  flex flex-col gap-4 ">
        <p className="text-[#eba954] mb-6 text-3xl font-bold">New</p>
      <SideBarArticle
        title={"Hydrogen VS Electric Cars"}
        description={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <SideBarArticle
        title={"The Downsides of AI Artistry"}
        description={
          "What are the possible adverse effects of on-demand AI image generation?"
        }
      />
      <SideBarArticle
        title={"Is VC Funding Drying Up?"}
        description={
          "  Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      />
    </div>
  );
};

export default SideBar;
