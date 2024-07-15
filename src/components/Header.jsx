import coverImage from "../assets/cover-image.png";

const Header = () => {
  return (
    <div className="bg-gray-100 h-[615px] flex items-center">
      <div className="w-6/12 flex justify-center">
        <div className="w-[578px] h-[398px]">
          <h1 className="uppercase text-5xl font-bold tracking-wide leading-normal text-[#004080]">
            Providing services at your door
          </h1>
          <p className="text-2xl tracking-wide font-light text-gray-500 mt-2">
            <span className="text-gray-500 font-bold">MACC Essentials </span>
            has an important role in making supplies and services available to
            customers and their patients during this critical time. This
            includes services from various domains. Our aim is to aid you. As
            much we can.
          </p>

          <button className="uppercase text-2xl mt-14 font-bold tracking-wide bg-red-600 text-[#ffffff] py-3 px-8">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-6/12 my-auto flex justify-end">
        <img src={coverImage} alt="" className="w-[500px] h-[500px] mx-auto" />
      </div>
    </div>
  );
};

export default Header;
