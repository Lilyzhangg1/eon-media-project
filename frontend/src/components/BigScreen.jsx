import React from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Ensure you have this MUI icon installed
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; // Ensure you have this MUI icon installed
import BackgroundImage from '../img/background.png'

const BigScreenContainer = styled.div`
  width: 100%;
  height: 600px; // Set the height you desire
  background-image: url('../img/background.png');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const BigImage = styled.img`
    width: 100%; /* Adjust the width as needed */
    height: 400px; /* Adjust the height as needed */
    object-fit: cover;
`;

const InfoSection = styled.div`
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);  // Translucent overlay
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 48px; // Adjust as needed
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px; // Adjust as needed
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: rgba(51, 51, 51, 0.5);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
  }

  .icon {
    margin-right: 5px;
  }
`;

const PlayButton = styled(Button)`
  background-color: #e50914;

  &:hover {
    background-color: #f40612;
  }
`;

const BigScreen = () => {
  return (
    <BigScreenContainer >
        <BigImage src={BackgroundImage}></BigImage>
      <InfoSection>
        <Title>Stranger Things 2</Title>
        <Description>
        "Stranger Things 2" follows the residents of Hawkins, Indiana, as they confront the aftermath of the Demogorgon's defeat, dealing with new supernatural threats from the Upside Down and the arrival of mysterious new characters.
        </Description>
        <ButtonGroup>
          <PlayButton>
            <PlayArrowIcon className="icon" /> Play
          </PlayButton>
          <Button>
            <InfoOutlinedIcon className="icon" /> More Info
          </Button>
        </ButtonGroup>
      </InfoSection>
    </BigScreenContainer>
  );
};

export default BigScreen;
