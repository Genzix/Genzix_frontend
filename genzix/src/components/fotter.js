import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../components/assets/logo.png';
import Divider from '@mui/material/Divider';
import img3 from '../components/assets/insta.png';
import img2 from '../components/assets/face.png';

const CustomStyle = styled.div`
  height: 25vh;
  width: 100%;
  background: #FFCF96;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const CustomStyle1 = styled.div`
  height: 100%;
  width: 100%;
  background: #FFCF96;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Container3 = styled.div`
  display: flex;
  gap:10px;
  margin-top:5%;
  @media only screen and (max-width: 500px) {
    gap:8px;
  }
`;
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 35px; 
  height: 35px; 
  border-radius: 50%; 
  background-color: #fff;
  cursor:pointer;
  transition: background-color 0.3s; 
  &:hover {
    background: #FFCF96;
    // img {
    //   filter: invert(70%);
    // }
  }

//   @media only screen and (max-width: 500px) {
//     display:none;
//   }
`;

const CenteredText = styled.text`
  margin-left: auto;
  margin-right: auto;
  color: #000;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 4px;
  font-weight: 800;
  font-size: 120px;
  
`;

const Fotter = () => {

    const [localTime, setLocalTime] = useState('');
    const [hiddenClass, setHiddenClass] = useState('');
    const [hiddenClassmobile, setHiddenClassmobile] = useState('');

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
            if (window.innerWidth < 767) {
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

    const updateLocalTime = () => {
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = now.toLocaleTimeString('en-US', options);
        setLocalTime(timeString);
    };

    useEffect(() => {
        updateLocalTime();
        const intervalId = setInterval(updateLocalTime, 60000); // Update time every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <CustomStyle>
            <CustomStyle1>
                <text className='para4' style={{ marginLeft: 'auto', marginRight: 'auto', color: 'grey', fontSize: '14px', marginTop: '2%' }}> 2024 © Edition</text>
                {hiddenClass ? (
                    <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-between', display: 'flex', marginTop: '5%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className='aboutfotter' style={{ fontSize: hiddenClassmobile ? '12px' : '18px' }} >Email</span>
                                <span className='para5' style={{ color: '#000', marginTop: '2%', fontSize: hiddenClassmobile ? '12px' : '20px' }}>yvk2402@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5%' }}>
                                <span className='aboutfotter' style={{ fontSize: hiddenClassmobile ? '12px' : '18px' }} >Phone no</span>
                                <span className='para5' style={{ color: '#000', marginTop: '2%', fontSize: hiddenClassmobile ? '12px' : '20px' }}>+918297048755</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5%' }}>
                                <span className='aboutfotter' style={{ fontSize: hiddenClassmobile ? '12px' : '18px' }} >Local Time</span>
                                <span className='para5' style={{ color: '#000', marginTop: '2%', fontSize: hiddenClassmobile ? '12px' : '20px' }}>{localTime} IST</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className='aboutfotter' style={{ fontSize: hiddenClassmobile ? '12px' : '18px' }} >Socials</span>
                            <div style={{ display: 'flex', flexDirection:'column' }}>
                                <span className='para5' style={{ color: '#000', marginTop: '5%', fontSize: hiddenClassmobile ? '12px' : '20px' }}> Instagram</span>
                                <span className='para5' style={{ color: '#000', marginTop: '5%' , fontSize: hiddenClassmobile ? '12px' : '20px'}}> LinkedIn</span>
                                <span className='para5' style={{ color: '#000', marginTop: '5%' , fontSize: hiddenClassmobile ? '12px' : '20px'}}>Twitter</span>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div style={{ width: "90%", height: '40%', marginTop: '2%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className='aboutfotter' >Email</span>
                            <span className='para5' style={{ color: '#000', marginTop: '4%' }}>yvk2402@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "2%" }}>
                            <span className='aboutfotter' >Phone no</span>
                            <span className='para5' style={{ color: '#000', marginTop: '5%' }}>+918297048755</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "2%" }}>
                            <span className='aboutfotter' >Local Time</span>
                            <span className='para5' style={{ color: '#000', marginTop: '6%' }}>{localTime} IST</span>
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column' }}>
                            <span className='aboutfotter' >Socials</span>
                            <div style={{ display: 'flex' }}>
                                <span className='para5' style={{ color: '#000', marginTop: '3%', }}> Instagram</span>
                                <span className='para5' style={{ color: '#000', marginTop: '3%', marginLeft: '7%' }}> LinkedIn</span>
                                <span className='para5' style={{ color: '#000', marginTop: '3%', marginLeft: '7%' }}>Twitter</span>
                            </div>

                        </div>
                    </div>
                )}
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%', marginTop: '1%' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', height:"10%", width:'auto', alignItems:"start" }}>
                            <span className='aboutfotter' style={{ marginTop: '5%' }}>Phone no</span>
                            <span className='para5' style={{ color: '#000', marginTop: '2%' }}>+918297048755</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', height:"10%", width:'auto', alignItems:"start"  }}>
                            <span className='aboutfotter' style={{ marginTop: '5%' }}>Email</span>
                            <span className='para5' style={{ color: '#000', marginTop: '2%' }}>yvk2402@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', height:"10%", width:'auto', alignContent:"start"  }}>
                            <span className='aboutfotter' style={{ marginTop: '5%' }}>Local Time</span>
                            <span className='para5' style={{ color: '#000', marginTop: '2%' }}>{localTime} IST</span>
                        </div>
                    </div>
                </div> */}
                {/* <CenteredText > Genzix </CenteredText> */}
            </CustomStyle1>
        </CustomStyle >
    )
}

export default Fotter
