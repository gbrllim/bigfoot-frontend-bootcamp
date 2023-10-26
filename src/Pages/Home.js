import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";

const Home = () => {
  const [sightingsList, setSightingsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/sightings/`)
      .then((response) => {
        console.log("Pulled Data: ", response.data);
        // Assuming response.data is an array with at least one item
        setSightingsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Bigfoot Sightings</h1>
      <p>List of all sightings</p>
      {sightingsList.map((reportNumber, index) => (
        <p key={index}>{reportNumber}</p>
      ))}
    </div>
  );
};

export default Home;
