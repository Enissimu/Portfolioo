import { useState } from "react";
import "./navbar.css";
import Circle from "./circle";
import SmallCircle from "./smallCircle";

interface InViewProps {
  inView: boolean;
  children: never[];
}

const Navbar = ({ inView }: InViewProps) => {
  const [lang, setLang] = useState(true);



  return (
    <nav>
      <div className="nav-left">
        <span className="name">ZART ZORT</span>
        <div className="lang-container" onClick={() => setLang(!lang)}>
          <span className="lang-text">{lang ? "Tr" : "En"}</span>
        </div>

        {/* <span className="self-end text-xs  whitespace-nowrap dark:text-white">en</span> */}
      </div>
      <div className="nav-right">
        <div className="nav-right-element">
          <a className="mr-6  text-sm text-white   ">About</a>
          <div className="circle-container">
          <Circle  ></Circle>
   
          </div>
        </div>

        <div className="nav-right-element">
          Work
          <div className="circle-container">
             <Circle  ></Circle>
                <Circle  ></Circle>
          </div>
        </div>
        <div className="nav-right-element">
          Contact
          <div className="circle-container">
                
                <Circle>
                  <SmallCircle></SmallCircle>
                </Circle>
                <Circle ></Circle>
                <Circle  ></Circle>
  
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
