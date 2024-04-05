import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {

  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
    {open ? (<header className="box bg-primary-light border-b-2">
        <nav className=" hidden lg:flex justify-between">
          <div className=" flex flex-col w-full pl-1 pr-2">
            <div className="flex px-4 items-start">
              <button className="mt-4 hover:bg-[#d0d6d9] p-1 h-auto" onClick={handleOpen}>
                <RxCross1 className=" text-primary inline" />
              </button>

              <div className="px-4">
                <img
                  src="https://static.jsbin.com/images/dave.min.svg"
                  alt=""
                  className="h-[100px]"
                />
              </div>
            </div>
            <div className="p-4">
              <button className="text-sm text-primary border border-primary w-[90%] py-2 hover:bg-[#d0d6d9]">
                New Bin
              </button>
            </div>
          </div>
          <div className="w-full  pl-1 pr-2 h-full text-xs leading-7">
            <h2 className="font-bold text-primary-dark">
              <Link to="/help">JS Bin Features &gt;&gt;</Link>
            </h2>
            <ul className="text-primary">
              <li>
                {/* <Link to="/help">Getting Stareted</Link> */}
                <a href="https://jsbin.com/help/getting-started/">
                  Getting Started
                </a>
              </li>
              <li>
                <Link to="/help">Keyboard Shortcuts</Link>
              </li>
              <li>
                <Link to="/help">Exporting/importing gist</Link>
              </li>
            </ul>
            <div className="flex items-center">
              <div class="flex items-center mt-5 mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class=" text-primary ">
                  Textarea editor mode
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full  pl-1 pr-2 mr-2 text-xs leading-7">
            <div>
              <h2 className="font-bold text-primary-dark">
                <Link to="/help">JS Bin Features &gt;&gt;</Link>
              </h2>
              <ul className="text-primary">
                <li>
                  <Link to="/help">Private bins</Link>
                </li>
                <li>
                  <Link to="/help">Vanity URLs</Link>
                </li>
              </ul>
            </div>
            <button className=" bg-[#4cb04f] px-4 py-2 w-full text-white rounded mt-4">
              <Link to="/help">Upgrade to pro now</Link>
            </button>
          </div>
          <div className="w-full  pl-1 pr-2 mr-2 text-xs leading-7">
            <div className="mb-3">
              <h2 className="font-bold text-primary-dark">
                <Link to="/help">Blog &gt;&gt;</Link>
              </h2>
              <ul className="text-primary">
                <li>
                  <Link to="/help">The return and The Refactor</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-primary-dark">
                <Link to="/help">Help &gt;&gt;</Link>
              </h2>
              <ul className="text-primary">
                <li>
                  <Link to="/help">Pronounciable URLs</Link>
                </li>
                <li>
                  <Link to="/help">Local JS Bin: 2 second guide</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full text-xs leading-7">
            <h2 className="font-bold text-primary-dark">
              <Link to="/help">Donate to JS Bin&gt;&gt;</Link>
            </h2>
            <ul className="text-primary">
              <li>
                <Link to="/help">
                  Support JS Bin to keep the project open source and MIT for all
                </Link>
              </li>
              <li>
                <Link to="/help">Follow @js_bin on twitter</Link>
              </li>
              <li>
                <Link to="/help">
                  By using JS Bin you agree to our legal terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>) : null}
      
    </>
  );
}
