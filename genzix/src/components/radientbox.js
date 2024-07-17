import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradientAnimation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const GradientBackground = styled.div`
  position: relative;
  padding: 4px;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};
  &.group {
    &:hover {
      opacity: 1;
    }
  }
  /* Apply provided class names directly */
  &.rounded-[22px] {
    border-radius: 22px;
  }
  &.max-w-sm {
    max-width: 24rem;
  }
  &.p-4 {
    padding: 1rem;
  }
  &.sm\:p-10 {
    padding: 2.5rem;
  }
  &.bg-white {
    background-color: #fff;
  }
  &.dark\:bg-zinc-900 {
    background-color: #333;
  }
`;

const Gradient = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 3xl;
  z-index: 1;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  transition: opacity 0.5s;
  background-image: radial-gradient(
      circle farthest-side at 0 100%,
      #00ccb1,
      transparent
    ),
    radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent),
    radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent),
    radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316);
  animation: ${gradientAnimation} 5s infinite alternate-reverse;
  background-size: ${props => (props.animate ? "400% 400%" : "auto")};
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  width,
  height,
  classNames
}) => {
  return (
    <GradientBackground className={`relative group ${containerClassName} ${classNames}`} width={width} height={height}>
      <Gradient
        animate={animate}
        style={{ backgroundSize: animate ? "400% 400%" : "auto" }}
        className={`absolute inset-0 rounded-3xl ${
          animate ? "will-change-transform" : ""
        }`}
      />
      <Gradient
        animate={animate}
        style={{ backgroundSize: animate ? "400% 400%" : "auto" }}
        className={`absolute inset-0 rounded-3xl ${
          animate ? "will-change-transform" : ""
        }`}
      />
      <ContentContainer className={`relative z-10 ${className}`}>
        {children}
      </ContentContainer>
    </GradientBackground>
  );
};

export default BackgroundGradient;
