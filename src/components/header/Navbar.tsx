import { useState } from "react";
import "./navbar.css"
const Navbar = ({ inView } :{inView:boolean}) => {
    const [lang,setLang]=useState(true)
    console.log(inView)

  return (


      
      <nav >
        <div className="nav-left">
          <span className="name">
            Gorkem Kantar
          </span>
          <div
          className="lang-container"

            onClick={() => setLang(!lang)}

          >
            <span className="lang-text" >{lang ? "Tr" : "En"}</span>
          </div>

          {/* <span className="self-end text-xs  whitespace-nowrap dark:text-white">en</span> */}
        </div>


        <div className="flex items-center">




          <div className="flex flex-col  ">
            <a className="mr-6  text-sm text-white   ">
              About
            </a>

            <div className="bg-white p-1 w-1 h-1 rounded-full  hover:bg-red-500 ease-in-out  "></div>
          </div>

          <div className="flex flex-col text-align text-center">
            <a className="mr-6  text-sm text-white ">
              Work
            </a>
            <div className="bg-white p-1 w-1 h-1 rounded-full"></div>
            <div className="bg-white p-1 w-1 h-1 rounded-full "></div>
          </div>
          <div className="flex flex-col text-align text-center">
            <a className="mr-6  text-sm   text-white  ">
              Contact
            </a>
            <div className="flex space-x-1 ">
              <div className="bg-white p-1 w-1 h-1 rounded-full"></div>
              <div className="bg-white p-1 w-1 h-1 rounded-full "></div>
              <div className="bg-white p-1 w-1 h-1 rounded-full "></div>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
export default Navbar;
