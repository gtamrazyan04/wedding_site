import React from "react";
import styled from "styled-components";
import back from "./assets/hintergrundbild_ohne.png";

const FAQPage = () => {
  return (
    <PageContainer>
      <Background />
      <MainContent>
        <h1>FAQs</h1>
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
              . Am besten wartet ihr noch mit dem Buchen, bis die Lokalität für
              die Hochzeit bekannt gegeben wird.
            </p>
          </li>

          <li>
            <strong>🚕 Welche Transportmittel sollte ich benutzen?</strong>
            <p>
              In Armenien gibt es, ähnlich wie in der Schweiz, öffentlichen
              Verkehr, vor allem Busse. Allerdings fahren diese nicht pünktlich
              und oft ohne festen Fahrplan. Wir empfehlen euch, die{" "}
              <a
                href="https://yandex.com/support/yandex-app-android-alice/en/app/install"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yandex App
              </a>{" "}
              herunterzuladen und mit dem Taxi zu reisen, da die Preise dort
              sehr günstig sind. Über die App könnt ihr Taxis direkt bestellen
              und seht den Fahrpreis im Voraus. In der Regel kommt ein Taxi
              innerhalb weniger Minuten, und ihr könnt den aktuellen Standort
              eures Taxis live verfolgen, während ihr darauf wartet.
            </p>
          </li>
          <li>
            <strong>🛬 Wie komme ich vom Flughafen in meine Unterkunft?</strong>
            <p>
              Ihr könnt uns kontaktieren mit eurer Ankunftszeit und wir schauen,
              ob wir etwas organisieren können. Ansonsten könnt ihr vor Ort
              direkt ein Taxi mit der{" "}
              <a
                href="https://yandex.com/support/yandex-app-android-alice/en/app/install"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yandex App
              </a>{" "}
              bestellen.
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
              Laut Oliver ist das Essen in Armenien sehr nahe bei unserer Küche
              (auch nicht speziell scharf).
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
              Wenn ihr am Flughafen in Yerevan ankommt, werdet ihr zu jeder Zeit
              vor dem Ausgang bei der Gepäckausgabe einige Stände sehen, wo
              SIM-Karten verkauft werden. Wir haben gute Erfahrungen mit{" "}
              <a
                href="https://www.viva.am/en/individual-customers/tariff-plans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vivacell
              </a>{" "}
              gemacht. Die Preise sind sehr günstig und es lohnt sich zur
              Sicherheit immer eine Netzwerkverbindung zu haben.
            </p>
          </li>
          <li>
            <strong>💵 Mit welcher Währung bezahlt man in Armenien?</strong>
            <p>
              Mit Armenischen Dram (AMD). Am besten wechselt ihr das Geld vor
              Ort in einer Bank.{" "}
              <a
                href="https://www.rate.am/en/armenian-dram-exchange-rates/banks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hier
              </a>{" "}
              findet ihr jeweils die aktuellen Kurse pro Bank, und könnt euch so
              für die Bank mit dem besten Kurs entscheiden. In den meisten
              Geschäften kann man aber auch mit einer Kreditkarte zahlen.
            </p>
          </li>
          <li>
            <strong>💵 Wie sind die Preise in Armenien?</strong>
            <p>
              Im Vergleich zu der Schweiz sind die Preise in Armenien günstig -
              aber auch nicht in allen Bereichen. Ein Coiffeurtermin lohnt sich
              aber sehr😉, ein Frauenhaarschnitt (inkl. Waschen) kostet zwischen
              5 und 10 Franken.
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
              Meist ziemlich heiss. Also bitte genug kurze Kleidung mitnehmen✨.
              Das Nachtleben in Armenien ist sehr aktiv, sehr oft geht man am
              Abend, wenns dann frisch wird noch spazieren etc. Ausserdem sind
              einige Sehenswürdigkeiten sowie Städte (wie z.B. Dilijan) etwas
              höher gelegen und recht frisch. Also eine Jacke und ein Paar lange
              Hosen mitzunehmen schadet nicht 😊.
            </p>
          </li>
          <li>
            <strong>👩‍⚕️ Finde ich dort Apotheken?</strong>
            <p>
              Die meisten Apotheken sind 24h geöffnet und geben oft Medikamente
              auch ohne Rezepte (ohne Gewähr).
            </p>
          </li>
          <li>
            <strong>👍🏻 Wie sieht es aus mit der Sicherheit im Land?</strong>
            <p>
              Armenien ist ein sicheres Land, am Tag wie auch in der Nacht, in
              dem man ohne Bedenken (auch als Frau) alleine unterwegs sein kann.
            </p>
          </li>

          <li>
            <strong>Wen kann ich bei Fragen kontaktieren?</strong>
            <p>
              Bitte kontaktiert Person X unter [Telefonnummer] oder per E-Mail:
              [E-Mail-Adresse].
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

const MainContent = styled.div`
  padding: 40px;

  h1 {
    color: #0077b6;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    font-size: 1.7rem;
    margin-bottom: 30px;
    margin-top: 50px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 20px;
    background-color: #f9f9f9;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  strong {
    display: block;
    color: #0077b6;
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
    color: #0077b6;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    color: #00b4d8;
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
