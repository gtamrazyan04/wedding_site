import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGlobe,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { locations } from "../components/locations";

const LocationsPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (location) => {
    const isFavorite = favorites.some((fav) => fav.name === location.name);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.name !== location.name));
    } else {
      setFavorites([...favorites, location]);
    }
  };
  const [activeMap, setActiveMap] = useState(locations[0].embed); // Default to the first location
  const [isRestaurantVisible, setIsRestaurantVisible] = useState(true);
  const [isSehenswurdigkeitVisible, setIsSehenswurdigkeitVisible] =
    useState(true);
  const restaurants = locations.filter(
    (location) => location.type === "Restaurant"
  );
  const sehenswurdigkeiten = locations.filter(
    (location) => location.type === "Sehenswürdigkeit"
  );
  const toggleRestaurants = () => setIsRestaurantVisible(!isRestaurantVisible);
  const toggleSehenswurdigkeiten = () =>
    setIsSehenswurdigkeitVisible(!isSehenswurdigkeitVisible);

  return (
    <PageContainer>
      {isSidebarVisible && (
        <Sidebar>
          <ToggleSidebarButton onClick={() => setIsSidebarVisible(false)}>
            Liste minimieren
          </ToggleSidebarButton>

          {/* Restaurants Group */}
          <GroupContainer>
            <GroupHeader onClick={toggleRestaurants}>
              <span>{isRestaurantVisible ? "▼" : "▶"}</span> Restaurants
            </GroupHeader>
            {isRestaurantVisible && (
              <LocationList>
                {restaurants.map((location, index) => (
                  <LocationItem
                    key={index}
                    onClick={() => setActiveMap(location.embed)}
                  >
                    <img src={location.image} alt={location.name} />
                    <div className="details">
                      <h3>{location.name}</h3>
                      <p>{location.description}</p>
                      <div className="buttons">
                        <a
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a
                          href={location.googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                        {/* <button
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleFavorite(location);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            color={
                              favorites.some(
                                (fav) => fav.name === location.name
                              )
                                ? "red"
                                : "gray"
                            }
                          />
                        </button> */}
                      </div>
                    </div>
                  </LocationItem>
                ))}
              </LocationList>
            )}
          </GroupContainer>

          {/* Sehenswürdigkeiten Group */}
          <GroupContainer>
            <GroupHeader onClick={toggleSehenswurdigkeiten}>
              <span>{isSehenswurdigkeitVisible ? "▼" : "▶"}</span>{" "}
              Sehenswürdigkeiten
            </GroupHeader>
            {isSehenswurdigkeitVisible && (
              <LocationList>
                {sehenswurdigkeiten.map((location, index) => (
                  <LocationItem
                    key={index}
                    onClick={() => setActiveMap(location.embed)}
                  >
                    <img src={location.image} alt={location.name} />
                    <div className="details">
                      <h3>{location.name}</h3>
                      <p>{location.description}</p>
                      <div className="buttons">
                        <a
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a
                          href={location.googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                        {/* <button
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleFavorite(location);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            color={
                              favorites.some(
                                (fav) => fav.name === location.name
                              )
                                ? "red"
                                : "gray"
                            }
                          />
                        </button> */}
                      </div>
                    </div>
                  </LocationItem>
                ))}
              </LocationList>
            )}
          </GroupContainer>
        </Sidebar>
      )}
      <MainContent>
        {!isSidebarVisible && (
          <OpenButton>
            <ToggleSidebarButton onClick={() => setIsSidebarVisible(true)}>
              Liste anzeigen
            </ToggleSidebarButton>
          </OpenButton>
        )}
        <MapContainer>
          <iframe title="Google Maps" src={activeMap} allowFullScreen />
        </MapContainer>
      </MainContent>
    </PageContainer>
  );
};

export default LocationsPage;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
const GroupContainer = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const GroupHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
  }

  &:hover {
    color: #0077b6;
  }
`;

const Sidebar = styled.div`
  width: 300px;
  background: #f8f9fa;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
const OpenButton = styled.div`
  padding-left: 10px;
  padding-top: 10px;
`;
const MainContent = styled.div`
  flex-grow: 1;
  position: relative;
`;

const ToggleSidebarButton = styled.button`
  background: #0077b6;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  margin-left: 20px;

  &:hover {
    background: #005f8a;
  }
`;

const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LocationItem = styled.div`
  display: flex;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }

  .details {
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      margin: 0;
    }

    p {
      font-size: 0.85rem;
      margin: 5px 0;
      color: #555;
    }

    .buttons {
      display: flex;
      gap: 15px;

      a,
      button {
        font-size: 0.85rem;
        color: #0077b6;
        text-decoration: none;
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
          color: #005f8a;
        }
      }
      button {
        margin-left: 70px;
      }
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
