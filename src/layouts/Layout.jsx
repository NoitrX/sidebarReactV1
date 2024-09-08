import { FiMaximize } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircle, FaRegUser } from "react-icons/fa";
import { useState } from "react";
export const Layout = () => {
    const [submenu, setSubmenu] = useState(false)

    const openSubmenu = () => {
        setSubmenu(!submenu)

    }
    return (
        <div className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-1 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex">
                <img src="/public/images/BiezariManagement.png" className=" h-auto w-48 sm:h-auto" alt="" />
                <button className="w-12 mx-8 hover:scale-125 transition-all">
                    <FiMaximize onClick={openSubmenu} />
                </button>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav >
                    <div className="flex items-center justify-between px-4 py-3 text-gray-700 bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:text-white font-bold hover:bg-gradient-to-l from-white to-violet-800 transition-all">
                        <div className="flex items-center">
                            <GrHomeRounded />
                            <p className="mx-2 font-medium text-sm mt-1  hover:text-white">DASHBOARD</p>
                        </div>
                        <button className="text-dark hover: text-black">
                            <IoIosArrowForward className="hover: text-dark" />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="flex items-center justify-between px-4 py-3 mt-1 text-gray-700 bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:text-white font-bold hover:bg-gradient-to-l from-white to-violet-800 transition-all">
                            <div className="flex items-center">
                                <FaRegUser />
                                <p className="mx-2 font-medium text-sm mt-1 hover:text-white">USERS</p>
                            </div>
                            <button onClick={openSubmenu} className="text-dark hover:text-black">
                                {submenu ? (
                                    <IoIosArrowForward className="hover:text-dark transform rotate-90 transition-transform duration-300" />
                                ) : (
                                    <IoIosArrowForward className="hover:text-dark transform rotate-0 transition-transform duration-300" />
                                )}
                            </button>
                        </div>
                        {submenu && (
                            <div id="dropdown-user" className="dropdown-users absolute top-full left-0  text-center  dark:bg-gray-800 rounded-md p-2">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center mx-3">
                                        <FaRegCircle className="h-2" />
                                        <a href="#" className="text-md mt-1 mb-1 mx-3 text-gray-600">  List</a>
                                    </div>
                                    <div className="flex items-center mx-3">
                                        <FaRegCircle className="h-2" />
                                        <a href="#" className="text-md mt-3 mb-1 mx-3 text-gray-600">  Add</a>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>


        </div>
    )
}