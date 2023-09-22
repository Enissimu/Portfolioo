
import './App.css'
import useRefs from './Hooks/useRefs'
import { useEffect } from 'react'
import useViews from './Hooks/useView'

const App=()=> {
  const refArr=useRefs(4)
  const views=useViews(refArr)

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  console.log(views)


  for (let i = 0; i < 4; i++) {
    console.log(typeof refArr[i])
    
  }
  switch (refArr) {
    case refArr:
      
      break;
  
    default:
      break;
  }


  return (
    <div className="overflow-clip">

      <div className="canvas-container">
        <div className="canvas">
          <p>CANVAS</p>

        </div>
      </div>

      <div className="main-container">
        <div className="space"></div>

        <div className="space"></div>
        <header
          ref={refArr[0]}
          id="intersect-1"
          className="Header"
        >
<section>HEADER</section>
        </header>

        <div className="section">
          <div className="space"></div>

          <div ref={refArr[1]} id="intersect-2" className="section-element">
            <section>ABOUT</section>
          </div>

          <div ref={refArr[2]} id="intersect-3" className="section-element">
            <section>WORKS</section>
          </div>

          <div ref={refArr[3]} id="intersect-4" className="section-element">
            <section>HIRE ME</section>
          </div>
        </div>


      </div>
      <footer className="Footer">

      </footer>
    </div>





  );
}

export default App
