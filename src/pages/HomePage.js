import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/hintergrund.jpg"; // Import the image

const HomePage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <h1>Welcome to Our Wedding</h1>
        <p>We are so excited to celebrate our special day with you!</p>
        <p>
          Explore the website to find all the information you need for the
          event.
        </p>
      </MainContent>
    </PageContainer>
  );
};

export default HomePage;

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
  }

  p {
    margin: 10px 0;
    color: #023e8a;
  }
`;
