import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './Contactuspage.css';
import img1 from '../components/assets/arrowhome.png';


const CustomStyle = styled.div`
  width: 100%;
  background: #EDE9E3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const CustomStyle1 = styled.div`
  width: 61.11%;
  background: #EDE9E3;
  display: flex;
  overflow : hidden;
  flex-direction: column;
  justify-content: start;

   @media (max-width: 767px) {
       width: 100%;
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        width: 100%;
    }

`;

const CustomStyle2 = styled.div`
  width: 33.333%;
  background: #EDE9E3;
  display: flex;
  flex-direction: column;
  justify-content: start;
   @media  (max-width: 1200px) {
       display : none;
    }
`;

const Margin = styled.div`
  height:  calc(4vh + 60px);
  display: flex;
  align-items: center; 
  justify-content: center;
`;


const CustomStyle3 = styled.div`
  height: 15vh;
  width: 100%;
  color: #000;
  background-color: #EDE9E3;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 20vh;
  font-size: 1.5vw;
  font-family: "Poppins", sans-serif;
  letter-spacing: 4px;
  font-weight: 200;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center; 
  justify-content: center;
`;
const StyledButton2 = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 100px;
  font-size: 1.5vw;
  font-family: "Poppins", sans-serif;
  letter-spacing: 4px;
  font-weight: 200;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center; 
  justify-content: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    transform: ${props => (props.isHovered ? 'translateY(-15vh)' : 'translateY(0)')};
    transition:  transform 0.2s linear;

    @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 3.5vw;
  }

  @media (max-width: 767px) {
    font-size: 5vw;
  }
`;

const StyledButton3 = styled.div`
height: 15vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: start;
border-radius: 100px;
font-size: 1.5vw;
font-family: "Poppins", sans-serif;
letter-spacing: 4px;
font-weight: 200;
text-decoration: none;
text-transform: uppercase;
display: flex;
align-items: center; 
justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  transform: ${props => (props.isHovered ? 'translateY(-15vh)' : 'translateY(0)')};
  transition:  transform 0.2s linear;
   @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 3.5vw;
  }

  @media (max-width: 767px) {
    font-size: 5vw;
  }
`;

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-34%);
  }
`;

const ScrollingText = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${scrollText} 8s linear infinite;
`;

const RotatedImage = styled.img`
  transform: rotate(90deg);
  height: 3vh;
`;


const StyledInput = styled.input`
  height: 15vh;
  width: 100%;
  padding: 0vh 4vh;
  background: #EDE9E3;
  border: 1px solid #000;
  border-radius: 20vh;
  font-size: 1.5vw;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-weight: 200;
  outline: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &::placeholder {
    color: #8F8D8D;
    font-size: 1.5vw;
    text-transform: none;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 3.5vw;
    &::placeholder {
      font-size: 3.5vw;
    }
  }

  @media (max-width: 767px) {
    font-size: 5vw;
    &::placeholder {
      font-size: 5vw;
    }
  }
`;


const StyledContainer = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const StyledContainer1 = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: end;
  justify-content: start;
   @media (max-width: 767px) {
       height: 10vh;
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        height: 10vh;
    }

`;
const StyledContainer2 = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
       height: 8vh;
        
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        height: 8vh;
    }
`;

const Why = styled.div`
  font-size: 3.5vw;
  color: #000;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1vw;
  font-family: "Darker Grotesque", sans-serif;
  line-height: 1;

   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 8vw;
      margin-bottom: 2vw;
    }
    @media (max-width: 767px) {
    font-size: 10vw;
     margin-bottom: 2vw;
    }
`;

const About2 = styled.div`
  font-size: 2vw;
  line-height: 1;
  margin-bottom: 1.2vw;
  margin-left: 1vw;
  color: #000;
  text-transform: uppercase;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
   @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 2.7vw;
      margin-bottom: 2.8vw;
     margin-left: 2vw;
    }
    @media (max-width: 767px) {
    font-size: 3vw;
    margin-bottom: 3vw;
    margin-left: 2vw;
    }
`;

const Contactuspage = () => {
    const [isHovered5, setIsHovered5] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        services: '',
        budget: '',
        message: ''
    });
    const [hiddenClass, setHiddenClass] = useState('');
    const [hiddenClassmobile, setHiddenClassmobile] = useState('');

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/submitFormToNotion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Form data sent to Notion:', data);
                // Alert success
                alert('Form submitted successfully!');
                // Clear form inputs
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    services: '',
                    budget: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error sending form data to Notion:', error);
            // Alert error
            alert('Error submitting form!');
        }
    };

    return (
        <CustomStyle>
            <StyledContainer >
                <Why style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20vh', textAlign: 'center' }} >Let's  start  a project together</Why>
                <div style={{ marginTop: '3vh', display: 'flex', justifyContent: 'space-between' }}>
                    <CustomStyle1>
                        <StyledContainer1 >
                            <Why >01</Why>
                            <About2  >Name</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='name'
                            type="text"
                            placeholder='Madhuri *'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer1 >
                            <Why >02</Why>
                            <About2  >Email</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='email'
                            type="email"
                            placeholder='eroberteam@gmail.com *'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer1 >
                            <Why >03</Why>
                            <About2  >What's the name of your organization?</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='company'
                            type="text"
                            placeholder='Genzix *'
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer1 >
                            <Why >04</Why>
                            <About2  >What services are you looking for?</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='services'
                            type="text"
                            placeholder='Web & app design and development and digital marketing.... *'
                            value={formData.services}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer1 >
                            <Why >05</Why>
                            <About2  >Your Budget</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='budget'
                            type="text"
                            placeholder='100-1000$ *'
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer1 >
                            <Why >06</Why>
                            <About2  >Your message</About2>
                        </StyledContainer1>
                        <StyledInput
                            name='message'
                            type="text"
                            placeholder='Hello Genzix, can you help me... *'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <StyledContainer2 >
                        </StyledContainer2>
                    </CustomStyle1>
                    <CustomStyle2>
                        <StyledContainer2 >
                        </StyledContainer2>
                        <CustomStyle3 style={{ background: "#FFCF96" }}>Form Filling</CustomStyle3>
                        <StyledContainer2 >
                            <RotatedImage src={img1} alt='' />
                        </StyledContainer2>
                        <CustomStyle3>Kick Off Meeting</CustomStyle3>
                        <StyledContainer2 >
                            <RotatedImage src={img1} alt='' />
                        </StyledContainer2>
                        <CustomStyle3>Madhuri</CustomStyle3>
                        <StyledContainer2 >
                            <RotatedImage src={img1} alt='' />
                        </StyledContainer2>
                        <CustomStyle3>Madhuri</CustomStyle3>
                        <StyledContainer2 >
                            <RotatedImage src={img1} alt='' />
                        </StyledContainer2>
                        <CustomStyle3>Madhuri</CustomStyle3>
                        <StyledContainer2 >
                            <RotatedImage src={img1} alt='' />
                        </StyledContainer2>
                        <CustomStyle3>Madhuri</CustomStyle3>
                    </CustomStyle2>
                </div>
                <CustomStyle3 onClick={handleSubmit} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} isHovered={isHovered5} >
                    <StyledButton2 backgroundColor="#EDE9E3" color="#fff" isHovered={isHovered5}>
                        <text style={{ color: '#000' }}>submit</text>
                    </StyledButton2>
                    <StyledButton3 backgroundColor="#FFCF96" color="#000" isHovered={isHovered5} style={{ position: 'absolute', left: '0', marginTop: '30vh', zIndex: '1' }}>
                        <ScrollingText>submit <span className="space1"></span>  submit <span className="space1"></span> submit <span className="space1"></span> submit <span className="space1"></span> submit<span className="space1"></span>  submit <span className="space1"></span> submit <span className="space1"></span> submit <span className="space1"></span> submit <span className="space1"></span>  submit <span className="space1"></span> submit <span className="space1"></span> submit <span className="space1"></span> submit<span className="space1"></span>  submit <span className="space1"></span> submit <span className="space1"></span> submit <span className="space1"></span> submit</ScrollingText>
                    </StyledButton3>
                </CustomStyle3>
            </StyledContainer>
            <StyledContainer2 >
            </StyledContainer2>
        </CustomStyle>
    )
}

export default Contactuspage


