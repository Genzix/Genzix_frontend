'use client';
import img1 from '../components/assets/app.png';
import React, { useState } from 'react';
import styled from 'styled-components';
import './EvervaultCard.css'
import useMousePosition from './useMousePosition';
import { motion, useScroll, useTransform } from "framer-motion";


const Svg = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 0;

  return (
    <div className="main">
      <div className="body">
        <img src={img1} height='25px' alt='' />
        <p>Welcome to my React component!</p>
      </div>
      <motion.div className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{
          type: 'tween', ease: 'backOut'
        }}
      >
        <img src={img1} height='25px' alt='' />
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>This is content inside the mask.</p>
      </motion.div>
    </div>
  );
};

export default Svg;
