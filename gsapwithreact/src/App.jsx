import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const App = () => {
  // first way
  // const gsapRef = useRef();

  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1000,
  //     duration: 2,
  //     delay: 1,
  //     rotate: 720
  //   });
  // });

  // second way

  // const boxRef = useRef();

  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     y:300,
  //     opacity: 0,
  //     rotate: 360,
  //     duration: 1,
  //     delay: 1,
  //   })
  // })

  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       y: 300,
  //       opacity: 0,
  //       rotate: 360,
  //       duration: 1,
  //       delay: 1,
  //     });
  //   },
  //   { scope: ".container" }
  // );

  // Third way
  // const [circle, setCircle] = useState(0);
  // const random = gsap.utils.random(-500, 500, 100);

  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.2,
  //   })
  // }, [circle])

  const boxRef = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(
    () => {
      gsap.from(boxRef.current, {
        rotate: 360,
        duration: 1,
      });
    },
  );

  return (
    <main>
      {/* <div ref={gsapRef} id="box"></div> */}

      {/* 
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      {/* <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      {/* <button
        onClick={() => {
          setCircle(random);
        }}
      >
        Animate
      </button>
      <div className="circle"></div> */}

      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default App;
