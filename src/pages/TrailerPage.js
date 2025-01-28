import React from "react";
import styled from "styled-components";
import back from "./assets/hintergrundbild_ohne.png";

const ArmeniaTrailer = () => {
  return (
    <PageContainer>
      <Background />
      <MainContent>
        <Title>Armenien - Ein kurzer Trailer</Title>
        <ContentBox>
          <Description>
            Gohar hat im Jahr 2022 im Rahmen Ihrer Maturaarbeit ein Video über
            Armenien erstellt. Die ersten 15 Minuten des Video geben einen
            kurzen Einblick in die Schönheit und Vielfalt Armeniens und zeigen
            bereits einige touristische Highlights. Die restlichen 15 Minuten
            des Videos sind für Euch weniger relevant (ist verbunden mit der
            Arbeit). Lasst Euch jetzt schon inspirieren!
          </Description>
          <VideoWrapper>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/o2Brsn_TJzQ?enablejsapi=1&modestbranding=1&rel=0"
              title="Armenien-Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </ContentBox>
      </MainContent>
    </PageContainer>
  );
};

export default ArmeniaTrailer;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const MainContent = styled.div`
  max-width: 80%; /* Fixed width for centering */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3b566b;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const ContentBox = styled.div`
  background-color: #f6f8f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 900px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6rem;
  color: #555;
  margin-bottom: 30px;
`;

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${back}) no-repeat center center;
  background-size: cover;
  z-index: -1;
`;
