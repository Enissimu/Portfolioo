import { useState } from "react";
import "./navbar.css"
interface InViewProps {
  inView:boolean 
children: never[]
}
const Navbar = ({ inView } :InViewProps) => {
    const [lang,setLang]=useState(true)
    console.log(typeof inView,)

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


        <div className="nav-right">




          <div className="nav-right-element">
            <a className="mr-6  text-sm text-white   ">
              About
            </a>
            <div className="circle-container">

            <div className="circle "></div>
            </div>
          
          </div>

          <div className="nav-right-element">
              Work
            <div className="circle-container">

            <div className="circle"></div>
            <div className="circle "></div>
            </div>
          
          </div>
          <div className="nav-right-element">
              Contact
            <div className="circle-container">
              <div className="circle"></div>
              <div className="circle "></div>
              <div className="circle "></div>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
export default Navbar;
