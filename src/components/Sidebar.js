import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoSrc from "./logo512.png";

const Sidebar = ({ children }) => {
  return (
    <Layout>
      <Header>
        <LogoLink to="/">
          <Logo src={logoSrc} alt="Logo" />
        </LogoLink>

        <NavLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </NavLinks>
      </Header>
      <MainContent>{children}</MainContent>
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

const Header = styled.div`
  display: flex;
  justify-content: space-between; /* Horizontal layout for phones */
  align-items: center;
  background-color: #ffffff;
  padding: 15px 20px;
  border-bottom: 2px solid #d6e6f2;
  z-index: 10;
  @media (max-width: 768px) {
    padding-right: 40px;
  }

  @media (min-width: 768px) {
    flex-direction: column; /* Vertical layout for laptops */
    align-items: center; /* Center logo and links horizontally */
    justify-content: flex-start;
    padding: 20px;
    border-right: 2px dotted #adbbc2;
    height: 100vh; /* Full height for sidebar */
    width: 120px; /* Fixed sidebar width */
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: none;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center; /* Center logo horizontally */
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 40px; /* Add space between logo and links */
  }
`;

const Logo = styled.img`
  width: 100px; /* Adjust size as needed */
  height: auto;

  @media (max-width: 768px) {
    height: 60px;
    width: auto;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px; /* Horizontal gap for phones */
  margin: 0;
  padding: 0;

  li {
    a {
      text-decoration: none;
      font-weight: bold;
      color: #3b566b;

      font-size: 22px;
      line-height: 2rem;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 1rem;
      }

      &:hover {
        color: #adbbc2;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: column; /* Vertical links for laptops */
    gap: 10px; /* Reduce gap between links for sidebar */
    margin: 0;
    padding: 0;
    align-items: center; /* Center align links */
  }
`;

const MainContent = styled.div`
  flex-grow: 1;

  @media (min-width: 768px) {
    margin-left: 120px; /* Sidebar width */
    margin-top: 0;
  }
`;
