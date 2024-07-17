import { motion, useAnimation, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import img from '../components/assets/horihigh.png';
import styled, { keyframes } from 'styled-components';
import gif1 from '../components/assets/webgif.gif';
import img1 from '../components/assets/play.png';
import img2 from '../components/assets/saimalla.jpg';
import img4 from '../components/assets/saimallaphone.jpg';
import img5 from '../components/assets/pranathiphone.jpg';
import img3 from '../components/assets/pranathi.jpg';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'react-intersection-observer';

const fillAnimation = keyframes`
  0% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0;
  }
`;

const CustomStyle2 = styled.div`
height: 60vh;
width: 24vw;
border-radius: 4vw;
position: relative;
border : 1px solid #000;
overflow: hidden;
z-index: 0;
 @media (max-width: 767px) {
        height: 27vh;
        border-radius: 10vw;
 }

    @media (min-width: 768px) and (max-width: 1200px) {
        height: 25vh;
        border-radius: 8vw;
    }
`;
const CustomStyle3 = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 0%;
  position: absolute;
  border-radius: 40px;
  background: rgba(20, 20, 20, 1);
  background-position: center; 
  clip-path: circle(7% at 16% 85%);
  transition: clip-path 1s ease;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-image: url(${img2}); 
    background-size: cover; 
    clip-path: circle(100%);
    overflow: hidden;
  }
`;

const CustomStyle4 = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 0%;
  position: absolute;
  border-radius: 40px;
  background: rgba(20, 20, 20, 1);
  background-position: center; 
  clip-path: circle(7% at 16% 85%);
  transition: clip-path 1s ease;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-image: url(${img2}); 
    background-size: cover; 
    clip-path: circle(100%);
    overflow: hidden;
  }
`;

const CustomStyle5 = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 0%;
  position: absolute;
  border-radius: 40px;
  background: rgba(20, 20, 20, 1);
  background-position: center; 
  clip-path: circle(7% at 16% 85%);
  transition: clip-path 1s ease;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-image: url(${img3}); 
    background-size: cover; 
    clip-path: circle(100%);
    overflow: hidden;
  }
`;



const Circle = styled.div`
  width: 5.5vh;
  height: 5.5vh;
   overflow: hidden;
  background-color: #B5B4B4;
  border-radius: 50%; 
`;

const Why = styled(motion.div)`
  font-size: 4.2vw;
  color: #000;
  font-weight: 600;
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

const Para4 = styled.div`
  margin-top: 5px;
  font-size: 1.1vw;
  line-height: 1.4;
  font-family: "Inter", sans-serif;
  text-align: justify;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 400;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 2.5vw;
      line-height: 1.4;
    }
    @media (max-width: 767px) {
    font-size: 3.2vw;
    line-height: 1.3;
    font-weight: 300;
    }
`;

// const Image = styled.img`
//   height: 5%;
//   width: auto;
//   position: absolute;
//   top: 82.5%;
//   left: 47%;
//   transition: transform 0.3s ease; 
//   transform: ${props => (props.isHovered ? 'rotate(-45deg)' : 'none')}; 
// `;

const Testimonials = () => {
    const textRef = useRef(null);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
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

    const handleClick = () => {
        window.open('https://andhraruchulu.in/', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="lastContainer" style={{ backgroundColor: "#EDE9E3", width: '100%', height: hiddenClass ? (hiddenClassmobile ? '110vh' : '107vh') : '100vh' }}>
            <div className='lastContainercontainer' style={{ backgroundColor: "#EDE9E3", width: '90%', marginTop: hiddenClass ? '7vh' : '5vh' }}>
                <About id="my-text" ref={textRef} className='hidden' style={{ marginTop: '-3vh' }}>Testimonials</About>
                <Why
                    initial={{ opacity: 0, x: -30 }}
                    ref={ref}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    style={{ marginTop: '-5px' }}>
                    What our client says
                </Why>
                {hiddenClass ? (
                    <div style={{ width: '100%' }}>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', display: 'flex', flexDirection: 'column', width: '100%', marginTop: '3vh' }}>
                            <div style={{ width: '90%', marginTop: hiddenClassmobile ? '5%' : '4%', marginLeft: '5%' }}>
                                <Para4 style={{ color: '#000000' }}>Madhuri Yallapu from Genzix developed a responsive food ordering website using the MERN stack. Her technical skills, problem-solving ability, and clear communication were excellent. Highly recommended!</Para4>
                            </div>
                            <div style={{ display: 'flex', marginLeft: '5%', marginTop: hiddenClassmobile ? '6%' : '6%', height: '6vh', alignItems: 'center', position: 'absolute', left: '0%', bottom: '3.5vw', width: '100%' }}>
                                <Circle>
                                    <img src={img4} height='100%' width='100%' />
                                </Circle>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500', marginTop: '-1%', fontSize: hiddenClassmobile ? '16px' : '28px' }} >Sai Malla</text>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '1.5%', fontWeight: '500', fontSize: hiddenClassmobile ? '16px' : '28px' }}>Andhra Ruchulu</text>
                                </div>
                            </div>
                        </CustomStyle2>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', display: 'flex', flexDirection: 'column', width: '100%', marginTop: '3vh' }}>
                            <div style={{ width: '90%', marginTop: hiddenClassmobile ? '5%' : '4%', marginLeft: '5%' }}>
                                <Para4 style={{ color: '#000000' }}>Genzix Agency excels in app development, blending trendy designs with complex ML algorithms. They're efficient, reliable, and always on time. Highly recommend!</Para4>
                            </div>
                            <div style={{ display: 'flex', marginLeft: '5%', marginTop: hiddenClassmobile ? '6%' : '6%', height: '6vh', alignItems: 'center', position: 'absolute', left: '0%', bottom: '3.5vw', width: '100%' }}>
                                <Circle />
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500', marginTop: '-1%', fontSize: hiddenClassmobile ? '16px' : '28px' }} >Jayanth Bellam</text>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '1.5%', fontWeight: '500', fontSize: hiddenClassmobile ? '16px' : '28px' }}>Fitsage</text>
                                </div>
                            </div>
                        </CustomStyle2>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', display: 'flex', flexDirection: 'column', width: '100%', marginTop: '3vh' }}>
                            <div style={{ width: '90%', marginTop: hiddenClassmobile ? '5%' : '4%', marginLeft: '5%' }}>
                                <Para4 style={{ color: '#000000' }}>Genzix Agency developed my app, delivering seamless design and powerful functionality. Their expertise and commitment to quality shine through, making them a top choice for app development. </Para4>
                            </div>
                            <div style={{ display: 'flex', marginLeft: '5%', marginTop: hiddenClassmobile ? '6%' : '6%', height: '6vh', alignItems: 'center', position: 'absolute', left: '0%', bottom: '3.5vw', width: '100%' }}>
                                <Circle>
                                    <img src={img5} height='100%' width='100%' />
                                </Circle>
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500', marginTop: '-1%', fontSize: hiddenClassmobile ? '16px' : '28px' }} >Pranathi Kupili</text>
                                    <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '1.5%', fontWeight: '500', fontSize: hiddenClassmobile ? '16px' : '28px' }}>Nerds</text>
                                </div>
                            </div>
                        </CustomStyle2>
                    </div>) : (
                    <div style={{ display: 'flex', marginTop: '7vh', justifyContent: 'space-between' }}>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', display: 'flex', flexDirection: 'column' }} >
                            <div className='image'>
                                <img src={img} alt='' height='100%' style={{ opacity: 0.2 }} ></img>
                            </div>
                            <div style={{ width: '80%', marginTop: '4vw', marginLeft: '2.2vw' }}>
                                <Para4 style={{ color: '#000000' }}>Madhuri Yallapu from Genzix developed a responsive food ordering website using the MERN stack. Her technical skills, problem-solving ability, and clear communication were excellent. Highly recommended!</Para4>
                            </div>
                            <CustomStyle3 >
                                <img src={img1} alt='' height='13%' width='auto' style={{ position: 'absolute', bottom: '8.5%', left: '8.8%' }} />
                            </CustomStyle3>
                            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '78%', left: '27%', zIndex: '2' }}>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500' }} >Sai Malla</text>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '2px', fontWeight: '500', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClick}>Andhra Ruchulu</text>
                            </div>
                        </CustomStyle2>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', marginLeft: '5vw', display: 'flex', flexDirection: 'column' }} >
                            <div className='image'>
                                <img src={img} alt='' height='100%' style={{ opacity: 0.2 }} ></img>
                            </div>
                            <div style={{ width: '80%', marginTop: '4vw', marginLeft: '2.2vw' }}>
                                <Para4 style={{ color: '#000000' }}>Genzix Agency excels in app development, blending trendy designs with complex ML algorithms. They're efficient, reliable, and always on time. Highly recommend!</Para4>
                            </div>
                            <CustomStyle4 >
                                <img src={img1} alt='' height='13%' width='auto' style={{ position: 'absolute', bottom: '8.5%', left: '8.8%' }} />
                            </CustomStyle4>
                            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '78%', left: '27%', zIndex: '2' }}>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500' }} >Jayanth Bellam</text>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '2px', fontWeight: '500' }}>Fitsage</text>
                            </div>
                        </CustomStyle2>
                        <CustomStyle2 style={{ backgroundColor: '#EDE9E3', marginLeft: '5vw', display: 'flex', flexDirection: 'column' }} >
                            <div className='image'>
                                <img src={img} alt='' height='100%' style={{ opacity: 0.2 }} ></img>
                            </div>
                            <div style={{ width: '80%', marginTop: '4vw', marginLeft: '2.2vw' }}>
                                <Para4 style={{ color: '#000000' }}>Genzix Agency developed my app, delivering seamless design and powerful functionality. Their expertise and commitment to quality shine through, making them a top choice for app development.</Para4>
                            </div>
                            <CustomStyle5 >
                                <img src={img1} alt='' height='13%' width='auto' style={{ position: 'absolute', bottom: '8.5%', left: '8.8%' }} />
                            </CustomStyle5>
                            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '78%', left: '27%', zIndex: '2' }}>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', fontWeight: '500' }} >Pranathi Kupili</text>
                                <text className='about' style={{ color: '#000000', letterSpacing: '2px', marginTop: '2px', fontWeight: '500' }}>Nerds </text>
                            </div>
                        </CustomStyle2>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Testimonials
