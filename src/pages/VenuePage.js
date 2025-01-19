import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/hintergrund.jpg"; // Import the image

const VenuePage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <h1>Wedding Venue</h1>
        <p>Still to be determined 😇</p>{" "}
      </MainContent>
    </PageContainer>
  );
};

export default VenuePage;

const PageContainer = styled.div`
  display: flex;
  background-size: cover; /* Adjust the image to cover the entire area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Avoid repeating the image */
  background-attachment: fixed; /* Keep the background fixed during scrolling */
  min-height: 100vh;
`;

const MainContent = styled.div`
  margin-left: 220px;
  padding: 20px;
  flex-grow: 1;

  h1 {
    color: #0077b6;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
`;
