'use client';
import React, { useEffect, useRef, useState } from 'react';
import './parallelbox.css';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

// Import images statically
import img1 from '../components/assets/1.jpg';
import img2 from '../components/assets/2.jpg';
import img3 from '../components/assets/3.jpg';
import img4 from '../components/assets/4.jpg';
import img5 from '../components/assets/5.jpg';
import img6 from '../components/assets/6.jpg';
import img7 from '../components/assets/7.jpg';
import img8 from '../components/assets/8.jpg';
import img9 from '../components/assets/9.jpg';
import img10 from '../components/assets/10.jpg';
import img11 from '../components/assets/11.jpg';
import img12 from '../components/assets/12.jpg';

const images = [
  img1,
  img2,
  img7,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img11,
  img10,
  img12,
];

const Parallelbox = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hiddenClass, setHiddenClass] = useState('');

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
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
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);



  return (
    <div>
      {hiddenClass ? (
        <div ref={gallery} className='gallery'>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      ) : (
        <div ref={gallery} className='gallery'>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} style={{ display: 'none' }} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      )}
    </div>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div
      className='column'
      style={{ y, }}
    >
      {images.map((src, i) => (
        <div key={i} className='imageContainer' style={{ border: '1px solid #000' }}>
          <img
            src={src}
            alt='image'
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Parallelbox;
