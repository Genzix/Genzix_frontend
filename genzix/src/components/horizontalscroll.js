import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  margin: 0;
`;

const BodyContainer = styled.div`
  overflow-y: visible;
  position: relative;
  overflow-x: hidden;
  margin: 0;
`;

const Container = styled.div`
  width: 600vw;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
  background: yellow;
`;

const LastContainer = styled.div`
  display: flex;
  height: 50vh;
  background: yellow;
`;

const Panel = styled.div`
  width: 100vw;
  height: 50vh;
`;

const BluePanel = styled(Panel)`
  background-color: blue;
`;

const RedPanel = styled(Panel)`
  background: red;
`;

const OrangePanel = styled(Panel)`
  background: orange;
`;

const PurplePanel = styled(Panel)`
  background: purple;
`;

const useScrollAnimation = (componentRef, sliderRef) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderRef.current.offsetWidth,
          markers: true
        }
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);
};

const Scene = () => {
  const component = useRef();
  const slider = useRef();

  useScrollAnimation(component, slider);

  return (
    <AppContainer ref={component}>
      <FirstContainer>
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </FirstContainer>
      <Container ref={slider}>
        <BluePanel className="panel">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </BluePanel>
        <RedPanel className="panel">ONE</RedPanel>
        <OrangePanel className="panel">TWO</OrangePanel>
        <PurplePanel className="panel">THREE</PurplePanel>
      </Container>
      <LastContainer>Last Container</LastContainer>
    </AppContainer>
  );
};

export default Scene;
