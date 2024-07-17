'use client';
import React, {  useRef } from 'react';
import './Paragraph.css';
import { useScroll, motion, useTransform  } from 'framer-motion';

const Word = ({ value }) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.95', 'start 0.05']
    });

    const words = value.split(" ");

    return (
        <p className='paragrap' ref={element}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length)
                return <Words key={i} range={[start, end]} progress={scrollYProgress} >{word}</Words>
            })}
        </p>
    );
};

export default Word;


const Words = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='word' >
            <span className='shadow' style={{ opacity: opacity,}}>{children}</span>
            <motion.span style={{ opacity: opacity,  color: '#000'}}>{children}</motion.span>
        </span>
    )
}