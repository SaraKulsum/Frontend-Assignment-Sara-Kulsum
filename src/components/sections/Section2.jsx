import React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Section2 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [capsule, setCapsule] = useState(false);

  useEffect(() => {
    // Get total scrollable height
    const totalScrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    setScrollHeight(totalScrollHeight);
    setViewportHeight(viewportHeight);
  }, []);
  const speedFactor = 0.9;
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start start", "end end"], // The offset for when the animation starts and ends
  });

  // Transforming the height of the image from 300px to 100vh (full screen) as you scroll
  const imageY = useTransform(scrollYProgress1, [0.2, 0.7], ["35vh", "-25vh"]);
  // Transforming the width of the image to full width on scroll

  const scale4 = useTransform(scrollYProgress1, [0.4, 1], [2, 4]);

  const borderRadius = useTransform(
    scrollYProgress1,
    [0.5, 1],
    ["0rem", "1rem"]
  );

  const transY = useTransform(
    scrollYProgress1,
    [0, 1],
    [0, -(scrollHeight - viewportHeight) * speedFactor]
  );
  // Opacity for text to fade out smoothly as we scroll
  const textOpacity = useTransform(scrollYProgress1, [0.1, 0.3], [1, 0]);
  const lastColTextOpacity = useTransform(scrollYProgress1, [0.4, 1], [0, 1]);

  return (
    <div ref={ref1} className="section1  relative h-[300vh] w-full  ">
      {/* Section that will be sticky and transition the image */}
      <motion.div className="sticky top-0 h-[100vh] bg-[#212D2D]  w-full flex flex-col items-center  justify-center overflow-hidden">
        {/* Text that stays on top */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute font-athelas font-thin z-[5] -translate-y-16  flex flex-col gap-4 justify-center items-center px-2 h-[10vh] text-white "
        >
          <span className="text-sm">LOREM OF </span>
          <h1 className="text-lg">LOREM of IPSUM</h1>
          <p className="font-jakarta text-sm">
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
          </p>
          <p className="font-jakarta text-sm">
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the
            ipsum.A Lorem for the ipsum, A lorem for the ipsum, A lorem for the
            ipsum.
          </p>
        </motion.div>

        <motion.div
          className={`relative h-fit max-h-[20vh] w-[25vw]  overflow-hidden `}
          style={{
            scale: scale4,
            translateY: imageY,
            borderBottomLeftRadius: borderRadius,
          }}
        >
          {/* Image that will scale and resize */}
          <img
            src="https://s3-alpha-sig.figma.com/img/27e6/a1b2/4e19036df0343b5011a5c96723b8394b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKN9HbMg47KEus4Pso6GWkmNkKff8NpCDtkIgHPx7cp33KMwEAiF3oRRDhoQLeCB-JmNdfIn6ndRT2916tkDK54~cmvEnizd~uHukcvUMhVySprc1RGwuHFNlIrqKVH7RDbsmWdem~e~3IxF3eMrd6TGMYWJaIKwVPzYQMnfU85FHOOPFoVb0qx6VQmh1fmhuPI73kADiwE4fO5cfngXbvOBvakkFBZNfG4bKTtK34qXqOAHAsCx0xu-qhqHrXs8E9C8D-awU8t00YP1sP-y9Za5HpuYlubhJ52eHSSEymOMSlGcwekONz3LYuD3Ndf7IsQfFvDzj3MtSzIzYLUQiw__"
            alt="Bottom Image"
            className={`object-cover w-full h-auto`}
            // style={{ borderBottomLeftRadius: "3rem" }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: lastColTextOpacity }}
          className="absolute font-athelas h-fit left-2  translate-y-36 text-white text-sm font-thin z-[5] text-center flex   items-center justify-center "
        >
          <span className="font-athelas mx-2">
            A Lorem for
            <br />
            The ipsum
          </span>
          <span className="block bg-[#474747] h-24 w-[1px] mx-2 " />
          <ul>
            <li>Lorem Lorem</li>
            <li>Ipsum Ipsum</li>
            <li>Lorem Lorem</li>
            <li>Ipsum Ipsum</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section2;
