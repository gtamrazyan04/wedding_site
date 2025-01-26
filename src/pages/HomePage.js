import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import oGImage from "./assets/o_g.jpg";
import back from "./assets/hintergrundbild.png";

const Homepage = () => {
  return (
    <PageContainer>
      <Background />

      <MainContent>
        {/* Intro Section */}
        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="intro-section"
        >
          <Title>Willkommen zu unserer Hochzeit!</Title>
          <Date> Am 2. August 2025 in Armenien</Date>
          <Section>
            <p>
              Wir, <strong>Oliver & Gohar</strong>, freuen uns riesig, dass ihr
              Teil unseres besonderen Tages sein möchtet. Auf dieser Website
              findet ihr die wichtigsten Informationen und bereits Antworten zu
              einigen Fragen. Die Website wird laufend aktualisiert.{" "}
              <strong>O & G</strong> werden einige Wochen vor und nach der
              Hochzeit bereits in Armenien sein. Einige Gäste planen auch, ihre
              Reise mit touristischen Ferien zu verbinden und früher anzureisen
              oder später abzureisen.
            </p>
          </Section>

          <Section>
            <h2>Locations</h2>
            <p>
              Überlegt euch, ob ihr eure Reise mit einer Erkundung Armeniens
              verbinden möchtet. Wir haben eine Auswahl an{" "}
              <a href="/locations">Sehenswürdigkeiten und Restaurants</a>{" "}
              zusammengestellt, die wir euch empfehlen können. Einige davon
              werden noch als <strong>Must-See</strong> markiert, damit ihr
              nichts vom wichtigsten verpasst! 🌟
            </p>
          </Section>

          <Section>
            <h2>FAQ</h2>
            <p>
              Die Antworten zu den wichtigsten Fragen bezüglich der Reise, der
              Unterkunft und dem Fest findet ihr auf unserer{" "}
              <a href="/faq">FAQ-Seite</a>. Dort gibt es auch Kontakte für
              weitere Fragen.
            </p>
          </Section>
          <Section>
            <h2>Dress Code</h2>
            <p>Elegant & festlich ☺️</p>
          </Section>
        </motion.div>

        {/* Image Section
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="image-section"
        >
          <ProfileImage src={oGImage} alt="Oliver und Gohar" />
        </motion.div> */}
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
  width: 66%;
  max-width: 1200px;
  z-index: 1;
  text-align: justify;
  padding-left: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0077b6;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 2rem;
    text-align: left;
  }
`;

const Date = styled.h2`
  font-size: 1.5rem;
  color: #0077b6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: justify;

  h2 {
    font-size: 1.8rem;
    color: #0077b6;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${back}) no-repeat center center;
  background-size: cover;
  opacity: 0.9;
  z-index: -1;
  @media (max-width: 768px) {
    margin-top: -600px;
    background-size: contain;
  }
`;
