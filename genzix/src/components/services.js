'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useTransform } from "framer-motion";
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import img from '../components/assets/none.gif';
import img1 from '../components/assets/Arrowh.png';
import gif1 from '../components/assets/webgif.gif';
import gif2 from '../components/assets/bra.gif';
import gif3 from '../components/assets/digi.gif';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'react-intersection-observer';

const CustomStyle = styled(motion.div)`
  width: 22%;
  height: 52vh;
  align-items: start;
  justify-content: start;
  display: flex;
  background-color: #EDE9E3;
  border: 1px solid  #000000 ;
  border-radius: 3.5vw;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFCF96;
    border-radius: 3.5vw;
    z-index: -1;
    clip-path: circle(7% at 50% 85%);
    transition: clip-path 1s ease;
  }

  &:hover::before {
    clip-path: circle(100%);
    overflow: hidden;
  }
  @media  (max-width: 1200px) {
      width: 47.5%;
      height: 35vh;
      border-radius: 7vw;
      &:before {
      border-radius: 7vw;
    clip-path: circle(7% at 50% 90%);
  }
  @media (max-width: 767px) {
       border-radius: 9vw;
       &:before {
      border-radius: 9vw;
  }
  }
`;

const CustomStyle1 = styled(motion.div)`
  width: 22%;
  height: 52vh;
  align-items: start;
  justify-content: start;
  display: flex;
  background-color: #EDE9E3;
  border: 1px solid   #000000;
  border-radius: 3.5vw;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFCF96;
    border-radius: 3.5vw;
    z-index: -1;
    clip-path: circle(7% at 50% 85%);
    transition: clip-path 1s ease;
  }

  &:hover::before {
    clip-path: circle(100%);
    overflow: hidden;
  }

   @media  (max-width: 1200px) {
      width: 47.5%;
      height: 35vh;
      border-radius: 7vw;
      &:before {
      border-radius: 7vw;
    clip-path: circle(7% at 50% 90%);
  }
  @media (max-width: 767px) {
       border-radius: 9vw;
       &:before {
      border-radius: 9vw;
  }
  }
  
`;



const CustomStyle2 = styled(motion.div)`
  width: 22%;
  height: 52vh;
  align-items: start;
  justify-content: start;
  display: flex;
  background-color: #EDE9E3;
  border: 1px solid  #000000 ;
  border-radius: 3.5vw;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFCF96;
    border-radius: 3.5vw;
    z-index: -1;
    clip-path: circle(7% at 50% 85%);
    transition: clip-path 1s ease;
  }

  &:hover::before {
    clip-path: circle(100%);
    overflow: hidden;
  }
  
   @media  (max-width: 1200px) {
      width: 47.5%;
      height: 35vh;
      border-radius: 7vw;
      &:before {
        border-radius: 7vw;
        clip-path: circle(7% at 50% 90%);
  }
  @media (max-width: 767px) {
       border-radius: 9vw;
        &:before {
      border-radius: 9vw;
  }
  }
`;

const Image = styled.img`
  height: 2.4vh;
  width: auto;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  position: absolute;
  top: 82.5%;
  left: 46.8%;
  transition: transform 0.3s ease; 
  transform: ${props => (props.isHovered ? 'rotate(-45deg)' : 'none')}; 
   @media  (min-width: 768px) and (max-width: 1200px) {
   height: 1.7vh;
     top: 87.5%;
     left: 46.9%;
  }
  @media (max-width: 767px) {
  height: 1.7vh;
      top: 87.5%;
      left: 45.5%;
        
    }
`;


const CustomStyle3 = styled(motion.div)`
  width: 22%;
  height: 52vh;
  border-radius: 3.5vw;
  position: relative;
  overflow: hidden;
   @media  (max-width: 1200px) {
      width: 47.5%;
      height: 35vh;
      border-radius: 7vw;
  }
  @media (max-width: 767px) {
      border-radius: 9vw;
       &:before {
      border-radius: 9vw;
  }
  }
`;

const HoverImage = styled.img`
  height: 100%;
  width: 100%;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  border-radius: 40px;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isHovered ? 1 : 0)};
`;

const HoverNotImage = styled.img`
  height: 100%;
  width: 100%; 
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  border-radius: 40px;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isHovered ? 0 : 1)};
`;

const Why = styled(motion.div)`
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

const About = styled.div`
  margin-top: 3%;
  font-size: 1.5vw;
  color: #000;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  text-transform: uppercase;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;
  letter-spacing: 4px;
  font-weight: 800;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3vw;
    }
    @media (max-width: 767px) {
    font-size: 4vw;
    }
`;

const About2 = styled.div`
  font-size: 1.2vw;
  line-height: 1;
  margin-bottom: 0.4vw;
  margin-left: 3%;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  color: #000;
  text-transform: uppercase;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3vw;
    }
    @media (max-width: 767px) {
    font-size: 4.2vw;
    }
`;

const Para3 = styled.p`
  width: 100%;
  font-size: 0.8vw;
  font-family: "Inter", sans-serif;
  text-align: start;
  color: #000;
  margin-top: 3%;
  letter-spacing: 2px;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  font-weight: 400;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 2vw;
      margin-top: 3%;
    }
    @media (max-width: 767px) {
    font-size: 2vw;
    font-weight: 500;
    margin-left:3%;
    margin-top: 4%;
    }
`;


const Services = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const textRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2, triggerOnce: true });
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

  return (
    <div className="marquee-container" style={{ height: '100vh', overflowY: 'hidden', backgroundColor: '#EDE9E3', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', }} >
      <div style={{ marginLeft: '5%', display: 'flex', flexDirection: 'column', marginRight: '5%', marginTop: '-5%' }}>
        <About id="my-text" ref={textRef} className='hidden'>Services</About>
        <Why
          initial={{ opacity: 0, x: -30 }}
          ref={ref}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          style={{ marginTop: '-5px' }}
        >
          We are best in
        </Why>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3%', height: hiddenClass ? '71.5vh' : '52vh', overflow: 'hidden', flexDirection: hiddenClass ? 'column' : 'row' }}>
          {hiddenClass ? (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '35vh' }}>
                <CustomStyle onMouseEnter={() => setIsHovered(true)}
                  ref={ref1}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                  isHovered={isHovered}
                  onMouseLeave={() => setIsHovered(false)}>
                  <div style={{ display: 'flex', alignItems: 'start', marginTop: hiddenClassmobile ? '0%' : '10%', marginLeft: hiddenClassmobile ? '2%' : '5%', marginRight: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', height: '30vh', marginLeft: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '60px' }}>
                        {hiddenClassmobile ? (
                          <div></div>
                        ) : (
                          <Why style={{ padding: '0' }}>01</Why>
                        )}
                        <About2 >Web & App Development</About2>
                      </div>
                      <div style={{ height: hiddenClassmobile ? '1%' : '3%' }} />
                      <Para3 >Custom Design</Para3>
                      <Para3>E-commerce Solutions</Para3>
                      <Para3>CMS Integration </Para3>
                      <Para3>Web Development</Para3>
                      <Para3>iOS App Development</Para3>
                      <Para3>Android App Development</Para3>
                      <Para3>Cross-platform Development</Para3>
                    </div>
                  </div>
                  <Image src={img1} alt='' isHovered={isHovered} />
                </CustomStyle>
                <CustomStyle1 onMouseEnter={() => setIsHovered1(true)}
                  ref={ref2}
                  initial={{ opacity: 0, y: 70 }}
                  isHovered={isHovered1}
                  animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                  onMouseLeave={() => setIsHovered1(false)}>
                  <div style={{ display: 'flex', alignItems: 'start', marginTop: hiddenClassmobile ? '0%' : '10%', marginLeft: hiddenClassmobile ? '2%' : '5%', marginRight: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', height: '30vh', marginLeft: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '60px' }}>
                        {hiddenClassmobile ? (
                          <div></div>
                        ) : (
                          <Why style={{ padding: '0' }}>02</Why>
                        )}
                        <About2 >Branding</About2>
                      </div>
                      <div style={{ height: hiddenClassmobile ? '1%' : '3%' }} />
                      <Para3 >Brand Identity Development</Para3>
                      <Para3>Brand Strategy Consulting</Para3>
                      <Para3>Market Research and Analysis</Para3>
                      <Para3>Competitor Analysis</Para3>
                      <Para3>Positioning Strategy</Para3>
                      <Para3>Brochure / Business Card </Para3>
                    </div>
                  </div>
                  <Image src={img1} alt='' isHovered={isHovered1} />
                </CustomStyle1>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '35vh', marginTop: '1.5vh' }}>
                <CustomStyle2 onMouseEnter={() => setIsHovered2(true)}
                  ref={ref3}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                  isHovered={isHovered2}
                  onMouseLeave={() => setIsHovered2(false)}>
                  <div style={{ display: 'flex', alignItems: 'start', marginTop: hiddenClassmobile ? '0%' : '10%', marginLeft: hiddenClassmobile ? '2%' : '5%', marginRight: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', height: '30vh', marginLeft: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '60px' }}>
                        {hiddenClassmobile ? (
                          <div></div>
                        ) : (
                          <Why style={{ padding: '0' }}>03</Why>
                        )}
                        <About2 >Digital Marketing</About2>
                      </div>
                      <div style={{ height: hiddenClassmobile ? '1%' : '3%' }} />
                      <Para3 >Search Engine Optimization (SEO)</Para3>
                      <Para3>Pay-per-click Advertising</Para3>
                      <Para3>Social Media Marketing</Para3>
                      <Para3>Social Media Management</Para3>
                      <Para3>Ecommerce</Para3>
                      <Para3>Content Marketing</Para3>
                    </div>
                  </div>
                  <Image src={img1} alt='' isHovered={isHovered2} />
                </CustomStyle2>
                <CustomStyle3
                  ref={ref4}
                  initial={{ opacity: 0, y: 70 }}
                  animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                >
                  <HoverImage src={gif1} alt='' isHovered={isHovered} />
                  <HoverImage src={gif2} alt='' isHovered={isHovered1} />
                  <HoverImage src={gif3} alt='' isHovered={isHovered2} />
                  <HoverNotImage src={img} alt='' isHovered={isHovered || isHovered1 || isHovered2} />
                </CustomStyle3>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <CustomStyle onMouseEnter={() => setIsHovered(true)}
                ref={ref1}
                initial={{ opacity: 0, y: 70 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                isHovered={isHovered}
                onMouseLeave={() => setIsHovered(false)}>
                <div style={{ display: 'flex', alignItems: 'start', marginTop: '8%', marginLeft: '4%', marginRight: '4%' }}>
                  <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', marginLeft: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '10%' }}>
                      <Why style={{ padding: '0' }}>01</Why>
                      <About2 >Web & App Development</About2>
                    </div>
                    <div style={{ marginTop: '3%', display: 'flex', flexDirection: 'column' }}>
                      <Para3 >- Custom Design</Para3>
                      <Para3>- E-commerce Solutions</Para3>
                      <Para3>- CMS Integration </Para3>
                      <Para3>- Web Development</Para3>
                      <Para3>- iOS App Development</Para3>
                      <Para3>- Android App Development</Para3>
                      <Para3>- Cross-platform Development</Para3>
                    </div>

                  </div>
                </div>
                <Image src={img1} alt='' isHovered={isHovered} />
              </CustomStyle>
              <CustomStyle1 onMouseEnter={() => setIsHovered1(true)}
                ref={ref2}
                initial={{ opacity: 0, y: 70 }}
                isHovered={isHovered1}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                onMouseLeave={() => setIsHovered1(false)}>
                <div style={{ display: 'flex', alignItems: 'start', marginTop: '8%', marginLeft: '4%', marginRight: '4%' }}>
                  <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', marginLeft: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '10%' }}>
                      <Why style={{ padding: '0' }}>02</Why>
                      <About2 >Branding</About2>
                    </div>
                    <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column' }}>
                      <Para3 >- Brand Identity Development</Para3>
                      <Para3>- Brand Strategy Consulting</Para3>
                      <Para3>- Market Research and Analysis</Para3>
                      <Para3>- Competitor Analysis</Para3>
                      <Para3>- Positioning Strategy</Para3>
                      <Para3>- Brochure / Business Card </Para3>
                    </div>

                  </div>
                </div>
                <Image src={img1} alt='' isHovered={isHovered1} />
              </CustomStyle1>
              <CustomStyle2 onMouseEnter={() => setIsHovered2(true)}
                ref={ref3}
                initial={{ opacity: 0, y: 70 }}
                animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                isHovered={isHovered2}
                onMouseLeave={() => setIsHovered2(false)}>
                <div style={{ display: 'flex', alignItems: 'start', marginTop: '8%', marginLeft: '4%', marginRight: '4%' }}>
                  <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'start', marginLeft: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', height: '10%' }}>
                      <Why style={{ padding: '0' }}>03</Why>
                      <About2 >Digital Marketing</About2>
                    </div>
                    <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column' }}>
                      <Para3 >- Search Engine Optimization (SEO)</Para3>
                      <Para3>- Pay-per-click Advertising</Para3>
                      <Para3>- Social Media Marketing</Para3>
                      <Para3>- Social Media Management</Para3>
                      <Para3>- Ecommerce</Para3>
                      <Para3>- Content Marketing</Para3>
                    </div>
                  </div>
                </div>
                <Image src={img1} alt='' isHovered={isHovered2} />
              </CustomStyle2>
              <CustomStyle3
                ref={ref4}
                initial={{ opacity: 0, y: 70 }}
                animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
              >
                <HoverImage src={gif1} alt='' isHovered={isHovered} />
                <HoverImage src={gif2} alt='' isHovered={isHovered1} />
                <HoverImage src={gif3} alt='' isHovered={isHovered2} />
                <HoverNotImage src={img} alt='' isHovered={isHovered || isHovered1 || isHovered2} />
              </CustomStyle3>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Services;
