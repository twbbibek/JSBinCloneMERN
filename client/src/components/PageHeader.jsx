import { FaHome } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <>
        <header className="bg-[#f2f2f2] py-3">
        <nav className="box2 flex  justify-between">
          <div className="  px-3 py-2 border bg-white text-xs font-bold ">
            <Link to='/' className="flex gap-1">
              <IoIosArrowRoundBack /> <FaHome />
              <span className="hover:text-blue-400">Back to JS Bin</span>
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm font-bold">
            <input type="text" />
            <Link to='/blog'>Blog</Link>
            <Link to='/help'>Help</Link>
          </div>
        </nav>
      </header>
    </>
  )
}