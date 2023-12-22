import { useState } from "react";
import "./navbar.css";
import NavRightContainer from "./navRightContainter";

interface InViewProps {
  inView: boolean;
  views: Set<string>;
}

const Navbar = ({ inView,views }: InViewProps) => {
  const [lang, setLang] = useState(true);
  console.log(inView, "inview")
  console.log(views, "views3131")




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
      <NavRightContainer text={"About"} howMany={1}   inView={views.has('intersect-2')} ></NavRightContainer>
      <NavRightContainer  text={"Works"} howMany={2} inView={views.has('intersect-3')}></NavRightContainer>
      <NavRightContainer  text={"Contact"} howMany={3} inView={views.has('intersect-4')}></NavRightContainer>
      </div>
    </nav>
  );
};
export default Navbar;
