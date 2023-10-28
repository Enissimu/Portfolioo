import { useState,useEffect } from "react";
import "./navbar.css"
import { useSpring ,animated} from '@react-spring/web'



interface InViewProps {
  inView:boolean 
children: never[]
}


const timing=150

const Navbar = ({ inView } :InViewProps) => {
    const [lang,setLang]=useState(true)

  const [isBooped, setIsBooped] = useState(false);


  const [springs, api] = useSpring(() => ({
        from: {
        y: 0,
      },
             config: {
      },

  }))




  useEffect(() => {
        if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);





      const handleClick = () => {
        
        api.start({
      from: {
        y: 0,
      },
      to:
      [
{
        y: -5, 
      },
         
{
        y:0
      },
      ] 
    }
    )
        setIsBooped(true);

  }


  return (      
      <nav >
        <div className="nav-left">
          <span className="name">
            ZART ZORT
          </span>   
          <div
          className="lang-container"
            onClick={() => setLang(!lang)}>
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
            <div className="circle-container" >
              <animated.div onMouseEnter={handleClick} className="circle" style={{
...springs
              }}  onClick={handleClick}/>
              <div className="circle "></div>
              <div className="circle "></div>
            </div>
          </div>
        </div>
      </nav>
    
  );
};
export default Navbar;
