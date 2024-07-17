import React, { useEffect, useRef } from 'react';
import './modal.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

const Modalimg = ({ modal, project }) => {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });

        const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

        const handleMouseMove = (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                className="modalContainer"
            >
                <div style={{ top: `${index * -100}%` }} className="modalSlider">
                    {project.map((proj, idx) => (
                        <div className="modal" key={`modal_${idx}`}>
                            <img src={proj.src} width="100%" height="100%" alt="" />
                        </div>
                    ))}
                </div>
            </motion.div>
            {/* <motion.div
                ref={cursor}
                className="cursor"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
            >
                {project.map((proj, idx) => (
                    <div key={`cursor_${idx}`}>
                        <img src={proj.src} width="100%" height="100%" alt="" />
                    </div>
                ))}
            </motion.div> */}
        </>
    );
};

export default Modalimg;
