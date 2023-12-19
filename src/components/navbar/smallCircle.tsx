
import { useSpring,animated } from "@react-spring/web";

const  getRndInteger=(min:number, max:number)=> {
  return String( Math.floor(Math.random() * (max - min) ) + min);
}

const SmallCircle=()=>{
//RANDOMIZE THE MARGIN ,COLOR , MASS, ALL SORT OF VARIABLES 

  const [springs, api] = useSpring(() => ({
    from: {
      backgroundColor: "green",
      y: 0,
    },
    config: {tension:100,
      mass:5
    },
  }));


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