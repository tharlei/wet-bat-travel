import { AiFillFile } from 'react-icons/ai';
import { IoMdAnalytics } from 'react-icons/io';
import { MdOutlineAttachMoney, MdSupport } from 'react-icons/md';
import { FaHome, FaUserFriends, FaPaperPlane, FaListAlt } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';

const MENU = [
  {
    icon: FaHome,
    title: 'Home',
  },
  {
    icon: MdOutlineAttachMoney,
    title: 'Quotes',
  },
  {
    icon: FaListAlt,
    title: 'Leads',
  },
  {
    icon: FaPaperPlane,
    title: 'Tours',
  },
  {
    icon: AiFillFile,
    title: 'Invoices',
  },
  {
    icon: IoMdAnalytics,
    title: 'Analytics',
  },
  {
    icon: FaUserFriends,
    title: 'Team',
  },
  {
    icon: HiCog,
    title: 'Admin',
  },
  {
    icon: MdSupport,
    title: 'Support',
  },
];
const YEAR = new Date().getFullYear();

export function SideMenu() {
  return (
    <nav className="bg-gray-500 hidden lg:block w-40">
      <ul className="">
        {MENU.map((item) => {
          return (
            <li
              key={item.title}
              className="flex justify-center text-purple p-4 cursor-pointer hover:bg-gray-700"
            >
              <div className="flex items-center w-24">
                <item.icon className="text-lg mr-2" />
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="border-b border-b-gray-700 mt-12"></div>
      <div className="text-gray-900 text-center text-sm mt-8 mb-24">
        <p>Allright received</p>
        <p>by wetbat {YEAR}</p>
      </div>
    </nav>
  );
}
