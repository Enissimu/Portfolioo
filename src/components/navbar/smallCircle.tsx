
import { useSpring,animated } from "@react-spring/web";
import { useEffect } from "react";

const  getRndInteger=(min:number, max:number)=> {
  return String( Math.floor(Math.random() * (max - min) ) + min);
}

const SmallCircle=({hovered}:{hovered:boolean})=>{
//RANDOMIZE THE MARGIN ,COLOR , MASS, ALL SORT OF VARIABLES 
  const [springs, api] = useSpring(() => ({
    config: {tension:100,
      mass:5
    },
  }));

  useEffect(() => {
    api.start({
      backgroundColor: hovered ? "#cbb19b" : "#dfe0e0",
      y: hovered ? -15 : 0,
    });
  }, [hovered]);


return(

            <animated.div
              className="circle-small"
              style={{
                ...springs,
                marginLeft: `${getRndInteger(0,5)}px`   
              }}
              >
            </animated.div>
)
}
export default SmallCircle