// import React, { useRef } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";
// import styled from "styled-components";

// import img1 from '../components/assets/1.jpg';
// import img2 from '../components/assets/2.jpg';
// import img3 from '../components/assets/3.jpg';
// import img4 from '../components/assets/4.jpg';
// import img5 from '../components/assets/5.jpg';
// import img6 from '../components/assets/6.jpg';
// import img7 from '../components/assets/7.jpg';

// const Example = () => {
//     return (
//         <StyledBackground>
//             <StyledSection>
//                 <StyledText>Scroll down</StyledText>
//             </StyledSection>
//             <HorizontalScrollCarousel />
//             <StyledSection>
//                 <StyledText>Scroll up</StyledText>
//             </StyledSection>
//         </StyledBackground>
//     );
// };

// const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollXProgress } = useScroll({
//         target: targetRef,
//     });

//     const x = useTransform(scrollXProgress, [0, 1], ["0%", "-600%"]); // Adjust the range according to your content width

//     return (
//         <StyledCarousel ref={targetRef}>
//             <StyledStickyContainer>
//                 <motion.div style={{ x }}>
//                     {cards.map((card) => {
//                         return <Card card={card} key={card.id} />;
//                     })}
//                 </motion.div>
//             </StyledStickyContainer>
//         </StyledCarousel>
//     );
// };

// const Card = ({ card }) => {
//     return (
//         <StyledCard>
//             <StyledImage>
//                 <img
//                     src={card.url}
//                     alt='image'
//                     style={{ height: '100%', width: '100%' }}
//                 />
//             </StyledImage>
//             <StyledContent>
//                 <StyledTitle>{card.title}</StyledTitle>
//             </StyledContent>
//         </StyledCard>
//     );
// };

// const StyledBackground = styled.div`
//   background-color: #4b5563; /* neutral-800 */
// `;

// const StyledSection = styled.div`
//   display: flex;
//   height: 48px;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledText = styled.span`
//   font-weight: 600; /* font-semibold */
//   text-transform: uppercase;
//   color: #a0aec0; /* neutral-500 */
// `;

// const StyledCarousel = styled.section`
//   position: relative;
//   height: 500px; /* Adjust the height as needed */
//   overflow-x: auto;
//   overflow-y: hidden;
//   white-space: nowrap;
//   background-color: #2d3748; /* neutral-900 */
// `;

// const StyledStickyContainer = styled.div`
//   display: inline-block;
// `;

// const StyledCard = styled.div`
//   display: inline-block;
//   height: 450px;
//   width: 450px;
//   margin-right: 20px; /* Adjust spacing between cards */
// `;

// const StyledImage = styled.div`
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
// `;

// const StyledContent = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 16px;
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
// `;

// const StyledTitle = styled.p`
//   margin: 0;
//   font-size: 18px;
//   color: #ffffff;
// `;

// const cards = [
//     {
//         url: img1,
//         title: "Title 1",
//         id: 1,
//     },
//     {
//         url: img2,
//         title: "Title 2",
//         id: 2,
//     },
//     {
//         url: img3,
//         title: "Title 3",
//         id: 3,
//     },
//     {
//         url: img4,
//         title: "Title 4",
//         id: 4,
//     },
//     {
//         url: img5,
//         title: "Title 5",
//         id: 5,
//     },
//     {
//         url: img6,
//         title: "Title 6",
//         id: 6,
//     },
//     {
//         url: img7,
//         title: "Title 7",
//         id: 7,
//     },
// ];

// export default Example;
