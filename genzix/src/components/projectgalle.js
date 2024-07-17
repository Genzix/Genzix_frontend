import React, { useEffect, useState } from 'react';
import Modalimg from './modal';
import Projectsimage from './projectsimage';
import styled from 'styled-components';

import img1 from '../components/assets/an.png';
import img2 from '../components/assets/fitsagef.png';
import img3 from '../components/assets/NERDSF.png';
import img7 from '../components/assets/yourproject.png';
import img4 from '../components/assets/nerdlogo.png';
import img5 from '../components/assets/andhraruchululogo.png';
import img6 from '../components/assets/Fitsagelogo.png';

const project = [
    {
        title: 'Fitsage',
        src: img2,
        src1: img6,
        niech: 'Fitness App - Ongoing'
    },
    {
        title: 'Andhra Ruchulu',
        src: img1,
        src1: img5,
        niech: 'Food Delivery Website (Ireland) - Completed'
    },
    {
        title: 'Nerds',
        src: img3,
        src1: img4,
        niech: 'Ebook App - Completed'
    },
    {
        title: 'Your Project',
        src: img7,
    },
];

const CustomStyle = styled.div`
  width: 90%;
  height: 38vh;
  margin-left: 5%;
  margin-right: 5%;
  background-color: #EDE9E3;
  border-radius: 40px;
  align-items: center;
  justify-content: start;
  border: 1px solid  #000000 ;
  display: flex;
  flex-direction: column;

`;

const Custombutton = styled.div`
  width: 40%;
  height: 5vh;
  background-color: #EDE9E3;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid  #000000 ;
  display: flex;
   &:hover {
    background-color: #FFCF96;  
  }
`;

const Projectgalle = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
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

    const handleClick = () => {
        window.open('https://andhraruchulu.in/', '_blank', 'noopener,noreferrer');
    };

    return (
        <div style={{ backgroundColor: '#EDE9E3', width: "100%", height: '128vh', overflow: 'hidden' }}>
            {hiddenClass ? (
                <div >
                    <CustomStyle>
                        <div style={{ display: 'flex', width: '87.5%', alignItems: 'center', justifyContent: 'space-between', marginTop: '2vh' }}>
                            <div className='why' style={{ fontSize: hiddenClassmobile ? '7vw' : '5vw', fontWeight: '500' }} > Fitsage </div>
                            <Custombutton style={{ fontSize: hiddenClassmobile ? '4vw' : '3vw' }}>Ongoing</Custombutton>
                        </div>
                        <div style={{ height: '26vh', width: '90%', marginTop: '2.5vh', borderRadius: '5vh', overflow: 'hidden' }}>
                            <img src={img2} alt=" " style={{ width: '100%', height: '100%' }} />
                        </div>


                    </CustomStyle>
                    <CustomStyle style={{ marginTop: '5vh' }}>
                        <div style={{ display: 'flex', width: '87.5%', alignItems: 'center', justifyContent: 'space-between', marginTop: '2vh' }}>
                            <div className='why' style={{ fontSize: hiddenClassmobile ? '7vw' : '5vw', fontWeight: '500' }} > Andhra Ruchulu </div>
                            <Custombutton onClick={handleClick} style={{ fontSize: hiddenClassmobile ? '4vw' : '3vw' }}>View Online</Custombutton>
                        </div>
                        <div style={{ height: '26vh', width: '90%', marginTop: '2.5vh', borderRadius: '5vh', overflow: 'hidden' }}>
                            <img src={img1} alt=" " style={{ width: '100%', height: '100%' }} />
                        </div>
                    </CustomStyle>

                    <CustomStyle style={{ marginTop: '5vh' }}>
                        <div style={{ display: 'flex', width: '87.5%', alignItems: 'center', justifyContent: 'space-between', marginTop: '2vh' }}>
                            <div className='why' style={{ fontSize: hiddenClassmobile ? '7vw' : '5vw', fontWeight: '500' }} > Nerds </div>
                            <Custombutton style={{ fontSize: hiddenClassmobile ? '4vw' : '3vw' }}>Completed</Custombutton>
                        </div>
                        <div style={{ height: '26vh', width: '90%', marginTop: '2.5vh', borderRadius: '5vh', overflow: 'hidden' }}>
                            <img src={img3} alt=" " style={{ width: '100%', height: '100%' }} />
                        </div>
                    </CustomStyle>
                </div>
            ) : (
                <div>
                    <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                        {project.map((project, index) => {
                            return <Projectsimage key={index} index={index} title={project.title} niech = {project.niech} src1 = {project.src1} setModal={setModal} />;
                        })}
                    </div>
                    <Modalimg modal={modal} project={project} />
                </div >
            )}

        </div >
    );
}

export default Projectgalle;
