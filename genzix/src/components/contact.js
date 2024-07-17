import styled, { keyframes } from 'styled-components';
import { motion, useAnimation, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'react-intersection-observer';

// Keyframes for marquee animation
const marqueeAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-180%);
  }
`;



// Styled components
const Button = styled(motion.a)`
  display: inline-block;
  position: relative;
  color: #ffffff;
  background-color: #EDE9E3;
  height: 20vh;
  width: 25vw;
  border-radius: 10vw;
  border: 1px solid #000000 ;
  font-size: 1.8vw;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  transition: all 0.2s ease-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;
 

  &:hover {
    color: #000000;
    background-color: ${props => props.bgColor || '#ffffff'};
    border: 1px solid ${props => props.bgColor || '#000000'} ;
    border-color: #000000;
  }

  span{
    color: #000;
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }
  
  &:hover span {
    color: #000000;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  

  span::after {
    content: attr(data-text);
    position: absolute;
    left: 200%;
    width: 100%;
    text-align: center;
  }

  &:hover div {
    animation: ${marqueeAnim} 1.5s linear infinite;
    animation-play-state: running;
  }

   @media (max-width: 767px) {
        height: 14vh;
        border-radius: 15vw;
        width: 100%;
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        height: 14vh;
         width: 100%;
    }
`;

const ButtonInner = styled.div`
  position: relative;
`;

const CustomStyle = styled.div`
  height: 65vh;
  width: 100%;
  background: #EDE9E3;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
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

const Contact = () => {
  const textRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
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
    <CustomStyle>
      <div style={{ height: '100%', width: '90vw', marginLeft: '5vw', marginRight: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
        <About id="my-text" ref={textRef} className='hidden' style={{ marginTop: '5%' }}>Contact Us</About>
        <Why
          initial={{ opacity: 0, x: -30 }}
          ref={ref}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          style={{ marginTop: '-5px' }}>
          Let's work together
        </Why>
        {hiddenClass ? (<div>
          <Button bgColor="#FFF7D4"
            style={{ color: "#000", fontSize: hiddenClassmobile ? '18px': '30px' , marginTop:"4vh"}}
            initial={{ opacity: 0, y: 70 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            Contact Us
          </Button>
          <Button bgColor="#CDFCF6"
            style={{ color: "#000", fontSize: hiddenClassmobile ? '18px': '30px', marginTop:"2vh" }}
            initial={{ opacity: 0, y: 70 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            Instagram
          </Button>
          <Button bgColor="#FFCF96"
            initial={{ opacity: 0, y: 70 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            style={{ color: "#000", fontSize: hiddenClassmobile ? '18px': '30px', marginTop:"2vh" }}
          >
            LinkedIn
          </Button>
        </div>) : (
          <div style={{ marginTop: '3%', display: 'flex', justifyContent: 'space-between', height: '20vh', overflow: 'hidden' }}>
            <Button href="#" bgColor="#FFF7D4"
              ref={ref1}
              initial={{ opacity: 0, y: 70 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            >
              <ButtonInner>
                <span data-text="Contact Us">Contact Us</span>
              </ButtonInner>
            </Button>
            <Button href="#" bgColor="#CDFCF6"
              ref={ref2}
              initial={{ opacity: 0, y: 70 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            >
              <ButtonInner>
                <span data-text="Instagram" >Instagram</span>
              </ButtonInner>
            </Button>
            <Button href="#" bgColor="#FFCF96"
              ref={ref3}
              initial={{ opacity: 0, y: 70 }}
              animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
            >
              <ButtonInner>
                <span data-text="LinkedIn" >LinkedIn</span>
              </ButtonInner>
            </Button>
          </div>
        )
        }
      </div>
    </CustomStyle >
  );
}

export default Contact;
