import React from "react";



type HTMLDivAndElement=HTMLElement | HTMLDivElement



const useRefs = (refNum: number): React.RefObject<HTMLDivAndElement>[] => {

  const refArr = React.useRef<React.RefObject<HTMLElement>[]>([]);  

  for (let i = 0; i < refNum; i++) {
    if (refArr && refArr.current){
      if(i===0){
        refArr.current[i] = React.createRef();
      }
      refArr.current[i] = React.createRef<HTMLDivElement>();

    }
  }

  return refArr.current;
};

export default useRefs;
