
import { useSpring,animated } from "@react-spring/web"
import { useHover } from "@use-gesture/react"

interface circleProps{
  inView: boolean
  children: React.ReactNode
}







const Circle=({inView,children} :circleProps)=>{


 	// #00541f 	
	// #44c782 	
	// #c7ff85 	
	// #b9c743 	
	// #ffe48f 	


  // #cbb19b 	
	// #bd977c 	
	// #9b7960 	
	// #66452a 	
	// #dfe0e0


  const [springs, api] = useSpring(() => ({
    from: {
      backgroundColor: "#cbb19b",
      transform: "skew(6deg)",
      y: 0,
    },
      to:
      [
    {
      transform: "skew(-6deg)",
        
    },
        {
      transform: "skew(4deg)",
        
    },
        {
      transform: "skew(-4deg)",
        
    },
            {
      transform: "skew(2deg)",
        
    },
        {
      transform: "skew(-6deg)",
        
    },    {
      transform: "skew(6deg)",
        
    },    {
      transform: "skew(-5deg)",
        
    },    {
      transform: "skew(5deg)",
        
    },    {
      transform: "skew(-4deg)",
        
    },    {
      transform: "skew(4deg)",
        
    },    {
      transform: "skew(-3deg)",
        
    },    {
      transform: "skew(3deg)",
        
    },
            {
      transform: "skew(-2deg)",
    },

            {
      transform: "skew(2deg)",
    },        {
      transform: "skew(1eg)",
        
    },
      ]
  ,
    config:{
      
      duration:"100"
    },
  
    loop: true,
  }))
  console.log(springs,api)





return(

            <animated.div
              className="circle"
              style={{
                ...springs,
              }}
            >{children}
            </animated.div>
)
}
export default Circle