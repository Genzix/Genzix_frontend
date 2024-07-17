import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { css } from 'styled-components';
import { createNoise3D } from "simplex-noise";
import "./Home.css";
import img1 from '../components/assets/logoblack.png';
import img10 from '../components/assets/sai.jpg';
import img8 from '../components/assets/plus.png';
import profile from '../components/assets/madhu.jpg';
import arrow from '../components/assets/arrowhome.png';
import gif from '../components/assets/web.gif';
import img2 from '../components/assets/marketing (2).png';
import gif2 from '../components/assets/status.gif';
import gif3 from '../components/assets/gloab.gif';
import img4 from '../components/assets/india.png';
import Parallax from "../components/parallax";
import Abouthome from "../components/abouthome";
import Svg from "../components/EvervaultCard";
import Services from "../components/services";
import Project from "../components/project";
import Projectgalle from "../components/projectgalle";
import Parallelbox from "../components/parallelbox";
import Scene from "../components/horizontalscroll";
import Gallery from "../components/gallery";
import Example from "../components/gallery";
import Horizontalscrollgasp from "../components/horizontalscrollgasp";
import ScrollSection from "../components/horizontalscrollgasp";
import Testimonials from "../components/Testimonials";
import Contact from "../components/contact";
import Fotter from "../components/fotter";
import Srolltext from "../components/Srolltext";
import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion"
import RefsContext from "../Refcontex";



const WavyBackgroundContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  background-color: #000;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SmallContainer = styled.div`
  position: absolute;
  width: 90px; 
  height: 90px; 
  background-color: rgba(20, 20, 20, 0.85); 
  border-radius: 200px;
  top: 30%; 
  left: 35%; 
  transform: translate(-50%, -50%); 
`;


const Container = styled.div`
  position: absolute;
  top: 70%;
  width: 100%;
  height: 15vh;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  perspective: 1000px;

  @media (max-width: 1200px) {
    top: 65%;
    height: 17.5vh;
    align-items: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


const CardWrapper = styled(motion.div)`
  width: 18.75%;
  height: 14vh;
  /* Background Gradient */
  background: transparent;
  display: flex;
  flex-direction: column;
//   border: 1px solid  #000000 ;
  font-family: "Poppins", sans-serif;
  letter-spacing: 3px;
  font-weight: 100;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  border-radius: 7vh;
  background:  ${({ backgroundColor }) => backgroundColor};
  ${(props) =>
        props.isHovered &&
        css`
      transform: rotateY(5deg) rotateX(5deg);
    `}
 @media (max-width: 1200px) {
    height: 8vh;
  }
`;

const CardWrapper1 = styled(motion.div)`
  height: 14vh;
  background: #FFCF96;
  display: flex;
  flex-direction: column;
  border: 1px solid  #000000 ;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  border-radius: 7vh;
 @media (max-width: 1200px) {
    height: 8vh;
  }
`;


const CustomStyle = styled.div`
  width: 20.83%;
  height: 30vh;
  background-color: rgba(20, 20, 20, 0.85);
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  &:hover {
    background: linear-gradient(to bottom, ${({ backgroundColor }) => backgroundColor}, #000000);
  }
`;


const Text = styled.div`
    font-size: 1.2vw;
    line-height: 1.1;
    font-family: "Darker Grotesque", sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
  margin-top: 10px;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  transition: transform 0.5s;
@media (min-width: 768px) and (max-width: 1200px) {
        font-size: 2.5vw;
        font-weight: 600;
    }
    @media (max-width: 767px) {
        font-size: 2.5vw;
        font-weight: 600;
    }
`;

const ScrollableContainer = styled.div`
  position: relative;
  overflow-y: auto;
  height: 100vh;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #888 transparent; /* Firefox */
  &::-webkit-scrollbar {
    width: 8px; /* WebKit */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* WebKit */
    border-radius: 4px;
  }
`;

const StyledH1 = styled.div`
  color: #000;
  margin-top: -80px;
  
`;


const Stylednew = styled.span`
    display: inline;
    -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
    @media (min-width: 768px) and (max-width: 1200px) {
        display: inline;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

const Styledmobile = styled.div`
    width: 8vw;
    height: 3vw;
  overflow: hidden;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  display: flex;
  @media (min-width: 768px) and (max-width: 1200px) {
        width: 22vw;
        height: 8vw;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

const Styledmobile2 = styled(motion.div)`
 display: none;
   -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
    @media (max-width: 767px) {
       width: 25vw;
  height: 9vw;
  overflow: hidden;
  display: flex;
    }
`;

const Stylednew1 = styled.span`
    display: inline;
    @media (min-width: 768px) and (max-width: 1200px) {
       display: none;
    }
    @media (max-width: 767px) {
        display: none;
    }
`;


const StyledImage = styled.img`
  height: 3.5vh;
  margin-bottom: 1.5vh;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  @media (max-width: 1200px) {
     display: none;
  }
`;

const WavyBackground = ({
    children,
    colors = ["#FE8E08", "#FE8E08", "#FE8E08", "#FD8C5E", "#FEB8B6"],
    waveWidth = 0.6,
    backgroundFill = "#EDE9E3",
    blur = 1,
    speed = "fast",
    waveOpacity = 0.7,
}) => {
    const noise = createNoise3D();
    let w, h, nt, i, x, ctx, canvas;
    const canvasRef = useRef(null);

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.003;
            case "fast":
                return 0.003;
            default:
                return 0.003;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const drawWave = (n) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = colors[i % colors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.45);
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId;
    const render = () => {
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(2);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <WavyBackgroundContainer>
            <Canvas
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            />
            <Content>{children}
            </Content>
        </WavyBackgroundContainer>
    );
};

const HoverImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100px;
   position: absolute;
  top: 0;
  left: 0;
`;

const HoverImage1 = styled.img`
  height: 45%;
  width: auto;
`;

const HoverImage2 = styled.img`
  height: 30%;
  width: auto;
`;

const StyledDiv = styled(motion.div)`
  display: flex;
  height: 3.5vw;
  align-items: end;
  width: auto;
  margin-bottom: 0.9vw;
  margin-top: -4vw;
  @media (min-width: 768px) and (max-width: 1200px) {
       margin-top: -20vw;
       margin-bottom: 8vw;
       height: 10vw;
    }
    @media (max-width: 767px) {
       margin-top: -30vw;
       margin-bottom: 8vw;
    }
`;

const StyledDiv1 = styled(motion.div)`
  display: flex;
  height: 3.5vw;
  align-items: end;
  width: auto;
    @media (max-width: 767px) {
       margin-bottom: 5vw;
    }
`;

const Why = styled.div`
  font-size: 4.2vw;
  color: #000;
  font-weight: 600;
  letter-spacing: 1px;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;

   @media (min-width: 768px) and (max-width: 1200px) {
      font-size:  clamp(4vw, 5vw, 8vw);
    }
    @media (max-width: 767px) {
    font-size:  clamp(4vw, 5vw, 8vw);
    }
`;

const Teamdiv = styled.div`
  width: 3vw;
  height: 3vw;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; /
  user-select: none;
  border-radius: 3vw;
   @media (min-width: 768px) and (max-width: 1200px) {
        width: 8vw;
        height: 8vw;
        border-radius: 4vw;
    }
`;

const Teamdiv1 = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 3vw;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  margin-left: -0.5vw;
   @media (min-width: 768px) and (max-width: 1200px) {
        width: 8vw;
        height: 8vw;
        border-radius: 4vw;
        margin-left: -2vw;
    }
`;

const Webbox = styled.div`
  width: 17vw;
  height: 7vh;
  border-radius: 3vw;
  display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
     @media (max-width: 1200px) {
       display : none;
    }
`;

const Home = () => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef2 = useRef(null);
    const [isHovered2, setIsHovered2] = useState(false);
    const cardRef3 = useRef(null);
    const [isHovered3, setIsHovered3] = useState(false);
    const cardRef4 = useRef(null);
    const [isHovered4, setIsHovered4] = useState(false);
    const [hiddenClass, setHiddenClass] = useState('');
    const [hiddenClassmobile, setHiddenClassmobile] = useState('');
    const { aboutRef, servicesRef, projectRef } = useContext(RefsContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            if (window.innerWidth < 480) {
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

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - width / 2) / 4;
        const y = (e.clientY - top - height / 2) / 4;
        cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        setIsHovered(true);
        cardRef.current.style.transition = "none";
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        setIsHovered(false);
        cardRef.current.style.transition = "transform 0.5s";
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    const handleMouseMove2 = (e) => {
        if (!cardRef2.current) return;
        const { left, top, width, height } = cardRef2.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 4;
        const y = (e.clientY - top - height / 2) / 4;
        cardRef2.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter2 = () => {
        if (!cardRef2.current) return;
        setIsHovered2(true);
        cardRef2.current.style.transition = "none";
    };

    const handleMouseLeave2 = () => {
        if (!cardRef2.current) return;
        setIsHovered2(false);
        cardRef2.current.style.transition = "transform 0.5s";
        cardRef2.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    const handleMouseMove3 = (e) => {
        if (!cardRef3.current) return;
        const { right, top, width, height } = cardRef3.current.getBoundingClientRect();
        const x = (e.clientX - right - width / 2) / 6;
        const y = (e.clientY - top - height / 2) / 4;
        cardRef3.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter3 = () => {
        if (!cardRef3.current) return;
        setIsHovered3(true);
        cardRef3.current.style.transition = "none";
    };

    const handleMouseLeave3 = () => {
        if (!cardRef3.current) return;
        setIsHovered3(false);
        cardRef3.current.style.transition = "transform 0.5s";
        cardRef3.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    const handleMouseMove4 = (e) => {
        if (!cardRef4.current) return;
        const { left, top, width, height } = cardRef4.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 4;
        const y = (e.clientY - top - height / 2) / 4;
        cardRef4.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter4 = () => {
        if (!cardRef4.current) return;
        setIsHovered4(true);
        cardRef4.current.style.transition = "none";
    };

    const handleMouseLeave4 = () => {
        if (!cardRef4.current) return;
        setIsHovered4(false);
        cardRef4.current.style.transition = "transform 0.5s";
        cardRef4.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <div style={{ overflowY: 'hidden' }}>
            <WavyBackground >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <StyledDiv initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} style={{ marginTop: hiddenClass ? (hiddenClassmobile ? '-5vh' : '-13vh') : '-10vh' }}>
                        <Why >Ignite your <Stylednew style={{ color: 'black' }}>digital</Stylednew></Why>
                    </StyledDiv>
                    <StyledDiv1 initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}>
                        <Why > presence<span className="space why"></span></Why>
                        <StyledImage src={arrow} alt="GIF" />
                        <Why><Stylednew1 className="space "></Stylednew1>with us<span className="space "></span></Why>
                        <Styledmobile >
                            <Teamdiv style={{ background: '#EDE9E3', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #000', overflow: 'hidden' }}>
                                <img height='100%' width='100%' src={profile} alt="" />
                            </Teamdiv>
                            <Teamdiv1 style={{ background: '#E3E7EE', position: 'relative', overflow: 'hidden', border: '1px solid #000', }}>
                                <img height='100%' width='100%' src={img10} alt="" /> </Teamdiv1>
                            <Teamdiv1 style={{ background: '#EDE9E3', position: 'relative', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                <img height='50%' src={img8} alt="" loading="lazy" />
                            </Teamdiv1>
                        </Styledmobile>

                    </StyledDiv1>
                    {/* <Webbox style={{ background: '#FFCF96', marginTop: '4vh' }}>WE DESIGN & DEVELOP</Webbox> */}
                    <Styledmobile2 initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}>
                        <div style={{ width: '9vw', height: '9vw', background: '#EDE9E3', borderRadius: '4.5vw', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #000', overflow: 'hidden' }}>
                            <img height='100%' width='100%' src={profile} alt="" />
                        </div>
                        <div style={{ width: '9vw', height: '9vw', background: '#E3E7EE', borderRadius: '4.5vw', position: 'relative', marginLeft: '-2vw', overflow: 'hidden', border: '1px solid #000', }}>
                            <img height='100%' width='100%' src={img10} alt="" /> </div>
                        <div style={{ width: '9vw', height: '9vw', background: '#FFCF96', borderRadius: '4.5vw', position: 'relative', marginLeft: '-2vw', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <img height='50%' src={img8} alt="" />
                        </div>
                    </Styledmobile2>
                </div>
                <Container>
                    {hiddenClass ? (
                        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CardWrapper1
                                    initial={{ opacity: 0, y: 70 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
                                    style={{ marginLeft: '5%', width: '42.5%', zindex: '2' }}
                                >
                                    <Text style={{ color: '#000', textAlign: 'center', marginTop: '-2px' }}>Web & App <br /> Development</Text>
                                    {/* <img src={img1} height='20%' style={{ zIndex: 1, transform: isHovered ? "translateZ(40px)" : "translateZ(0px)", marginTop: '2%' }} alt='' /> */}
                                </CardWrapper1>
                                <CardWrapper1
                                    initial={{ opacity: 0, x: '-110%' }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                                    style={{ width: '42.5%', marginRight: '5%', zindex: '0' }}
                                >
                                    <Text style={{ color: '#000', textAlign: 'center', marginTop: '-2px' }}>UI/UX <br />DESIGN</Text>
                                    {/* <img src={img1} height='20%' style={{ transform: isHovered2 ? "translateZ(40px)" : "translateZ(0px)", marginTop: '8px' }} alt='' /> */}
                                </CardWrapper1>
                            </div>
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5vh' }}>
                                <CardWrapper1
                                    initial={{ opacity: 0, y: 70 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
                                    style={{ marginLeft: '5%', width: '42.5%', zindex: '2' }}
                                >
                                    <Text style={{ color: '#000', textAlign: 'center', marginTop: '-2px' }}>Digital <br />Marketing</Text>
                                    {/* <img src={img1} height='20%' style={{ transform: isHovered4 ? "translateZ(40px)" : "translateZ(0px)", marginTop: '8px' }} alt='' /> */}
                                </CardWrapper1>
                                <CardWrapper1
                                    initial={{ opacity: 0, x: '-110%' }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                                    style={{ marginRight: '5%', width: '42.5%', zindex: '1' }}
                                >
                                    <Text style={{ transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", color: '#000', textAlign: 'center', marginTop: '-2px' }}>India<br />Located In</Text>
                                    {/* <img src={img1} height='20%' style={{ transform: isHovered3 ? "translateZ(40px)" : "translateZ(0px)", marginTop: '8px' }} alt='' /> */}
                                </CardWrapper1>
                            </div>

                        </div>
                    )
                        :
                        (
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CardWrapper
                                    initial={{ opacity: 0, y: 70 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
                                    className="border-gradient border-gradient-purple"
                                    backgroundColor="#FFCF96"
                                    style={{ marginLeft: '5%', zIndex: '4' }}
                                >
                                    {/* <HoverImage src={gif} alt='' /> */}
                                    {/* <div style={{ height: '14vh', width: '14vh', background: 'transparent', border: '1.5px solid transparent', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '0', transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <div style={{ height: '8vh', width: '8vh', background: 'transparent', border: '1.5px solid #000', borderRadius: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <HoverImage2 src={img2} alt='' />
                                        </div>
                                    </div> */}
                                    <div style={{ height: '100%', width: '100%', background: 'transparent', border: '1px solid #000', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '1' }} />
                                    <Text className='abouthomebox' style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)", zIndex: 1, color: '#000', textAlign: 'center', marginTop: '-2px', zIndex: '2' }}>Web & APP <br /> DEVELOPMENT</Text>
                                </CardWrapper>
                                <CardWrapper
                                    initial={{ opacity: 0, x: '-125%' }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
                                    backgroundColor="#FFCF96"
                                    style={{ zIndex: '3', }}
                                >

                                    {/* <div style={{ height: '14vh', width: '14vh', background: 'transparent', border: '1.5px solid #F88B0A', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '0', transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <div style={{ height: '8vh', width: '8vh', background: 'transparent', border: '1.5px solid #F88B0A', borderRadius: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <HoverImage2 src={img2} alt='' />
                                        </div>
                                    </div> */}
                                    <div style={{ height: '100%', width: '100%', background: 'transparent', border: '1px solid #000', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '1' }} />
                                    <Text className='abouthomebox' style={{ transform: isHovered2 ? "translateZ(30px)" : "translateZ(0px)", color: '#000', textAlign: 'center', marginTop: '-2px' }}>UI/UX<br />DESIGN</Text>
                                </CardWrapper>
                                <CardWrapper
                                    initial={{ opacity: 0, x: '-125%' }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
                                    backgroundColor="#FFCF96"
                                    style={{ zIndex: '2', }}
                                >
                                    {/* <div style={{ height: '14vh', width: '14vh', background: 'transparent', border: '1.5px solid #F88B0A', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '0', transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <div style={{ height: '8vh', width: '8vh', background: 'transparent', border: '1.5px solid #F88B0A', borderRadius: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <HoverImage2 src={img2} alt='' />
                                        </div>
                                    </div> */}
                                    <div style={{ height: '100%', width: '100%', background: 'transparent', border: '1px solid #000', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '1' }} />
                                    <Text className='abouthomebox' style={{ transform: isHovered4 ? "translateZ(30px)" : "translateZ(0px)", color: '#000', textAlign: 'center', marginTop: '-2px' }}>Digital <br />Marketing</Text>

                                </CardWrapper>
                                <CardWrapper
                                    initial={{ opacity: 0, x: '-125%' }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 2.4 }}
                                    backgroundColor="#FFCF96"
                                    style={{ zIndex: '1', marginRight: '5%' }}
                                >
                                    {/* <div style={{ height: '14vh', width: '14vh', background: 'transparent', border: '1.5px solid transparent', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '0', transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                        <div style={{ height: '8vh', width: '8vh', background: 'transparent', border: '1.5px solid #F8A13A', borderRadius: '7vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <HoverImage1 src={gif3} alt='' />
                                        </div>
                                    </div> */}
                                    <div style={{ height: '100%', width: '100%', background: 'transparent', border: '1px solid #000', borderRadius: '7vh', position: 'absolute', top: '0', left: '0', zIndex: '1' }} />

                                    <Text className='abouthomebox' style={{ transform: isHovered3 ? "translateZ(30px)" : "translateZ(0px)", color: '#000', textAlign: 'center', marginTop: '-2px', zIndex: '2' }}>India<br />Located In</Text>
                                </CardWrapper>
                            </div>
                        )}

                </Container>
            </WavyBackground >
            <div ref={aboutRef}>
                <Srolltext />
            </div>

            <Abouthome />
            <div ref={servicesRef}>
                <Services />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
            <Projectgalle />
            <Horizontalscrollgasp />
            <Testimonials />
            <Contact />

        </div >



    );
};

export default Home;
