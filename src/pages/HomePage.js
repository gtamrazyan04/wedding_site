import React from "react";
import styled from "styled-components";
// import oGImage from "./assets/o_g.jpg";
import back from "./assets/hintergrundbild.png";

const Homepage = () => {
  return (
    <PageContainer>
      <Background />

      <MainContent>
        {/* Intro Section */}
        <div className="intro-section">
          <Title>Willkommen zu unserer Hochzeit!</Title>
          <Date> Am 2. August 2025 in Armenien</Date>
          <Section>
            <p>
              Wir, <strong>Oliver & Gohar</strong>, freuen uns riesig, dass Ihr
              Teil unseres besonderen Tages sein möchtet. Auf dieser Website
              findet Ihr die wichtigsten Informationen und bereits Antworten zu
              einigen Fragen. Die Website wird laufend aktualisiert.
            </p>
            <p>
              <strong> O & G</strong> werden einige Wochen vor und nach der
              Hochzeit in Armenien sein. Einige Gäste planen auch, Ihre Reise
              mit touristischen Ferien zu verbinden und früher anzureisen
              und/oder später abzureisen.
            </p>
          </Section>

          <Section>
            <h2>Locations</h2>
            <p>
              Überlegt Euch, ob Ihr Eure Reise mit einer Erkundung Armeniens
              verbinden möchtet. Wir haben eine Auswahl an Sehenswürdigkeiten
              und Restaurants zusammengestellt, die wir Euch empfehlen können.
              Einige davon werden noch als <strong>Must-See</strong> markiert,
              damit Ihr nichts vom wichtigsten verpasst!
            </p>
          </Section>

          <Section>
            <h2>FAQ</h2>
            <p>
              Die Antworten zu den wichtigsten Fragen bezüglich der Reise, der
              Unterkunft und dem Fest findet Ihr auf unserer FAQ-Seite. Dort
              gibt es auch Kontakte für weitere Fragen.
            </p>
          </Section>
          <Section>
            <h2>Hochzeitstag</h2>
            <p>
              Der detaillierte Tagesablauf am 2. August ist noch nicht endgültig
              fixiert. Voraussichtlich sind die Kirche und das Restaurant etwas
              weg von der Hauptstadt Yerevan. Trotzdem empfehlen wir Unseren
              Gästen eine Unterkunft in Yerevan zu buchen, da dies am
              praktischsten ist. Von Yerevan werden alle Hochzeits-Gäste
              abgeholt und zur Kirche und danach zum Restaurant gefahren. Auch
              für die Rückfahrt am Abend wird gesorgt.
            </p>
            <p>Dresscode: Elegant & festlich ☺️</p>
          </Section>
        </div>
      </MainContent>
    </PageContainer>
  );
};

export default Homepage;

// Styled Components
const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;

  max-width: 1200px;
  z-index: 1;
  text-align: justify;
  padding-left: 100px;
  padding-right: 35%;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 30px 30px 30px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3b566b;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 2rem;
    text-align: left;
    margin-bottom: 30px;
  }
`;

const Date = styled.h2`
  font-size: 1.5rem;
  color: #adbbc2;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: justify;

  h2 {
    font-size: 1.8rem;
    color: #3b566b;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
  }

  a {
    color: #0077b6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #00b4d8;
      text-decoration: underline;
    }
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
  opacity: 0.9;
  z-index: -1;
  @media (max-width: 768px) {
    position: absolute;
    background-position: top; /* Moves the background up by 50px */
    background-size: contain;
  }
`;
