import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
  border: 1px solid ${({ theme }) => theme.soft};
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
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px; /* Adjusted for spacing */
`;

const VideoPlayer = styled.video`
  width: 100%;
  margin-top: 20px;
`;

const Upload = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleFileChange = (event) => {
    // Handle the file with event.target.files[0]
    console.log(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("video", event.target.files[0]);

    try {
      // Make a POST request to the backend to upload the video
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Get the URL of the uploaded video from the response
      const uploadedVideoUrl = response.data.videoUrl;
      setVideoUrl(uploadedVideoUrl);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Upload Your File</Title>
        <form onSubmit={handleSubmit}>
          <Input type="file" onChange={handleFileChange} />
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
