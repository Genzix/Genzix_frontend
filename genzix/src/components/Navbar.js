import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from '../components/assets/logo.png';
import img2 from '../components/assets/logoblack.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Header/button/button';
import { AnimatePresence, motion } from 'framer-motion';
import './Navbar.css'
import Nav from './Header/nav/Nav';
import RefsContext from '../Refcontex';



const marqueeAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-180%);
  }
`;

const zoomIn = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const StyledNavbar = styled.div`
    position: fixed;
    top: ${({ visible }) => (visible ? '0' : '-14vh')};
    width: 100%;
    height: 14vh;
    transition: top 0.3s;
    z-index: 1000;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        height: 10vh;
        background-color: #EDE9E3;
        
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 10vh;
        background-color: #EDE9E3;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
        display: none;
        
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`;


const InnerContainer1 = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto; /* Shorthand for margin-left and margin-right auto */
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto; /* Shorthand for margin-left and margin-right auto */
    }
`;


const StyledButton = styled.div`
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    font-size:14px;
    padding: 0 2vw;
    border-radius: 4vh;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    animation: ${({ visible }) => (visible ? zoomIn : 'none')} 0.5s ease forwards;

    &:hover {
    @media (max-width: 480px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
       display: none;
    }

  }
`;

const StyledButton1 = styled.div`
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    font-size:14px;
    border-radius: 4vh;
    background-color: ${({ backgroundColor }) => backgroundColor}
    border: 1px solid ${props => (props.isHovered ? '#FFCF96' : '#000000')};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({ visible }) => (visible ? zoomIn : 'none')} 0.5s ease forwards;
    overflow: hidden;
    cursor: pointer;
     @media (max-width: 768px) {
        height: 4vh;
        
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 4vh;
    }
`;

const StyledButtonmenu = styled.div`
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    font-size:14px;
    border-radius: 4vh;
    background-color: ${({ backgroundColor }) => backgroundColor}
    border: 1px solid ${props => (props.isHovered ? '#FFCF96' : '#000000')};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${({ visible }) => (visible ? zoomIn : 'none')} 0.5s ease forwards;
    overflow: hidden;
    cursor: pointer;
     @media (max-width: 480px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
       display: none;
    }
`;


const StyledButton2 = styled.div`
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    font-size:14px;
    padding: 0 2vw;
    border-radius: 4vh;
    border: 1px solid  ${props => (props.isHovered ? '#FFCF96' : '#000000')} ;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => (props.isHovered ? 'translateY(-8vh)' : 'translateY(0)')};
    transition:  transform 0.2s linear;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-weight: 200;
    text-transform: uppercase;
`;

const StyledButton3 = styled.div`
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    font-size:14px;
    padding: 0 2vw;
    border-radius: 4vh;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => (props.isHovered ? 'translateY(-8vh)' : 'translateY(0)')};
    transition:  transform 0.2s linear, background-color 10s ease;;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-weight: 200;
    text-transform: uppercase;
    @media (max-width: 480px) {
        height: 4vh;
        
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        height: 4vh;
    }
`;

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-90%);
  }
`;

const ScrollingText = styled.div`
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  display: inline-block;
  animation: ${scrollText} 8s linear infinite;
`;


const Containersmall = styled.div`
  height: 7vh;
  @media (max-width: 480px) {
        display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
       display: none;
  }
`;

const TextItem = styled.text`
    font-size: 1vw;
    font-family: "Inter", sans-serif;
    -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
    margin-right: ${({ marginRight }) => marginRight || '0'};
    cursor: pointer;
    transform: ${props => (props.isHovered ? 'translateY(-5vh)' : 'translateY(0)')};
    transition:  transform 0.3s linear;
    @media (max-width: 480px) {
        font-size: 16px;
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {
       font-size: 18px;
    }
`;

const TextItem1 = styled.text`
    font-size: 1vw;
    font-family: "Inter", sans-serif;
    -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
    margin-right: ${({ marginRight }) => marginRight || '0'};
    cursor: pointer;
    transform: ${props => (props.isHovered ? 'translateY(-5vh)' : 'translateY(0)')};
    opacity: ${props => (props.isHovered ? '1' : '0')};
    transition:  transform 0.3s linear;
    
`;

const StyledButtonmobile = styled.div`
    align-items: center;
    justify-content: center;
    height: 8vh;
    font-size:14px;
    padding: 0 15px;
    border-radius: 4vh;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => (props.isHovered ? 'translateY(-8vh)' : 'translateY(0)')};
    transition:  transform 0.2s linear;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    font-weight: 200;
    text-transform: uppercase;
`;


const variants = {
    open: {
        width: '100%',
        height: '100vh',
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: '0',
        height: '0',
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }

}

const Navbar = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const navigate = useNavigate();
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [hiddenClass, setHiddenClass] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handlePortfolioClick = () => {
        navigate('/');
        setTimeout(() => {
            const scrollToProject = () => {
                const projectElement = document.getElementById('project');
                if (projectElement) {
                    projectElement.scrollIntoView({ behavior: 'smooth' });
                    window.removeEventListener('scroll', scrollToProject);
                }
            };
            window.addEventListener('scroll', scrollToProject);
        }, 100);
    };


    const handlePortfolioClick1 = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handlePortfolioClick2 = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };



    // useEffect(() => {
    //     if (isActive) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }

    //     // Clean up the effect
    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isActive]);

    // const handleScroll = () => {
    //     if (!isActive) {
    //         const currentScrollPos = window.pageYOffset;
    //         setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    //         setPrevScrollPos(currentScrollPos);
    //     }
    // };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, isActive]);

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

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handlemenuClick = () => {
        navigate('/contactus');
    };

    const handlemenuClick1 = () => {
        navigate('/');
    };


    const { aboutRef, servicesRef, projectRef } = useContext(RefsContext);

    const scrollToProject = () => {
        projectRef.current.scrollIntoView({ behavior: 'auto' }); // Adjust behavior as needed
    };

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'auto' }); // Adjust behavior as needed
    };

    const scrollToService = () => {
        servicesRef.current.scrollIntoView({ behavior: 'auto' }); // Adjust behavior as needed
    };


    return (
        <StyledNavbar visible={visible}>
            <InnerContainer>
                <StyledButton1 backgroundColor="#EDE9E3" color="#000" visible={visible} onClick={handlemenuClick1} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} isHovered={isHovered4} style={{ position: 'relative' }} >
                    <StyledButton2 backgroundColor="#EDE9E3" color="#000" isHovered={isHovered4}>
                        <img src={img2} height='50%' style={{
                            marginRight: hiddenClass ? '-20px' : '10px',
                            visibility: hiddenClass ? 'hidden' : 'visible',
                            WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none',
                        }}
                            alt='' />
                        <TextItem style={{ fontWeight: "400" }} >Genzix</TextItem>
                    </StyledButton2>
                    <StyledButton2 backgroundColor="#FFCF96" color="#000" isHovered={isHovered4} style={{ position: 'absolute', left: '0', marginTop: '16vh', zIndex: '1' }}>
                        <img src={img2} height='50%' style={{
                            marginRight: hiddenClass ? '-30px' : '10px', visibility: hiddenClass ? 'hidden' : 'visible', WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none',
                        }} alt='' />
                        <TextItem style={{ fontWeight: "400" }}>Genzix</TextItem>
                    </StyledButton2>
                </StyledButton1>
                <StyledButton backgroundColor="#EDE9E3" color="#000" visible={visible} style={{ overflow: 'hidden' }} >
                    <Containersmall style={{ width: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center', marginRight: '2vw' }} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} isHovered={isHovered1} onClick={scrollToProject}>
                        <TextItem isHovered={isHovered1}>Portfolio  </TextItem>
                        <TextItem1 style={{ position: 'absolute', marginTop: '10vh', color: '#F88B0A' }} isHovered={isHovered1}>Portfolio</TextItem1>
                    </Containersmall>
                    <Containersmall style={{ width: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'hidden', marginRight: '2vw' }} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} isHovered={isHovered2} onClick={scrollToService}>
                        <TextItem isHovered={isHovered2}>Services</TextItem>
                        <TextItem1 style={{ position: 'absolute', marginTop: '10vh', color: '#F88B0A' }} isHovered={isHovered2}>Services</TextItem1>
                    </Containersmall>
                    <Containersmall style={{ width: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} isHovered={isHovered3} onClick={scrollToAbout}>
                        <TextItem isHovered={isHovered3} >About Us</TextItem>
                        <TextItem1 style={{ position: 'absolute', marginTop: '10vh', color: '#F88B0A' }} isHovered={isHovered3}>About Us </TextItem1>
                    </Containersmall>

                </StyledButton>
                <StyledButtonmenu backgroundColor="#EDE9E3" color="#000" visible={visible} onClick={handlemenuClick} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} isHovered={isHovered5} style={{ position: 'relative' }} >
                    <StyledButton2 backgroundColor="#EDE9E3" color="#000" isHovered={isHovered5}>
                        <text style={{
                            fontSize: '1vw', WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none',
                        }}>Let's Talk!</text>
                    </StyledButton2>
                    <StyledButton3 backgroundColor="#FFCF96" color="#000" isHovered={isHovered5} style={{ position: 'absolute', left: '0', marginTop: '16vh', zIndex: '1' }}>
                        <text style={{
                            fontWeight: "400", fontSize: '1vw', WebkitUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none',
                        }}>Let's Talk! </text>
                    </StyledButton3>
                </StyledButtonmenu>

                {/* {hiddenClass ? (
                    <>
                        <StyledButton1 backgroundColor="#EDE9E3" color="#000" visible={visible} onClick={handlemenuClick1} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} isHovered={isHovered4} style={{ position: 'absolute' }} >
                            <StyledButtonmobile backgroundColor="#EDE9E3" color="#000" isHovered={isHovered4}>
                                <TextItem style={{ fontWeight: "400" }} >Genzix</TextItem>
                            </StyledButtonmobile>
                            <StyledButtonmobile backgroundColor="#FFCF96" color="#000" isHovered={isHovered4} style={{ position: 'absolute', left: '0', marginTop: '16vh', zIndex: '1' }}>
                                <TextItem style={{ fontWeight: "400" }}>Genzix</TextItem>
                            </StyledButtonmobile>
                        </StyledButton1>
                        <motion.div className='menu'
                            variants={variants}
                            animate={isActive ? 'open' : 'closed'}
                            initial='closed'
                        >
                            <AnimatePresence>
                                {isActive && <Nav setIsActive={setIsActive} />}
                            </AnimatePresence>
                        </motion.div>
                        <Button isActive={isActive} setIsActive={setIsActive} />
                    </>
                ) : (
                    <></>
                )} */}

                {/* <div className='button'>
                    <div className='el'>
                        <p>Menu</p>
                    </div>
                    <div>
                        <p>Close</p>
                    </div>
                </div> */}
            </InnerContainer>
            <InnerContainer1>
                <div style={{ height: '3.5vh', cursor: 'pointer' }} onClick={handlemenuClick1}>
                    <img src={img2} height='100%' alt='' />
                </div>
                <motion.div className='menu'
                    variants={variants}
                    animate={isActive ? 'open' : 'closed'}
                    initial='closed'
                >
                    <AnimatePresence>
                        {isActive && <Nav setIsActive={setIsActive} />}
                    </AnimatePresence>
                </motion.div>
                <Button isActive={isActive} setIsActive={setIsActive} />
            </InnerContainer1>
        </StyledNavbar>
    );
};

export default Navbar;
