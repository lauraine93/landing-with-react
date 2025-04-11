const MainFeatureArticle = () => {
  return (
    <div className="flex flex-col w-7/12">
      <img
        src="/src/assets/images/image-web-3-desktop.jpg"
        className=""
        alt="image 3D"
      />
      <div className="flex justify-between   text-left mt-10">
        <h1 className="text-[50px]  leading-13 text-[#000024] font-extrabold w-5/12">
          The Bright Future of Web   3.0?
        </h1>
        <div className="flex flex-col gap-4 w-6/12  ">
          <p className=" text-[16px] text-[#A4A8C4] font-bold">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="tracking-widest bg-orange-700 text-black w-36   py-2  font-bold text-md">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default MainFeatureArticle;
