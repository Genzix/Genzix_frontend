import React, { useState, useEffect } from 'react';
import './Loader.css';
import styled from 'styled-components';


const Text = styled.div`
  position: absolute;
  font-size: 4vw;
  right: 2%;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Loader11 = styled.div`
  font-size: 4vw;
  font-weight: 600;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 1;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  letter-spacing: 2px;
     @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 10vw;
      margin-right: 1.5vw;
    }
    @media (max-width: 767px) {
    font-size: 13vw;
     margin-right: 2vw;
    }
`;

const LoadingText = styled.div`
  margin-top: -0.1vw;
  font-size: 1.5vw;
  margin-bottom: 1vw;
  line-height: 1;
  font-weight: 500;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  font-family: 'Darker Grotesque', sans-serif;
  letter-spacing: 2px;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 3.6vw;
      margin-right: 1.5vw;
      margin-bottom: 3vw;
    }
    @media (max-width: 767px) {
    font-size: 5vw;
    margin-bottom: 5vw;
    text-align: end ;
    margin-right: 2vw;
    }
`;

const Language = styled.div`
  font-size: 2vw;
  margin-top: 1vw;
  font-weight: 500;
  font-family: 'Darker Grotesque', sans-serif;
  letter-spacing: 2px;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  animation: fadeInOut 1s infinite;
    @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 4vw;
    }
    @media (max-width: 767px) {
    font-size: 6vw;
    }
`;

const languages = [
    { lang: "Hello", duration: 1000 },
    { lang: "Bonjour", duration: 1000 }, // French
    { lang: "Hallo", duration: 1000 }, // German
    { lang: "नमस्ते", duration: 1000 }, // Hindi
];

function Loader() {
    const [percent, setPercent] = useState(0);
    const [currentLangIndex, setCurrentLangIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prevPercent => {
                if (prevPercent >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevPercent + 1;
            });
        }, 15); // Adjust the interval speed as needed

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const langInterval = setInterval(() => {
            setCurrentLangIndex(prevIndex => (prevIndex + 1) % languages.length);
        }, languages[currentLangIndex].duration);

        return () => clearInterval(langInterval);
    }, [currentLangIndex]);

    const renderLoadingText = () => {
        if (percent <= 20) {
            return "Loading...";
        } else if (percent > 20 && percent <= 80) {
            return "Hang tight, we're preparing your experience!";
        } else {
            return "Almost Ready!";
        }
    };

    return (
        <div className="loader-container">
            <Language >
                {languages[currentLangIndex].lang}
            </Language>
            <Text >
                <Loader11 >
                    {percent}%
                </Loader11>
                <LoadingText >
                    {renderLoadingText()}
                </LoadingText>
            </Text>
        </div>
    );
}

export default Loader;
