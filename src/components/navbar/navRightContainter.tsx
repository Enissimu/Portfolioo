import Circle from "./circle";
import SmallCircle from "./smallCircle";
import { useSpring } from "@react-spring/web";
import { useState } from "react";
interface NavRightContainerProps{
    inView: boolean;
    howMany: number;
    text:string;
}

const generateRandomCircles=(hovered:boolean,howMuch:number    )=>{
    console.log(hovered,howMuch)
    const arr=[]
    for(let i=0;i<howMuch;i++){
        arr.push(<SmallCircle hovered={hovered}></SmallCircle>)
    }
    return arr
}

const NavRightContainer = ({inView,howMany,text} :NavRightContainerProps)=>{
    const [hovered, setHovered] = useState(false);




  const [springs, api] = useSpring(() => ({
    from: {
      backgroundColor: "#cbb19b",
      y: 0,
    
    },
    to:{
      backgroundColor: "#dfe0e0",
      y: 15,
    },
    config: {tension:100,
      mass:5
    },
  }));

  const handleEnter = () => {
    setHovered(!hovered)
  }
    return(
             <div className="nav-right-element"
             onMouseEnter={handleEnter}
             onMouseLeave={()=>setHovered(!hovered)}
             >
          <a className="  ">{text}</a>
          <div className="circle-container">
        {
            [...Array(howMany)].map((e, i) => <Circle inView={inView} key={i} >
            {generateRandomCircles(hovered,5)}

            </Circle>)

        }
          
   
          </div>

        </div>
    )

}

export default NavRightContainer;