import React from "react";
import styled from "styled-components";

const PreviewContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
`;

const VideoPreview = ({ onClose }) => {
  return (
    <PreviewContainer>
      <VideoPlayer
        controls
        src="url_of_your_video"
        type="video/mp4"
      />
      <button onClick={onClose}>Close</button>
    </PreviewContainer>
  );
};

export default VideoPreview;
