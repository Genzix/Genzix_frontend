import React from 'react'
import './button.css'
import { motion } from 'framer-motion'

const Button = ({ isActive, setIsActive }) => {
    return (
        <div onClick={() => { setIsActive(!isActive) }} className='button'>
            <motion.div className='slider' animate={{ top: isActive ? '-100%' : '0' }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
                <div className='el' >
                    <PerspectiveText label="Menu" />
                </div>
                <div className='el'>
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>

        </div>
    )
}

export default Button


function PerspectiveText({ label }) {
    return (
        <div className='perspectiveText'>
            <div>{label}</div>
            <div>{label}</div>
        </div>
    )
}