import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiShoppingBag, FiEdit } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";
const SidebarPioneer = ({ sideBarTitle }) => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const linksPioneer = [
    {
      title: "Dashboard",
      links: [
        {
          name: "school",
          icon: <FiShoppingBag />,
          link: "pioneerschool",
        },
      ],
    },

    {
      title: "Pages",
      links: [
        {
          name: "set-teachers",
          icon: <IoMdContacts />,
          link: "set-teacherspioneer",
        },
        {
          name: "set-classes",
          icon: <SiGoogleclassroom />,
          link: "setup-classPioneer",
        },
      ],
    },
    {
      title: "Apps",
      links: [
        {
          name: "calendar",
          icon: <AiOutlineCalendar />,
          link: "calendarpioneer",
        },
        {
          name: "kanban",
          icon: <BsKanban />,
          link: "kanbanpioneer",
        },
        {
          name: "editor",
          icon: <FiEdit />,
          link: "editorpioneer",
        },
        {
          name: "color-picker",
          icon: <BiColorFill />,
          link: "color-pickerpioneer",
        },
      ],
    },
  ];
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/pioneerschool"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 gap-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <IoIosSchool />
              <span>{sideBarTitle}</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevState) => !prevState)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {linksPioneer.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 m-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                      fontFamily: "cursive",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarPioneer;
