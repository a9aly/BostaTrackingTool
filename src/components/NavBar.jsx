import { logoAr, menu, close, search } from "../assets";
import { Link } from "react-router-dom";
import { navBarItems, navBarItems2 } from "../constants";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/fetchSlice";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [trackToggle, setTrackToggle] = useState(false);
  const [input, setInput] = useState(7234258);
  const [orderNumber, setOrderNumber] = useState(7234258);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(orderNumber));
  }, [orderNumber]);

  return (
    <nav className="px-[70px] py-[16px] top-0 flex pb-40">
      {trackToggle ? (
        <div className="fixed top-[6%] left-[16%]  box-content h-40 w-80 p-1 border-4 bg-white border-slate-50 z-30">
          <span className="absolute top-[25%] right-[10%] font-Cairo font-semibold">
            تتبع شحنتك
          </span>
          <input
            dir="rtl"
            className=" absolute top-[50%] right-[10%] rounded-md h-10 p-2 font-Cairo border border-gray-300"
            type="text"
            placeholder="رقم التتبع"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <img
            src={search}
            className="absolute top-[50%] left-[20%] w-10 h-10 bg-red-600 rounded-md"
            onClick={() => {
              setOrderNumber(input);
            }}
          ></img>
        </div>
      ) : (
        <></>
      )}
      {/* Toggle Menu Icon */}
      <div className="lg:hidden flex flex-1 z-30 fixed">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {/* NavBar Elements */}
      <ul className=" fixed mt-2 text-lg list-none hidden lg:flex flex-row-reverse flex-nowrap gap-10 ">
        {navBarItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`/${item.id}`}
              className="font-Cairo font-bold text-black hover:text-red-500 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <span className="pl-40"></span>

        {/* NavBar Elements 2*/}
        {navBarItems2.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer font-Cairo font-bold hover:text-red-500 hover:underline ${
              item.id === "en" ? "text-red-600" : "text-black"
            }`}
          >
            <div
              onClick={() => {
                item.id == "track"
                  ? setTrackToggle(!trackToggle)
                  : setTrackToggle(trackToggle);
              }}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>

      {/* Bosta Icon */}
      <Link to="/" className="fixed right-20 z-20 bg-white">
        <img className="size-10 w-full p-0" src={logoAr} alt="logoAr" />
      </Link>

      {/* Toggle Menu */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } lg:hidden  p-6 fixed top-10 left-0 mx-4 my-2 min-w-[140px] z-40  bg-white`}
      >
        <ul className="rounded-xl font-Cairo font-bold text-end list-none flex flex-col gap-6 p-10  border-red-700 border-8  divide-y divide-slate-950">
          {navBarItems.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.id}`} className="underline">
                {item.title}
              </Link>
            </li>
          ))}
          {navBarItems2.map((item) => (
            <li className="cursor-pointer underline" key={item.id}>
              <div
                onClick={() => {
                  item.id == "track"
                    ? setTrackToggle(!trackToggle)
                    : setTrackToggle(trackToggle);
                }}
              >
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
