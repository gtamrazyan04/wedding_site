import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Layout>
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
                <Link to="/venue">Ablauf</Link>
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
      <MainContent isOpen={isOpen}>{children}</MainContent>
    </Layout>
  );
};

export default Sidebar;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SidebarContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 2px solid #d6e6f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: height 0.3s ease;

  @media (min-width: 768px) {
    width: ${(props) => (props.isOpen ? "180px" : "0")};
    height: 100vh;
    border-right: 2px solid #d6e6f2;
    border-bottom: none;
  }

  ul {
    list-style: none;
    padding: ${(props) => (props.isOpen ? "20px" : "0")};
    padding-bottom: 0;
    margin: 0;

    li {
      margin-bottom: ${(props) => (props.isOpen ? "20px" : "0")};
      opacity: ${(props) => (props.isOpen ? "1" : "0")};
      transition: opacity 0.3s ease;

      a {
        text-decoration: none;
        font-weight: bold;
        color: #0077b6;
      }

      a:hover {
        color: #75c0d5;
      }
    }
  }
`;

const MenuIcon = styled.div`
  position: fixed;
  top: 10px;
  left: 10px; /* Default position for larger screens */
  font-size: 30px;
  cursor: pointer;
  color: #0077b6;
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 4px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(-20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
    background-color: #f0f8ff;
  }

  @media (max-width: 768px) {
    left: auto; /* Remove the default left position */
    right: 10px; /* Move it to the right */
    transition: none; /* Disable transition for mobile */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
  background-color: #f0f8ff;

  button {
    font-size: 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #0077b6;
  }

  button:hover {
    color: #75c0d5;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  margin-top: ${(props) => (props.isOpen ? "200px" : "50px")};
  padding: 20px;
  transition: margin-top 0.3s ease;

  @media (min-width: 768px) {
    margin-left: ${(props) => (props.isOpen ? "200px" : "0")};
    margin-top: 0;
  }
`;
