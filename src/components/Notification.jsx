import { Link } from "react-router-dom";

const Notification = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="flex justify-center text-white text-center bg-[#00ecd6] h-[40px] py-1">
      <h1 className="text-xl uppercase font-normal tracking-wider mr-3">
        {message}
      </h1>
      <p className="text-xl uppercase font-medium tracking-wider underline">
        <Link to="/cart">check now</Link>
      </p>
    </div>
  );
};

export default Notification;
