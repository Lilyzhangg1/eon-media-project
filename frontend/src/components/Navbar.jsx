import React from "react";
import styled from "styled-components";
import NetflixLogo from "../img/logo.png"; // Make sure this path is correct
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: black; 
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  z-index: 10;
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid white;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
  padding-left: 10px;
  width: 250px; // Adjust width as needed
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: white;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1em;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background-color: grey;
    color: black;
    border-color: grey;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoButton>
          <Logo src={NetflixLogo} alt="Netflix Logo" />
        </LogoButton>
      </Link>
      <Search>
        <Input placeholder="Search" />
        <SearchIcon />
      </Search>
      <Link to="upload" style={{ textDecoration: "none" }}>
        <Button>Upload</Button>
      </Link>
    </Container>
  );
};

export default Navbar;
