'use client';
import useMousePosition from './useMousePosition';
import { motion, useAnimation, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import './abouthome.css';
import Divider from '@mui/material/Divider';
import styled, { keyframes } from 'styled-components';
import Projectsimage from './projectsimage';
import Modalimg from './modal';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import { useInView } from 'react-intersection-observer';


const CustomStyle = styled.div`
  width: 20.83%;
  height: 40vh;

  align-items: start;
  justify-content: start;
  display: flex;

`;

const Why = styled(motion.div)`
  font-size: 4.2vw;
  color: #000;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
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

const project = [
    {
        title: 'Andhra Ruchulu',
        src: 'app.png',
        color: '#000000'
    },
    {
        title: 'Andhra Ruchulu',
        src: 'app.png',
        color: '#000000'
    }, {
        title: 'Andhra Ruchulu',
        src: 'app.png',
        color: '#000000'
    }, {
        title: 'Andhra Ruchulu',
        src: 'app.png',
        color: '#000000'
    },
]



const Project = () => {
    const textRef = useRef(null);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

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


    const [modal, setModal] = useState({ active: false, index: 0 })

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


    return (
        <div style={{ height:hiddenClass ? '12vh':'22vh', overflowY: 'hidden', backgroundColor: '#EDE9E3', display: 'flex', flexDirection: 'column', }} id="project">
            <div style={{ marginLeft: '5%', display: 'flex', flexDirection: 'column', marginRight: '5%' }}>
                <About id="my-text" ref={textRef} className='hidden'>Projects</About>
                <Why
                    initial={{ opacity: 0, x: -30 }}
                    ref={ref}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    style={{ marginTop: '-5px' }} >
                    Here some of my best
                </Why>
            </div>

        </div>
    );
};

export default Project;
