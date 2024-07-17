import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from './anim';
import './Nav.css';
import RefsContext from '../../../Refcontex'; // Adjust the path as per your actual file structure

const Nav = ({ setIsActive }) => {
    const navigate = useNavigate();
    const { aboutRef, servicesRef, projectRef } = useContext(RefsContext);

    const handleMenuClick = () => {
        navigate('/contactus');
        setIsActive(false);
    };

    const handleMenuClickHome = () => {
        navigate('/');
        setIsActive(false);
    };

    const scrollToSection = (ref) => {
        setIsActive(false);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className='nav'>
            <div className='body'>
                {links.map((link, i) => {
                    const { title } = link;
                    let onClickHandler = null;

                    if (title === 'Home') {
                        onClickHandler = handleMenuClickHome;
                    } else if (title === 'Portfolio') {
                        onClickHandler = () => scrollToSection(projectRef);
                    } else if (title === 'Services') {
                        onClickHandler = () => scrollToSection(servicesRef);
                    } else if (title === 'About Us') {
                        onClickHandler = () => scrollToSection(aboutRef);
                    }

                    return (
                        <div key={`b_${i}`} className='linkContainer'>
                            <motion.div
                                custom={i}
                                variants={perspective}
                                initial='initial'
                                animate='enter'
                                exit='exit'
                            >
                                {title === 'Home' || title === 'Contact' ? (
                                    <NavLink
                                        to={title === 'Home' ? '/' : '/contactus'}
                                        activeClassName='active'
                                        onClick={title === 'Home' ? handleMenuClickHome : handleMenuClick}
                                    >
                                        {title}
                                    </NavLink>
                                ) : (
                                    <NavLink to='/' href={`#${title}`} onClick={onClickHandler}>
                                        {title}
                                    </NavLink>
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
            <motion.div className='footer'>
                {footerLinks.map((link, i) => (
                    <motion.a
                        variants={slideIn}
                        custom={i}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                        key={`f_${i}`}
                        href={link.href}
                    >
                        {link.title}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default Nav;
