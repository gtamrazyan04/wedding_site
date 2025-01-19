import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGlobe,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const locations = [
  {
    type: "Restaurant",
    name: "Sherep",
    image: "../assets/sherep.jpeg",
    website:
      "https://www.tripadvisor.co.uk/Restaurant_Review-g293932-d13157535-Reviews-Sherep_Restaurant-Yerevan.html",
    googleMaps:
      "https://www.google.com/maps/search/Sherep,Amiryan+Street+1+(Republic+Square),+0001,+Երևան,+Yerevan/@40.1780684,44.5092502,17z/data=!3m1!4b1",
  },
  {
    type: "Restaurant",
    name: "Seasons",
    image: "../assets/seasons.jpg",
    website:
      "https://www.tripadvisor.in/Restaurant_Review-g293932-d17639706-Reviews-Seasons_Restaurant-Yerevan.html",
    googleMaps:
      "https://www.google.com/maps?saddr&daddr=15,+5+Mesrop+Mashtots+Ave.+At+Seasons+Park,+Yerevan+0002+Armenia",
  },
  {
    type: "Restaurant",
    name: "Tavern Yerevan",
    image: "../assets/tavern_yerevan.jpg",
    website:
      "https://www.tripadvisor.in/Restaurant_Review-g293932-d8800809-Reviews-Tavern_Yerevan-Yerevan.html",
    googleMaps:
      "https://www.google.com/maps?saddr&daddr=91+Teryan+St.,+Yerevan+0009+Armenia",
  },
  {
    type: "Restaurant",
    name: "Lavash",
    image: "../assets/lavash.jpg",
    website:
      "https://www.tripadvisor.in/Restaurant_Review-g293932-d12321316-Reviews-Lavash_Restaurant-Yerevan.html",
    googleMaps:
      "https://www.google.com/maps?saddr&daddr=21+Tumanyan+St,+Yerevan+0001+Armenia",
  },
  {
    type: "Sightseeing",
    name: "Garni Temple",
    image: "../assets/garni.jpg",
    website: "https://en.wikipedia.org/wiki/Temple_of_Garni",
    googleMaps:
      "https://www.google.com/maps/place/Garni+2215,+Armenia/@40.1243108,44.6696154,13z",
  },
  {
    type: "Sightseeing",
    name: "Geghard Monastery",
    image: "../assets/geghard.jpg",
    website: "https://en.wikipedia.org/wiki/Geghard",
    googleMaps:
      "https://www.google.com/maps/place/Geghard,+Armenia/@40.1243108,44.6696154,13z",
  },
];

const LocationsPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [filter, setFilter] = useState("All"); // Filter for locations

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

  // Filter locations based on the filter value
  const filteredLocations = locations.filter((location) =>
    filter === "All" ? true : location.type === filter
  );

  const displayedLocations = showFavorites ? favorites : filteredLocations;

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <h1>Locations</h1>
        <TopBar>
          <Filter>
            <label>Filter: </label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Restaurant">Restaurants</option>
              <option value="Sightseeing">Sightseeing</option>
            </select>
          </Filter>
          <FavoritesButton onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? "Back to All" : "View Favorites"}
            <FontAwesomeIcon
              icon={faHeart}
              color={"white"}
              style={{ marginLeft: "10px" }}
            />
          </FavoritesButton>
        </TopBar>
        <Gallery>
          {displayedLocations.map((location, index) => (
            <LocationCard key={index} type={location.type}>
              <img src={location.image} alt={location.name} />
              <h3>{location.name}</h3>
              <div className="content">
                <div className="buttons">
                  <a
                    href={location.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </a>
                  <a
                    href={location.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                  <button onClick={() => toggleFavorite(location)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color={
                        favorites.some((fav) => fav.name === location.name)
                          ? "red"
                          : "gray"
                      }
                    />
                  </button>
                </div>
              </div>
            </LocationCard>
          ))}
        </Gallery>
      </MainContent>
    </PageContainer>
  );
};

export default LocationsPage;

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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
    font-weight: bold;
    font-size: 24px;
  }

  select {
    margin-left: 10px;
    padding: 20px;
    border: 1px solid #d6e6f2;
    border-radius: 4px;
    background-color: #f8f9fa;
    cursor: pointer;
    font-size: 16px;
  }
`;

const FavoritesButton = styled.button`
  padding: 10px 20px;
  background-color: #0077b6;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #00b4d8;
    transform: scale(1.05);
  }
`;

const LocationCard = styled.div`
  background-color: ${(props) =>
    props.type === "Restaurant" ? "#ffffff" : "#f8f9fa"};
  border: ${(props) =>
    props.type === "Restaurant" ? "1px solid #d6e6f2" : "1px solid #ccc"};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h3 {
    margin: 10px 0;
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => (props.type === "Restaurant" ? "#0077b6" : "#495057")};
  }

  .content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: #495057;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 20px;

    a,
    button {
      text-decoration: none;
      color: #0077b6;
      background-color: #f8f9fa;
      border: 1px solid #d6e6f2;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease, transform 0.2s ease;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a:hover,
    button:hover {
      background-color: #e3f2fd;
      transform: scale(1.1);
    }

    button {
      background: none;
      color: ${(props) =>
        props.favorite ? "red" : "#0077b6"}; /* Heart color changes */
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 30px;
`;
