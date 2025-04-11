const Navbar = () => {
  return (
    <div className="mb-20 flex justify-between items-center">
      <img src="/src/assets/images/logo.svg"className="w-12 " alt="logo" />
      <div className="flex gap-4 ">
        <span className="text-[16px] text-[#A4A8C4] font-bold"> Home</span>
        <span className="text-[16px] text-[#A4A8C4] font-bold"> Popular</span>
        <span className="text-[16px] text-[#A4A8C4] font-bold">Trending</span>
        <span className="text-[16px] text-[#A4A8C4] font-bold">Categories</span>
      </div>
    </div>
  );
};

export default Navbar;
