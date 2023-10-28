
import './App.css'
import useRefs from './Hooks/useRefs'
import { useEffect } from 'react'
import useViews from './Hooks/useView'
import Navbar from './components/navbar/Navbar'
import ModelView from './components/canvas/ModelView'
const App=()=> {
  const refArr=useRefs(4)
  const views=useViews(refArr)

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);




  switch (refArr) {
    case refArr:
      
      break;
  
    default:
      break;
  }


  return (
    <div className="main">

{/* cavnas start */}
      <div className="canvas">
        <div className="canvas-alt">
        <ModelView views={views}></ModelView>
        </div>
      </div>
{/* canvas end */}



      <div className="main-container">
        <div className="space"></div>

        <div className="space"></div>
{/* header start */}

        <header
        ><div
          ref={refArr[0]}
          id="intersect-1"
          className="Header">
<Navbar inView={views.has("intersect-1")}>

</Navbar>
</div></header>
{/* header end */}


{/* sections start */}
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
{/* sections end */}

      <footer >

      </footer>



    </div>





  );
}

export default App
