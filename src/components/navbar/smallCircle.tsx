
import { useSpring,animated } from "@react-spring/web";


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

  const handleClick = () => {
    api.start({
      from: {
        y: 0,
        backgroundColor: "hsla(316,81%,62%,1)",
      },
      to: [
        {
          y: -100,
          backgroundColor: "hsla(30,69%,62%,1)",
        },

      ],
    });
  };

return(

            <animated.div
              onMouseEnter={handleClick}
              className="circle-small"
              style={{
                ...springs,
                marginLeft:"5px"  
              }}
              onClick={handleClick}>
            </animated.div>
)
}
export default SmallCircle