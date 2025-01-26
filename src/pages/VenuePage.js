import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

const VenuePage = () => {
  const images = [
    "./assets/hall/hall_1.jpg",
    "./assets/hall/hall_2.jpg",
    "./assets/hall/hall_3.jpg",
    "./assets/hall/hall_4.jpg",
    "./assets/hall/hall_5.jpg",
    "./assets/hall/hall_6.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const correctPassword = "geheim"; // Setze hier dein Passwort

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Falsches Passwort!");
    }
  };

  return (
    <>
      <GlobalStyle />
      {isAuthenticated ? (
        <PageContainer>
          <MainContent>
            <h1>Kirche</h1>
            <p>Ist noch in Planung 😇</p>

            <h1>Restaurant</h1>
            <ContentWrapper>
              {/* Diashow */}
              <LeftPanel>
                <ImageContainer>
                  <img src={images[currentImageIndex]} alt="Hall" />
                </ImageContainer>
              </LeftPanel>

              {/* Google Maps Embed */}
              <RightPanel>
                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.041800853519!2d44.64187537624649!3d40.407924756174864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4040250cb4f6c25d%3A0x60f98dfd7dc435ee!2sGinats!5e0!3m2!1sen!2sch!4v1737903393295!5m2!1sen!2sch"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                  ></iframe>
                </MapContainer>
              </RightPanel>
            </ContentWrapper>
          </MainContent>
        </PageContainer>
      ) : (
        <LoginContainer>
          <h1>Passwortgeschützte Seite</h1>
          <input
            type="password"
            placeholder="Passwort eingeben"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Einloggen</button>
        </LoginContainer>
      )}
    </>
  );
};

export default VenuePage;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  padding: 20px;
  h1 {
    color: #0077b6;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;

  h1 {
    color: #0077b6;
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 300px;
  }

  button {
    padding: 10px 20px;
    background-color: #0077b6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #005f8a;
    }
  }
`;
