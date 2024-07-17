'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Word from './Word';
import './Scrolltext.css';
import img from '../components/assets/color.png';
import img1 from '../components/assets/Subtract.png';
import img2 from '../components/assets/Subtractora.png';
import img3 from '../components/assets/Subtractblu.png';

const paragraph = "At GenZix, we create flawless digital experiences with expertise in front-end and back-end development using React, Next.js, Flutter, HTML5, and WordPress. With over two years of experience, our team builds high-performance, user-focused websites and apps. We are passionate about innovation and staying updated with the latest tech trends. Our attention to detail ensures that we turn your ideas into immersive digital realities. Partner with GenZix for exceptional web and app design, development, and digital marketing.";


const Image = styled.img`
   width: 9%;
    @media (max-width: 767px) {
       width: 20vw;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
       width: 20%;
    }
`;


const Srolltext = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    let requestAnimationFrameId = null;

    let xForce = 0;
    let yForce = 0;

    const easing = 0.08;
    const speed = 0.02;

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e;

        xForce += movementX * speed;
        yForce += movementY * speed;

        if (requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);

        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
        gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
        gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce !== 0 || yForce !== 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    return (
        <div className='scrollhome' onMouseMove={manageMouseMove} id='aboutus'>
            <div ref={plane1} className='plane'>
                <Image src={img} alt='' width='9%' />
                {/* <img src={img2} alt='' width={100} />
                <img src={img3} alt='' width={50} /> */}
            </div>
            {/* <div ref={plane2} className='plane'>
                <img src={img} alt='' width={150} />
                <img src={img3} alt='' width={50} />
                <img src={img3} alt='' width={75} />
            </div> */}
            {/* <div ref={plane3} className='plane'>
                <img src={img3} alt='' width={100} />
                <img src={img1} alt='' width={200} />
            </div> */}
            <Word value={paragraph}  />
        </div>
    );
};

export default Srolltext;
