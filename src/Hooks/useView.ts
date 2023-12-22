import { useEffect, useState } from "react";

const useViews = (refs : React.RefObject<HTMLDivElement>[]) => {
  const [views, setViews] = useState(new Set<string>());

  useEffect(() => {
    const callback = (entries:IntersectionObserverEntry[],observer:IntersectionObserver) => {


      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id.includes("intersect")) {
            console.log(entry.target,typeof entry.target)
            setViews((prev) => new Set([...prev, entry.target.id]));

            if (entry.target.id === "intersect-4") {
              observer.disconnect()
            }
          }
        }
      });
    };


    const options = {
      threshold: 0.3,
    };  

    const progressObserver = new IntersectionObserver(callback, options);

    refs.forEach((ref) => {
      if(ref && ref.current){
        progressObserver.observe(ref.current);
      }
    });
    

    return () => {
      progressObserver.disconnect();
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return views;
};

export default useViews;
