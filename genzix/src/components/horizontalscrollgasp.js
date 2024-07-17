import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./horizontalscrollgasp.css";
import Parallelbox from './parallelbox';
import img from '../components/assets/horihigh.png';
import img1 from '../components/assets/page2.gif';
import img2 from '../components/assets/page3.gif';
import gif from '../components/assets/page1.gif';
import gif1 from '../components/assets/1.gif';
import gif2 from '../components/assets/2.gif';
import gif3 from '../components/assets/3.gif';
import gif4 from '../components/assets/4.gif';
import gif5 from '../components/assets/5.gif';

gsap.registerPlugin(ScrollTrigger);

const Image = styled.img`
  height: 15vh;
  width: auto;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 10vh;
  left: -1%;
  z-index: -1;
`;

const Image1 = styled.img`
  height: 30vh;
  width: auto;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 7vh;
  right: -2%;
  @media (min-width: 768px) and (max-width: 1200px) {
        height: 20vh;
    }
  @media (max-width: 480px) {
       height: 20vh;
        
  }
`;

const Image2 = styled.img`
  height: 100%;
  width: 100%;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  border-radius: 50%;
`;

const Why = styled.div`
  font-size: 3.5vw;
  color: #000;
  font-weight: 600;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  letter-spacing: 1px;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;

   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3.3vw;
    }
    @media (max-width: 767px) {
    font-size: 4vw;
    }
`;

const Why1 = styled.div`
  font-size: 4.2vw;
  color: #000;
  font-weight: 600;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  letter-spacing: 1px;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;

   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 8vw;
    }
    @media (max-width: 767px) {
    font-size: 10vw;
    }
`;


const Para4 = styled.div`
  margin-top: 5px;
  font-size: 1.1vw;
  line-height: 1.5;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  font-family: "Inter", sans-serif;
  text-align: justify;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 400;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 2vw;
    }
    @media (max-width: 767px) {
    font-size: 2.3vw;
    }
`;

const Circle = styled.div`
  height: 9vw;
  width: 9vw;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  top: -1.2vw;
  right: -1.2vw;
  @media (min-width: 768px) and (max-width: 1200px) {
      height: 30vw;
      width: 30vw;
   top: -8vw;
  right: -8vw;
    }
    @media (max-width: 767px) {
     height: 40vw;
      width: 40vw;
   top: -12vw;
  right: -12vw;
    }
`;

const ContainerHalf2 = styled.div`
  height: 45vh;
  width: 45vw;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  background-color: rgba(20, 20, 20, 0.85);
  border-radius: 3.5vw;
  position: relative;
  overflow: hidden;

   @media (min-width: 768px) and (max-width: 1200px) {
       border-radius: 9vw;
    }
    @media (max-width: 767px) {
    border-radius: 12vw;
    }
`;


const Horizontalscrollgasp = () => {
  const component = useRef();
  const slider = useRef();
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
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResizemobile = () => {
      if (window.innerWidth < 767) {
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


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <Parallelbox />
      <div ref={slider} className="container">
        <div className="panel blue">
          <div className='containerhalf'>
            <div style={{ marginTop: '16vh' }}>
              <Why1 style={{ zIndex: '1', fontWeight: '600', color: '#fff' }}>My way of getting <br /> things done</Why1>
              <Image src={img} alt='' />
            </div>
            {hiddenClass ? (<></>) : (<Image1 src={gif} alt='' />)}

          </div>
          <div className='containerhalf' style={{ display: 'flex' }}>
            <div style={{ marginRight: '5.56%', height: '50vh', width: '42.5vw' }}></div>
            <ContainerHalf2 >
              <div style={{ width: hiddenClass ? '80%' : '65%', marginTop: hiddenClass ? (hiddenClassmobile ? '80%' : '70%') : '9%', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Para4 style={{ color: hiddenClass ? 'CFCDCD' : '#fff' }}>Fill out the project details form; we can schedule a meeting if needed to ensure a productive project design collaboration.</Para4>
              </div>
              <div style={{ width: hiddenClass ? '80%' : '90%', marginTop: hiddenClass ? '7%' : '10%', display: 'flex', justifyContent: 'space-between', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>Initial Consultation</Why>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>01</Why>
              </div>
              <Circle >
                <Image2 src={gif2} alt='' ></Image2>
              </Circle>
            </ContainerHalf2>
          </div>
        </div>
        <div className="panel blue">
          <div className='containerhalf'>
            <Image1 src={img1} alt='' />
          </div>
          <div className='containerhalf' style={{ display: 'flex' }}>
            <ContainerHalf2 style={{ marginRight: '5vw' }}>
              <div style={{ width: hiddenClass ? '80%' : '65%', marginTop: hiddenClass ? (hiddenClassmobile ? '100%' : '70%') : '9%', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Para4 style={{ color: hiddenClass ? 'CFCDCD' : '#fff' }}>We'll design, finalize details, draft the contract, and set project deadlines collaboratively for successful completion.</Para4>
              </div>
              <div style={{ width: hiddenClass ? '80%' : '90%', marginTop: hiddenClass ? '7%' : '10%', display: 'flex', justifyContent: 'space-between', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>Design Review</Why>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>02</Why>
              </div>
              <Circle >
                <Image2 src={gif5} alt='' ></Image2>
              </Circle>
            </ContainerHalf2>
            <ContainerHalf2 >
              <div style={{ width: hiddenClass ? '80%' : '65%', marginTop: hiddenClass ? (hiddenClassmobile ? '100%' : '70%') : '9%', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Para4 style={{ color: hiddenClass ? 'CFCDCD' : '#fff' }}>I'll code the web and app for optimal performance, responsiveness, and a seamless, modern user experience across all devices.</Para4>
              </div>
              <div style={{ width: hiddenClass ? '80%' : '90%', marginTop: hiddenClass ? '7%' : '10%', display: 'flex', justifyContent: 'space-between', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>Development</Why>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>03</Why>
              </div>
              <Circle >
                <Image2 src={gif1} alt='' ></Image2>
              </Circle>
            </ContainerHalf2>
          </div>
        </div>
        <div className="panel blue">
          <div className='containerhalf'>
            <Image1 src={img2} alt='' />
          </div>
          <div className='containerhalf' style={{ display: 'flex' }}>
          <ContainerHalf2 style={{ marginRight: '5vw' }}>
              <div style={{ width: hiddenClass ? '80%' : '65%', marginTop: hiddenClass ? (hiddenClassmobile ? '100%' : '70%') : '9%', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Para4 style={{ color: hiddenClass ? 'CFCDCD' : '#fff' }}>After completion, we'll test the site on all devices and browsers, assist with the launch, and provide ongoing support.</Para4>
              </div>
              <div style={{ width: hiddenClass ? '80%' : '90%', marginTop: hiddenClass ? '7%' : '10%', display: 'flex', justifyContent: 'space-between', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>Review and Testing</Why>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>04</Why>
              </div>
              <Circle >
                <Image2 src={gif4} alt='' ></Image2>
              </Circle>
            </ContainerHalf2>
            <ContainerHalf2 >
              <div style={{ width: hiddenClass ? '80%' : '65%', marginTop: hiddenClass ? (hiddenClassmobile ? '100%' : '70%') : '9%', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Para4 style={{ color: hiddenClass ? 'CFCDCD' : '#fff' }}>I'll optimize your digital marketing strategy to enhance branding, drive campaigns, and deliver measurable results.</Para4>
              </div>
              <div style={{ width: hiddenClass ? '80%' : '90%', marginTop: hiddenClass ? '7%' : '10%', display: 'flex', justifyContent: 'space-between', marginLeft: hiddenClass ? '10%' : '5%' }}>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>Digital Marketing</Why>
                <Why style={{ fontWeight: '500', letterSpacing: '2px', color: '#fff' }}>05</Why>
              </div>
              <Circle >
                <Image2 src={gif3} alt='' ></Image2>
              </Circle>
            </ContainerHalf2>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontalscrollgasp;
