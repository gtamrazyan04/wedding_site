import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContainer isOpen={isOpen}>
      <MenuIcon isVisible={!isOpen} onClick={toggleSidebar}>
        ☰
      </MenuIcon>
      {isOpen && (
        <>
          <Header>
            <button onClick={toggleSidebar}>✖</button>
          </Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/venue">Venue</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: #ffffff;
  border-right: 2px solid #d6e6f2;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "200px" : "0")};
  position: fixed;
  transition: width 0.3s ease;
  overflow: hidden;

  ul {
    list-style: none;
    padding: 20px;
    margin: 0;
  }

  li {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #0077b6;
  }

  a:hover {
    color: #00b4d8;
  }
`;

const MenuIcon = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0077b6;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(-20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
    background-color: #00b4d8;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #f0f8ff;
  border-bottom: 1px solid #d6e6f2;

  button {
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #0077b6;
  }

  button:hover {
    color: #00b4d8;
  }
`;
