import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid red;
  padding: 20px 50px;
  gap: 10px;
`;


const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%; /* Ensure full width for alignment */
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;

  &:hover {
    background-color: red;
    color: white;
  }
`;


const VideoPlayer = styled.video`
  width: 100%;
  margin-top: 20px;
`;

const Upload = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState(""); // State for video title

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Update the title state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Using the form's event.target to build FormData
    formData.append("title", title); // Include the title in the formData
  
    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Assuming the backend returns the video metadata including its filename
      // and the server is configured to serve videos from /video/<filename>
      if (response.data && response.data.video) {
        const uploadedFilename = response.data.video.filename;
        const uploadedVideoUrl = `${window.location.origin}/video/${uploadedFilename}`;
        setVideoUrl(uploadedVideoUrl);
        navigate('/'); // Navigate back to home after setting the video URL
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };  

  return (
    <Container>
      <Wrapper>
        <Title>Upload Your Video</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter video title..."
            value={title}
            onChange={handleTitleChange}
            required
          />
          <Input
            type="file"
            onChange={handleFileChange}
            required
          />
          <Button type="submit">Upload</Button>
        </form>
        {videoUrl && (
          <VideoPlayer controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoPlayer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Upload;
