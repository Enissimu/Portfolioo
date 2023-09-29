import React from "react";






const useRefs = (refNum: number): React.RefObject<HTMLDivElement>[] => {

  const refArr = React.useRef<React.RefObject<HTMLDivElement>[]>([]);  

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
