import React from "react";
import styled from "styled-components";
import NetflixLogo from "../img/logo.png"; // Make sure this path is correct
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: black; /* Changed background color to black */
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Search = styled.div`
  flex: 0.5; /* Reduced the width of the search bar */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px; /* Reduced margin */
  padding: 5px;
  border: 1px solid white;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 90%; /* Reduced the width of the input field */
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: white; /* Set the color of the icon to white */
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: #e50914;
  border: none;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1em;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f40612;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src={NetflixLogo} alt="Netflix Logo" />
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
