import { useState } from "react";
import { useContext } from "react";

import Header from "./Header";
import Editor from "./Editor";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { DataContext } from "../context/DataProvider";
import Output from "./Output";
import Console from "./Console";
import PageFooter from "./PageFooter";

export default function Home({ user }) {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  const [open, setOpen] = useState(false);
  const [openLibrary, setOpenLibrary] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const [openHtml, setOpenHtml] = useState(true);
  const [openCss, setOpenCss] = useState(false);
  const [openJavaScript, setOpenJavaScript] = useState(false);
  const [openConsole, setOpenConsole] = useState(false);
  const [openOutput, setOpenOutput] = useState(true);
  const [openHead, setOpenHead] = useState(true)

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenLibrary = () => {
    setOpenLibrary(!openLibrary);
  };
  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };
  const handleOpenHtml = () => {
    setOpenHtml(!openHtml);
  };
  const handleOpenCss = () => {
    setOpenCss(!openCss);
  };
  const handleOpenJavaScript = () => {
    setOpenJavaScript(!openJavaScript);
  };
  const handleOpenConsole = () => {
    setOpenConsole(!openConsole);
  };
  const handleOpenOutput = () => {
    setOpenOutput(!openOutput);
  };

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  const handleOpenHead = () => {
    setOpenHead(!openHead);
  };

  const code = "console.log('Code Mirror!');";
  return (
    <>
      {/* <Header /> */}
      {openHead ? <Header/> : null}
      <nav className=" bg-[#ededed]  text-xs leading-7 border-y border-black">
        <div className=" flex items-center justify-between ">
          <ul className="flex items-center justify-between">
            <li className="m-2">
              <button className=" hover:bg-[#d0d6d9]" onClick={handleOpenHead}>
                <img
                  src="https://static.jsbin.com/images/dave.min.svg"
                  alt="logo"
                  className="h-5 mt-1"
                />
              </button>
            </li>
            <li className="p-2">
              <button
                onClick={handleOpen}
                className={`${open ? "text-primary-dark" : ""}`}
              >
                File
              </button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    <button>New</button>
                  </li>
                  <li className="menu-item">
                    <button>Make bin private</button>
                  </li>
                  <li className="menu-item">
                    <button>Delete</button>
                  </li>
                  <li className="menu-item">
                    <button>Archive</button>
                  </li>
                  <hr />
                  <li className="menu-item">
                    <button>Archive</button>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="p-2">
              <button
                onClick={handleOpenLibrary}
                className={`${openLibrary ? "text-primary-dark" : ""}`}
              >
                Add Library
              </button>
              {openLibrary ? (
                <ul className="menu z-10000">
                  <li className="menu-item">
                    <button>None</button>
                  </li>
                  <li className="menu-item">
                    <button>jQuery 3.1.0</button>
                  </li>
                  <li className="menu-item">
                    <button>Delete</button>
                  </li>
                  <li className="menu-item">
                    <button>Archive</button>
                  </li>
                  <hr />
                  <li className="menu-item">
                    <button>Archive</button>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>

          <div className=" flex items-center justify-between border border-black rounded">
            <div
              onClick={handleOpenHtml}
              className={`border border-r-black py-1 px-2 ${
                openHtml ? " bg-primary-light" : "gray"
              } rounded  cursor-pointer`}
            >
              HTML
            </div>
            <button
              onClick={handleOpenCss}
              className={`border border-r-black py-1 px-2 ${
                openCss ? " bg-primary-light" : "gray"
              }`}
            >
              CSS
            </button>
            <button
              onClick={handleOpenJavaScript}
              className={`border border-r-black py-1 px-2 ${
                openJavaScript ? " bg-primary-light" : "gray"
              }`}
            >
              JavaScript
            </button>

            <button
              onClick={handleOpenOutput}
              className={`py-1 px-2 ${
                openOutput ? " bg-primary-light" : "gray"
              } rounded`}
            >
              Output
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-2">
              <li>{user}</li>
              <li
                className="bg-[#ffeb3b] py-1 px-2 rounded relative cursor-pointer"
                onClick={handleOpenLogin}
              >
                {user?.name && <span>user: {reduxUser.name}</span>}
                &nbsp;
                {user ? (
                  <button onClick={handleLogout}>logout</button>
                ) : (
                  <button>Login or Register</button>
                )}
                {openLogin ? (
                  <div className="absolute z-50 w-[300px] right-[-15px] border border-black border-t-0 p-4 m-2 bg-white">
                    <div className="border border-black border-b-4 border-b-[#AAAAAA] text-center text-sm p-2 m-2">
                      <a href="https://github.com/login" className="flex gap-2">
                        <FaGithub /> <span>Login or Register via Github</span>
                      </a>
                    </div>
                    <div className="text-center text-[#BABABA]">
                      <span>Or</span>{" "}
                      <Link to="/login" className="underline">
                        use your email address
                      </Link>
                    </div>
                  </div>
                ) : null}
              </li>

              <Link to="/blog" className="py-1 px-2">
                Blog
              </Link>
              <Link to="/help" className="py-1 px-2">
                Help
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <section className="flex justify-between bg-[#f7f7f7] min-h-screen">
        {openHtml ? (
          <Editor
            language="xml"
            heading="HTML"
            value={html}
            onChange={setHtml}
          />
        ) : null}
        {openCss ? (
          <Editor language="css" heading="CSS" value={css} onChange={setCss} />
        ) : null}
        {openJavaScript ? (
          <Editor
            language="javascript"
            heading="JS"
            value={js}
            onChange={setJs}
          />
        ) : null}

        {openOutput ? <Output heading="Output" /> : null}
      </section>
      <PageFooter />
    </>
  );
}
