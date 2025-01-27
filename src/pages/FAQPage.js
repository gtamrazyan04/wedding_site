import React, { useEffect, useState } from "react";
import styled from "styled-components";
import back from "./assets/hintergrundbild_ohne.png";

const FAQPage = () => {
  const [yandexLink, setYandexLink] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS-Gerät erkannt
      setYandexLink(
        "https://apps.apple.com/ch/app/yandex-go-taxi-food-delivery/id472650686"
      );
    } else if (/android/i.test(userAgent)) {
      // Android-Gerät erkannt
      setYandexLink(
        "https://play.google.com/store/apps/details?id=ru.yandex.taxi"
      );
    } else {
      // Fallback-Link
      setYandexLink(
        "https://yandex.com/support/yandex-app-android-alice/en/app/install"
      );
    }
  }, []);

  return (
    <PageContainer>
      <Background />
      <MainContent>
        <Title>FAQ</Title>
        <h2>Transport & Unterkunft</h2>
        <ul>
          <li>
            <strong>🇨🇭 Brauche ich als Schweizer ein Visum?</strong>
            <p>Nein.</p>
          </li>
          <li>
            <strong>👩‍💻 Wo buche ich am besten eine Unterkunft?</strong>
            <p>
              Wir empfehlen{" "}
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booking.com
              </a>{" "}
              oder{" "}
              <a
                href="https://www.airbnb.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Airbnb
              </a>
              . Am besten bucht Ihr etwas in der Hauptstadt Yerevan. Dort seid
              Ihr am zentralsten und erreicht das meiste in kürzester Zeit.
            </p>
          </li>

          <li>
            <strong>🚕 Welche Transportmittel sollte ich benutzen?</strong>
            <p>
              In Armenien gibt es, ähnlich wie in der Schweiz, öffentlichen
              Verkehr, vor allem Busse. Allerdings fahren diese nicht pünktlich
              und oft ohne festen Fahrplan. Wir empfehlen Euch, die{" "}
              <a href={yandexLink} target="_blank" rel="noopener noreferrer">
                Yandex App
              </a>{" "}
              herunterzuladen und mit dem Taxi zu reisen, da die Preise dort
              sehr günstig sind. Über die App könnt Ihr Taxis direkt bestellen
              und seht den Fahrpreis im Voraus. In der Regel kommt ein Taxi
              innerhalb weniger Minuten, und Ihr könnt den aktuellen Standort
              Eures Taxis live verfolgen, während Ihr darauf wartet.
            </p>
          </li>
          <li>
            <strong>🛬 Wie komme ich vom Flughafen in meine Unterkunft?</strong>
            <p>
              Ihr könnt uns kontaktieren mit Eurer Ankunftszeit und wir schauen,
              ob wir allenfalls etwas organisieren können. Ansonsten könnt Ihr
              vor Ort direkt ein Taxi mit der{" "}
              <a href={yandexLink} target="_blank" rel="noopener noreferrer">
                Yandex App
              </a>{" "}
              bestellen. Es gibt eine offene WLAN-Verbindung am Flughafen.
            </p>
          </li>
        </ul>
        <h2>Essen, Trinken & Kultur</h2>
        <ul>
          <li>
            <strong>
              🥘 Wie ist das Essen im Vergleich zur Mitteleuropäischen Küche?
            </strong>
            <p>
              Laut Oliver ist armenisches Essen sehr nahe bei der Euch bekannten
              Küche (auch nicht speziell scharf). Natürlich mit neuen
              Spezialitäten. 😉
            </p>
          </li>
          <li>
            <strong>💧 Kann man Wasser vom Hahn trinken?</strong>
            <p>
              Ja! Meist hat es auf den Strassen auch Trinkbrunnen mit frischem
              Wasser.
            </p>
          </li>
          <li>
            <strong>
              Gibt es kulturelle Regeln oder Besonderheiten, die man beachten
              sollte?
            </strong>
            <p>Nein.</p>
          </li>
          <li>
            <strong>🗯️ Mit welcher Sprache kann man sich verständigen?</strong>
            <p>
              Heutzutage können sehr viele Armenier Englisch und teilweise auch
              Französisch sprechen.
            </p>
          </li>
        </ul>
        <h2>SIM-Karte, Währung, Preise</h2>
        <ul>
          <li>
            <strong>
              📶 Gibt es lokale SIM-Karten oder mobile Datentarife?
            </strong>
            <p>
              Wenn Ihr am Flughafen in Yerevan ankommt, werdet Ihr zu jeder Zeit
              vor dem Ausgang bei der Gepäckausgabe einige Stände sehen, wo
              SIM-Karten verkauft werden. Wir haben gute Erfahrungen mit{" "}
              <a
                href="https://www.viva.am/en/individual-customers/tariff-plans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivacell
              </a>{" "}
              gemacht. Die Preise sind sehr günstig (siehe{" "}
              <a
                href="https://www.viva.am/en/individual-customers/tariff-plans"
                target="_blank"
                rel="noopener noreferrer"
              >
                hier
              </a>
              ) und es lohnt sich zur Sicherheit immer eine Netzwerkverbindung
              zu haben.
            </p>
          </li>
          <li>
            <strong>💵 Mit welcher Währung bezahlt man in Armenien?</strong>
            <p>
              Mit Armenischen Dram (AMD). Am besten wechselt Ihr das Geld vor
              Ort in einer Bank.{" "}
              <a
                href="https://www.rate.am/en/armenian-dram-exchange-rates/banks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hier
              </a>{" "}
              findet Ihr jeweils die aktuellen Kurse pro Bank, und könnt Euch so
              für die Bank mit dem besten Kurs entscheiden. In den meisten
              Geschäften kann man aber auch mit einer Kreditkarte zahlen.
            </p>
          </li>
          <li>
            <strong>💵 Wie sind die Preise in Armenien?</strong>
            <p>
              Im Vergleich zu der Schweiz sind die Preise in Armenien günstig -
              aber auch nicht in allen Bereichen. Geheimtipp: Ein Coiffeurtermin
              lohnt sich sehr😉, ein Frauenhaarschnitt (inkl. Waschen) kostet
              zwischen 5 und 10 Franken.
            </p>
          </li>
          <li>
            <strong>💵 Gibt man generell Trinkgeld?</strong>
            <p>So etwa wie in der Schweiz. Keine speziellen Regelungen.</p>
          </li>
        </ul>

        <h2>Allgemeines</h2>
        <ul>
          <li>
            <strong>☀️ Wie ist das Wetter in Armenien im August?</strong>
            <p>
              Im August meist ziemlich heiss. Also bitte genug kurze Kleidung
              mitnehmen✨. Das Nachtleben in Armenien ist sehr aktiv, sehr oft
              geht man am Abend, wenns dann frisch wird noch spazieren etc.
              Ausserdem sind einige Sehenswürdigkeiten sowie Städte (wie z.B.
              Dilijan) etwas höher gelegen und recht frisch. Also eine Jacke und
              ein Paar lange Hosen mitzunehmen schadet nicht 😊.
            </p>
          </li>
          <li>
            <strong>👩‍⚕️ Finde ich dort Apotheken?</strong>
            <p>Ja, die meisten Apotheken sind sogar 24h geöffnet.</p>
          </li>
          <li>
            <strong>👍🏻 Wie sieht es aus mit der Sicherheit im Land?</strong>
            <p>
              Armenien ist ein sicheres Land, am Tag wie auch in der Nacht, in
              dem man ohne Bedenken (auch als Frau) alleine unterwegs sein kann.
            </p>
          </li>
          <li>
            <strong>🚨 Notfallnummern</strong>
            <p> - 101 Feuerwehr</p>
            <p> - 102 Polizei </p>
            <p> - 103 Rettungsdienst </p>
            <p> - 911 Allgemeine landesweite Notrufnummer </p>
          </li>
          <li>
            <strong>💡 Randbemerkungen</strong>
            <p>Impfungen sind keine nötig.</p>
            <p>
              Infos zu Steckdosen sind{" "}
              <a
                href="https://www.welt-steckdosen.de/ch/armenien/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hier
              </a>{" "}
              zu finden.
            </p>
            <p>Telefonvorwahl in Armenien: +374.</p>
            <p>
              Zeitverschiebung: aktuell +3h Unterschied zur Schweiz, im Sommer
              nur +2h.
            </p>
          </li>
        </ul>
      </MainContent>
    </PageContainer>
  );
};

export default FAQPage;

const PageContainer = styled.div`
  display: flex;
  background-size: cover; /* Adjust the image to cover the entire area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Avoid repeating the image */
  background-attachment: fixed; /* Keep the background fixed during scrolling */
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #3b566b;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const MainContent = styled.div`
  padding: 0px 100px;

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 30px;
    margin-top: 50px;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 20px;
    background-color: #f6f8f9;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  strong {
    display: block;
    color: #3b566b;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    color: #495057;
    line-height: 1.5;
    font-size: 18px;
  }

  a {
    color: #3b566b;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: #b0bac0;
    text-decoration: underline;
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
