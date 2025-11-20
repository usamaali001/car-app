import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "./Navbar";

interface ResponsiveMenuProps {
  showMenu: boolean;
}

export default function ResponsiveMenu({ showMenu }: ResponsiveMenuProps) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1>Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 mb-2">
          <h1>Made with ❤ by Usama Malik</h1>
        </div>
      </div>
    </div>
  );
}
