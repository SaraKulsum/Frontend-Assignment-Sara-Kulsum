import { useState,useEffect,useRef } from 'react'
import './App.css'

import Section0 from './components/sections/Section0';   
import Section1 from './components/sections/Section1';
import FixedCapsule from './components/FixedCapsule';
 


function App() {
  const containerRef = useRef(null); // Create a ref for the container
  const [isSmall, setIsSmall] = useState(false); // State to determine the style of FixedCapsule

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = document.documentElement; // Get current scroll position
        const containerHeight = containerRef.current.clientHeight; // Get height of the container
        const halfContainerHeight = containerHeight *1.5 ; // Calculate half of the container height

        // Change the isSmall state based on scroll position
        if (scrollTop > halfContainerHeight) {
          setIsSmall(true); // Set to true if scrolled past half height
        } else {
          setIsSmall(false); // Set to false if above half height
        }
      }
    };

     // Listen for scroll events
     window.addEventListener('scroll', handleScroll);

     // Cleanup event listener on unmount
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, [containerRef]);
  
  return ( 
    <>
    <div ref={containerRef} className="Container relative w-full h-screen ">
   
    <Section1/>
    <Section0 />
    
   <div className='flex justify-center'>
 
   <FixedCapsule isSmall={isSmall} />
   </div>
   
    </div>
    </>
  )
}

export default App
