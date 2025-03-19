/** @format */
import React, { useEffect, useState, useRef } from "react";

export const path = {
  Landing: "/",
  Activities: "activities",
};


export const LazyComponent = ({ component: Component }) => {
  const componentRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.unobserve(componentRef.current); // Unobserve once loaded
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.01,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current); // Cleanup observer
      }
    };
  }, []);
  return (
    <div ref={componentRef}>
      {loaded ? <Component /> : null}
    </div>
  );
};