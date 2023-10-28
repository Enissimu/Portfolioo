
import { useSpring,animated } from "@react-spring/web";


const Circle=(props)=>{


  const [springs, api] = useSpring(() => ({
    from: {
      backgroundColor: "green",
      y: 0,
    },
    config: {},
  }));

  const handleClick = () => {
    api.start({
      from: {
        y: 0,
        backgroundColor: "hsla(316,81%,62%,1)",
      },
      to: [
        {
          y: -5,
          backgroundColor: "red",
        },

        {
          y: 0,
          backgroundColor: "hsla(30,69%,62%,1)",
        },
      ],
    });
  };

return(

            <animated.div
              onMouseEnter={handleClick}
              className="circle"
              style={{
                ...springs,
              }}
              onClick={handleClick}>
            {props.children}
            </animated.div>
)
}
export default Circle