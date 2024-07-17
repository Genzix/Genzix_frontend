import React, { useRef } from 'react';
import './parallax.css';
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref , offset:["start start", "end start"]});
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBgp = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return (
        <div className="parallax" 
        ref={ref}
        style={{
            background: "#000",
            height: "100vh"
        }}>
            <motion.h1 style={{y:yBg,marginTop:'-5%' }}>{"What We Do?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yBgp}} className="planets"></motion.div>
            <motion.div style={{x:yBgp}} className="stars"></motion.div>
        </div>
    );
}

export default Parallax;
