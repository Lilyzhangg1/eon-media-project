import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const ImageContainer = styled.div`
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <ImageContainer>
          <Image
            type={type}
            src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
          />
        </ImageContainer>
        <Title>Test Video</Title>
      </Container>
    </Link>
  );
};

export default Card;
