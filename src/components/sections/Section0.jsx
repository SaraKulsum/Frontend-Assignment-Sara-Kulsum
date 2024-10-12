
import { IoRainyOutline } from "react-icons/io5";
import Logo from "../SVGS/Logo";
import Mark from "../SVGS/MarkSvg"
const Section0 = () => {


  return (
    <div className="sticky top-0  z-30   w-full h-screen">
     <div className="section0 relative w-full h-screen  ">
      {/* Video Background */}
      <video
        className="absolute w-full   h-full object-cover object-top"
        autoPlay
        loop
        muted
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1356575204746472376/TEAM/9982/cca2/-5ae6-4adb-81b4-c2d194c6ef4c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DA5X4G35nsqCYQOJifjatZJg-ux03avnabBzczxawb01-iKINIZRcDJ6nyQOt2vcAACeY5WVHW7ejPjpEWv4c6590eB1QyuaIwjD9al0X5Fjxd9yTPELjz2rSBXVfl73XOTIyD8ELhDDQ5btixpjuTjQrVWF4ssvcVj~4pCl-xdTv8KzkoKEPKY1XOPqqU652256iKxiJ4YGT2f2m1wX4gG0DF5NNBCocDGzOTy0-T4F3XAW-wCI50Oea6IstUn6jGmFI-~XxR-MAoHcMiKUDdUTL5e~uI9tlRKfoqcHzv-7woaJYOfQEIIg86ks0gBPfETkJU2g4NEzKbrWXmOGIQ__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white opacity-75"></div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-full bg-custom-gradient"></div>

      {/* Content Overlaid on Video */}
      <div className="top-row relative   z-10 flex flex-col justify-between items-center h-full text-[#F3F3F3] pt-10">
        <div className="flex flex-col items-center">
          <Logo color1={"#553597"} color2={"#676767"} />
          <h1 className="text-[#212D2D] text-font-jakarta text-sm">
            Lorem Ipsum
          </h1>
        </div>

        <div className="flex flex-col text-2xl ">
          <span className="font-athelas">A LOREM IPSUM</span>
          <span className="font-athelas pl-10">in LOREM IPSUM</span>
        </div>

        <div className="py-4 flex flex-col item-center justify-center gap-14  ">
          {/*image and name */}
          <div className="flex flex-col items-center ">
            <img
              className="rounded-full h-9 w-9"
              src="https://s3-alpha-sig.figma.com/img/6085/ce25/601aaae3d6984bb1c90c30a25187b2b5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irnbKJO1EMga1l5E2bllRC5FM1p5ErtkUVARKsOGWpby8mHtipg-FI9f72dyOgp6VodRwsO40p5CdreqbPD-cDqd1e2lzTyDwLRrAJHD6XJRYBXd18uCErKl5Fr5aNinz7WyiRONpDcUAwY6pN7DHua~of4nKJVjVbssT~UBzNn6C6xQWJlCWBbcCZYCtJqj-aP5ANFiagieykFr1Cc2JWOW1x9aT8pdbdDYu1JtsbqOP6vvlevmsp0HSnh6-JMs0xOJwwvWDLOgB2xdfGGv8py5vX03EUnTG73DDPMbIml6btd3156rxSlEiYmojO~PhIG2H~U~B8xiDrs-LmmQHQ__"
              alt="img1"
            />
            <span className="font-jakarta text-xs font-[50] ">lorem by</span>
            <span className="font-jakarta  text-[13px] font-[200]">
              Lorem & Ipsum Lorem
            </span>
          </div>
          {/*weather */}
          <div className="flex justify-center">
            <span className="flex gap-1 items-center text-xs font-thin  font-jakarta">
              27 <IoRainyOutline /> Lorem
            </span>
          </div>
        </div>
        
        <Mark height={'100'} opacity={0.5}/>
        
      
      </div>
     </div>
     </div>
  );
};

export default Section0;
