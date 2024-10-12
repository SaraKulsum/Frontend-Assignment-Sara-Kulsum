import React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
 
import Mark from "../SVGS/MarkSvg";
import Logo from "../SVGS/Logo";
import { IoMenu } from "react-icons/io5";
import Section2 from "./Section2";
const Section1 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [capsule, setCapsule] = useState(false);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start start", "end end"], // The offset for when the animation starts and ends
  });

  // Transforming the height of the image from 300px to 100vh (full screen) as you scroll
  const imageY = useTransform(scrollYProgress1, [0.5, 0.7], ["35vh", "-25vh"]);
  // Transforming the width of the image to full width on scroll

  const scale4 = useTransform(scrollYProgress1, [0.6, 0.9], [2, 4]);

  const borderRadius = useTransform(
    scrollYProgress1,
    [0.5, 1],
    ["0rem", "1rem"]
  );
  const bgImg = useTransform(
    scrollYProgress1,
    [0.9, 1],
    [
      "none",
      "url('https://s3-alpha-sig.figma.com/img/61a4/7cc7/709fb3f432dea41fc433a2c59702fd2f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SV8a4-sNU5CCEJMN6QSKLnhRg~ElRIDQ~iy1-~Y~jLdiQGOd5aFs19YOlpiyQHeyADHeRE~kEEeMQC6u8SReSlaFLOIZn5xOY939xSUel02WgTztipfO2b1qSez8yAsjzPKz51q4EsL0VVWw4jLBsmlWYQT51PoKgBoANnqSxHiQ2nLZRIz-cY6gzTHu3TvBKGt3~R-IUfft6v4fvV3vPRA0Ryk4sTetopFrFQa0VDK6w6vPsAaRT0NJMUj79a35usdsZOLSHDuL~ZB~FTRFUccBiorDnNUjBTZbU1Gkt-I6YpojC2c3QgERdLSytKj82mBNtpwrEYHBQ4HEbrs1tA__')",
    ]
  );

  // Opacity for text to fade out smoothly as we scroll
  const textOpacity = useTransform(scrollYProgress1, [0.4, 0.6], [1, 0]);
  const lastColTextOpacity = useTransform(scrollYProgress1, [0.7, 1], [0, 1]);
  const capsuleSetting = useTransform(
    scrollYProgress1,
    [0, 0.7],
    [false, true]
  );
  
  useEffect(() => {
    // Update the state when capsuleSetting changes
    const unsubscribe = capsuleSetting.onChange((value) => {
      setCapsule(value);
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [capsuleSetting]);
  return (
    <div className="absolute z-20 h-[650vh] w-full  ">
      <div className="navBar sticky top-5 z-[999] w-full flex ">
        <div className="w-fit px-2">
          <IoMenu color="white" size={30} />
        </div>
        <div className="flex justify-center w-full -translate-x-5">
          <Logo color1={"white"} color2={"white"} />
        </div>
        <div className="fixed z-[50] -top-20 w-full flex justify-center">
          <Mark height={"200"} opacity={textOpacity.get()} />
        </div>
      </div>
      <div ref={ref1} className="section1  relative h-[400vh] w-full  ">
        {/* Section that will be sticky and transition the image */}
        <motion.div
          className="sticky top-0 h-[100vh] bg-[#212D2D]  w-full flex flex-col items-center  justify-around overflow-hidden"
          style={{
            backgroundImage: bgImg,
            backgroundColor: "#212D2D",
            backgroundPosition: "center",
            transition:
              "background-image 0.7s ease, background-position 0.7s ease",
          }} // Smooth transition
        >
          {/* Text that stays on top */}
          <motion.h1
            style={{ opacity: textOpacity }}
            className="absolute font-athelas font-thin z-[5] flex flex-col text-white "
          >
            LOREM INTO IPSUM
            <br />A LOREM in THE IPSUM
          </motion.h1>

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
              src="https://s3-alpha-sig.figma.com/img/6085/ce25/601aaae3d6984bb1c90c30a25187b2b5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irnbKJO1EMga1l5E2bllRC5FM1p5ErtkUVARKsOGWpby8mHtipg-FI9f72dyOgp6VodRwsO40p5CdreqbPD-cDqd1e2lzTyDwLRrAJHD6XJRYBXd18uCErKl5Fr5aNinz7WyiRONpDcUAwY6pN7DHua~of4nKJVjVbssT~UBzNn6C6xQWJlCWBbcCZYCtJqj-aP5ANFiagieykFr1Cc2JWOW1x9aT8pdbdDYu1JtsbqOP6vvlevmsp0HSnh6-JMs0xOJwwvWDLOgB2xdfGGv8py5vX03EUnTG73DDPMbIml6btd3156rxSlEiYmojO~PhIG2H~U~B8xiDrs-LmmQHQ__"
              alt="Bottom Image"
              className={`object-cover w-full h-auto transition-all duration-500`}
            />
          </motion.div>

          <motion.div
            style={{ opacity: lastColTextOpacity }}
            className="absolute font-athelas transition-opacity duration-500 h-fit bottom-[6rem] text-sm font-thin z-[5] text-center flex   items-center justify-center text-black"
          >
            <span className="font-athelas mx-2">A Lorem for The ipsum</span>
            <span className="block bg-[#474747] h-10 w-[1px] mx-2 " />
            <span className="font-jakarta">
              A Lorem for the ipsum, A lorem for the ipsum, A lorem for the
              ipsum.
            </span>
          </motion.div>
        </motion.div>
      </div>

      <Section2 />
    </div>
  );
};

export default Section1;
