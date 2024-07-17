'use client';
import useMousePosition from './useMousePosition';
import { motion, useAnimation, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import './abouthome.css';
import Divider from '@mui/material/Divider';
import BackgroundGradient from './radientbox';
import img1 from '../components/assets/high.png';
import gif from '../components/assets/high.gif';
import img2 from '../components/assets/future.png';
import gif2 from '../components/assets/future.gif';
import img3 from '../components/assets/per.png';
import gif3 from '../components/assets/per.gif';
import img5 from '../components/assets/dev.png';
import gif4 from '../components/assets/dev.gif';
import img4 from '../components/assets/clock.png';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'react-intersection-observer';

const SecondaryHero = styled.div`
  --mask: radial-gradient(circle at var(--x, 30%) var(--y, 30%), black 25%, transparent 0);
  position: absolute;
  background: linear-gradient(45deg, #40e0d0, #9932cc, #ff1493, orange);
  color: rgb(9, 14, 23);
  -webkit-mask-image: var(--mask);
  mask-image: var(--mask);
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CustomStyle = styled(motion.div)`
  width: 22%;
  height: 40vh;
  background-color: #EDE9E3;
  border-radius: 3.5vw;
  align-items: center;
  justify-content: start;
  border: 1px solid  #000000 ;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => (props.isHovered ? '#FFCF96' : '#EDE9E3')}; 
    border-radius: 3.5vw;
    z-index: -1;
    clip-path: circle(40px at 50% 35%);
    transition: clip-path 1s ease;
  }

  &:hover::before {
    clip-path: circle(100%);
    overflow: hidden;
  }
    @media (min-width: 768px) and (max-width: 1200px) {
       height: 30vh;
       width: 47.5%;
       border-radius: 7vw;
       &:before {
       border-radius: 7vw;
  }
    }

    @media (max-width: 767px) {
       height: 30vh;
       width: 47.5%;
       border-radius: 9vw;
       &:before {
       border-radius: 9vw;
  }
    }
        
    }
`;


const HoverImage = styled.img`
transition: opacity 0.5s ease-in-out;
position: absolute;
-webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;

`;
const HoverNotImage = styled.img`
transition: opacity 0.5s ease-in-out;
opacity: ${props => (props.isHovered ? 0 : 1)};
position: absolute;
-webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
`;

const RotatingImage = styled.img`
  transition: transform 1s ease-in-out;

  ${CustomStyle}:hover & {
    animation: ${rotateAnimation} 5s linear infinite;
  }
`;

const Why = styled(motion.div)`
  font-size: 4.2vw;
  color: #000;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;
-webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 8vw;
    }
    @media (max-width: 767px) {
    font-size: 10vw;
    }
`;

const About = styled.div`
  margin-top: 3%;
  font-size: 1.5vw;
  color: #000;
  text-transform: uppercase;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;
  letter-spacing: 4px;
  font-weight: 800;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3vw;
    }
    @media (max-width: 767px) {
    font-size: 4vw;
    }
`;

const About1 = styled.div`
  margin-top: 15px;
  font-size: 1.2vw;
  color: #000;
  text-transform: uppercase;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3vw;
    }
    @media (max-width: 767px) {
    font-size: 4.5vw;
    line-height: 1;
     text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Para1 = styled.div`
  margin-top: 5px;
  font-size: 0.77vw;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: grey;
  letter-spacing: 1px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 2.3vw;
    }
`;

const Abouthome = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2, triggerOnce: true });
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const textRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const [hiddenClass, setHiddenClass] = useState('');
  const [hiddenClassmobile, setHiddenClassmobile] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setHiddenClass('hidden');
      } else {
        setHiddenClass('');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResizemobile = () => {
      if (window.innerWidth < 480) {
        setHiddenClassmobile('hidden');
      } else {
        setHiddenClassmobile('');
      }
    };

    window.addEventListener('resize', handleResizemobile);
    handleResizemobile(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResizemobile);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [controls, inView]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const myText = new SplitType('#my-text');
          gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0,
            duration: 0.1,
            onStart: () => {
              textRef.current.style.visibility = 'visible';
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (observer && textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = useMousePosition();
  // const size = isHovered ? 400 : 0;
  // const marqueeRef = useRef(null);

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const x = Math.round((clientX / window.innerWidth) * 100);
  //   const y = Math.round((clientY / window.innerHeight) * 100);

  //   document.documentElement.style.setProperty('--x', `${x}%`);
  //   document.documentElement.style.setProperty('--y', `${y}%`);
  // };

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);


  return (
    <div style={{ height: '100vh', overflowY: 'hidden', backgroundColor: '#EDE9E3', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="innovation-wrapper" ref={slider} style={{ display: 'flex' }}>
        <div className="innovation" ref={firstText}>
          <span className="space"> </span>Where Innovation Meets Vision <span className="space"> </span><span className="gradient-text">*</span> <span className="space"></span>
        </div>
        <div className="innovation" ref={secondText}>
          <span className="space"> </span>Where Innovation Meets Vision <span className="space"> </span><span className="gradient-text">*</span> <span className="space"></span>
        </div>
      </div>
      <div style={{ marginLeft: '5%', display: 'flex', flexDirection: 'column', marginRight: '5%', marginTop: hiddenClass ? '5%' : '0px', width: '90%' }}>
        <About id="my-text" ref={textRef} className='hidden'>About Us</About>
        <Why
          initial={{ opacity: 0, x: -30 }}
          ref={ref}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          style={{ marginTop: '-5px' }}>
          {hiddenClassmobile ? 'Why Choose Genzix' : 'Why Choose Genzix ?'}
        </Why>
        {/* <p className='para'>At Genzix, we're dedicated to bringing your dreams to life! Our expert team specializes in creating top-notch websites, apps, and digital solutions. We'll make sure your brand shines with carefully crafted websites, smart marketing, and amazing branding strategies. Let Genzix guide you to digital success - let's conquer the digital world together!</p> */}
        <div style={{ display: 'flex', justifyContent: hiddenClass ? 'center' : 'space-between', marginTop: hiddenClassmobile ? '0%' : '3%', height: hiddenClass ? '65.5vh' : '40vh', overflow: 'hidden', flexDirection: hiddenClass ? 'column' : 'row' }}>
          {hiddenClass ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: '100%', height: '65.5vh' }}>
              {hiddenClassmobile ? (
                <div style={{ height: '5vh' }}></div>
              ) : (
                <div style={{ height: '2vh' }}></div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '30vh' }}>
                <CustomStyle backgroundColor="rgba(240, 223, 165,0.2)" onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)} isHovered={isHovered1}
                  ref={ref1}
                  style={{ zIndex: '4', height: '30vh' }}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}>
                  <div style={{ height: '80px', width: '80px', marginTop: hiddenClassmobile ? '25%' : '20%' }}>
                    <HoverImage src={gif} height='80px' alt='' isHovered={isHovered1} />
                    <HoverNotImage src={gif} height='80px' alt='' isHovered={isHovered1} />
                  </div>
                  <About1 >Design Flexibility</About1>
                  {hiddenClassmobile ? (<></>) : (
                    <Para1 style={{ marginTop: '1vh' }}>Get custom designs that adapt to your needs, ensuring a unique user experience.</Para1>
                  )}

                </CustomStyle>
                <CustomStyle ref={ref2}
                  backgroundColor="rgba(178, 243, 252,0.2)"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  isHovered={isHovered2}
                  initial={{ opacity: 0, y: 70 }}
                  style={{ zIndex: '2', height: '30vh' }}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}>
                  <div style={{ height: '80px', width: '80px', marginTop: hiddenClassmobile ? '25%' : '20%' }}>
                    <HoverImage src={gif2} height='80px' alt='' isHovered={isHovered2} />
                    <HoverNotImage src={gif2} height='80px' alt='' isHovered={isHovered2} />
                  </div>
                  <About1 >Future Protection</About1>
                  {hiddenClassmobile ? (<></>) : (<Para1 style={{ marginTop: '1vh' }}>Ensure your digital presence is ready for the future with our scalable and secure solutions.</Para1>)}

                </CustomStyle>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5vh', width: '100%', height: '30vh' }}>
                <CustomStyle ref={ref3}
                  backgroundColor="rgba(255, 152, 111,0.2)"
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                  isHovered={isHovered3}
                  style={{ zIndex: '3', height: '30vh' }}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                >
                  <div style={{ height: '80px', width: '80px', marginTop: hiddenClassmobile ? '25%' : '20%' }}>
                    <HoverImage src={gif3} height='80px' alt='' isHovered={isHovered3} />
                    <HoverNotImage src={gif3} height='80px' alt='' isHovered={isHovered3} />
                  </div>
                  <About1 >Fast Development</About1>
                  {hiddenClassmobile ? (<></>) : (<Para1 style={{ marginTop: '1vh' }}>We're all about speed! From design to marketing, we make your vision a reality, fast!</Para1>)}

                </CustomStyle>
                <CustomStyle ref={ref4}
                  backgroundColor="rgba(254, 184, 182,0.2)"
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                  isHovered={isHovered4}
                  style={{ zIndex: '1', height: '30vh' }}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                >
                  <div style={{ height: '80px', width: '80px', marginTop: hiddenClassmobile ? '25%' : '20%' }}>
                    <HoverImage src={gif4} height='80px' alt='' isHovered={isHovered4} />
                    <HoverNotImage src={gif4} height='80px' alt='' isHovered={isHovered4} />
                  </div>
                  <About1 >High Performance</About1>
                  {hiddenClassmobile ? (<></>) : (<Para1 style={{ marginTop: '1vh' }} >Enjoy high-speed, top-performing digital solutions for a seamless experience.</Para1>)}

                </CustomStyle>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', width: '100%' }}>
              <CustomStyle backgroundColor="rgba(240, 223, 165,0.2)" onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)} isHovered={isHovered1}
                ref={ref1}
                style={{ zIndex: '4', }}
                initial={{ opacity: 0, y: 70 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}>
                <HoverImage src={gif} height='35%' alt='' style={{ marginTop: '16%' }} />
                <About1 style={{ marginTop: '53%' }}>Design Flexibility</About1>
                <Para1 >Get custom designs that adapt to your needs, ensuring a unique user experience.</Para1>
              </CustomStyle>
              <CustomStyle ref={ref2}
                backgroundColor="rgba(178, 243, 252,0.2)"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                isHovered={isHovered2}
                initial={{ opacity: 0, x: "-125%" }}
                style={{ zIndex: '3', }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: "-125%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}>
                <HoverImage src={gif2} height='35%' alt='' style={{ marginTop: '16%' }} />
                <About1 style={{ marginTop: '53%' }}>Future Protection</About1>
                <Para1 >Ensure your digital presence is ready for the future with our scalable and secure solutions.</Para1>
              </CustomStyle>
              <CustomStyle ref={ref3}
                backgroundColor="rgba(255, 152, 111,0.2)"
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                isHovered={isHovered3}
                style={{ zIndex: '2', }}
                initial={{ opacity: 0, x: "-125%" }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: "-125%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
              >
                <HoverImage src={gif3} height='35%' alt='' style={{ marginTop: '16%' }} />
                <About1 style={{ marginTop: '53%' }}>Fast Development</About1>
                <Para1 >We're all about speed! From design to marketing, we make your vision a reality, fast!</Para1>
              </CustomStyle>
              <CustomStyle ref={ref4}
                backgroundColor="rgba(254, 184, 182,0.2)"
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                isHovered={isHovered4}
                style={{ zIndex: '2', }}
                initial={{ opacity: 0, x: "-125%" }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: "-125%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 3.2 }}>
                <HoverImage src={gif4} height='35%' alt='' style={{ marginTop: '16%' }} />
                <About1 style={{ marginTop: '53%' }}>High Performance</About1>
                <Para1 >Enjoy high-speed, top-performing digital solutions for a seamless experience.</Para1>
              </CustomStyle>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Abouthome;
