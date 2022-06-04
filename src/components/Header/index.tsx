import { FaSearch } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { Popover } from '@headlessui/react';
import logo from '../../assets/logo.png';
import { HiCog } from 'react-icons/hi';
import tharleiPhoto from '../../assets/tharlei.jpg';
import { IoMdNotifications } from 'react-icons/io';

export function Header() {
  return (
    <header className="p-4 bg-purple w-full text-white flex justify-between">
      <div className="flex items-center gap-6">
        <MdDashboard className="text-2xl hidden lg:block" />
        <div className="">
          <img
            src={logo}
            alt="Logo of company Wet Travel Bat"
            className="h-8"
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="lg:flex items-center gap-8 hidden">
          <div className="relative  text-black">
            <input
              type="text"
              className="text-xs lg:text-base z-10 w-full pl-14 rounded-lg border border-gray-300 bg-white focus:outline-none placeholder-black"
            />
            <FaSearch className="ml-2 w-5 h-5 absolute left-2.5 top-3 text-gray-300" />
          </div>
          <IoMdNotifications className="text-2xl cursor-pointer" />
          <FiMessageSquare fill="#fff" className="text-2xl cursor-pointer" />
          <HiCog className="text-2xl cursor-pointer" />
        </div>
        <Popover className="relative">
          <Popover.Button>
            <img src={tharleiPhoto} alt="User photo" className="rounded-full" />
          </Popover.Button>

          <Popover.Panel className="absolute right-0 z-10">
            <div className="bg-white rounded shadow p-4 text-black text-right flex flex-col">
              <span className="cursor-pointer hover:text-purple transition-colors duration-300">
                Sair
              </span>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </header>
  );
}
