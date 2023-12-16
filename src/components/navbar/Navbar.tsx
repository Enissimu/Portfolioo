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
  console.log(inView)


  return (
    <nav>
      <div className="nav-left">
        <span className="name">ZART ZORT</span>
        {/*  NAME IS GONNA BE LIKE EXPANDABLE CHECK THIS LINK FOR ANIAMTION NEED ITS OWN COMPONENT https://codesandbox.io/s/yps54   ITS GONNA BE LIKE GORKEM<KURTULUS>KANTAR when hover colors are red and black and white for some reason i cannot comprehend */}
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
                  <SmallCircle></SmallCircle>
                  <SmallCircle></SmallCircle>
                  <SmallCircle></SmallCircle>
                  <SmallCircle></SmallCircle>
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
