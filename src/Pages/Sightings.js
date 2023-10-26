import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants";

const Sightings = () => {
  const [data, setData] = useState({
    year: "",
    county: "",
    reportNumber: "",
  });
  const { sightingIndex } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/sightings/${sightingIndex}`)
      .then((response) => {
        console.log("Pulled Data: ", response.data);
        // Assuming response.data is an array with at least one item
        setData({
          year: response.data.YEAR,
          county: response.data.COUNTY,
          reportNumber: response.data.REPORT_NUMBER,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sightingIndex]);

  const nextSighting = () => {
    const newIndex = parseInt(sightingIndex) + 1;
    navigate(`/sightings/${newIndex}`);
  };
  const previousSighting = () => {
    const newIndex = parseInt(sightingIndex) - 1;
    navigate(`/sightings/${newIndex}`);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-xl">Here's your sighting</h1>
      <p>Year: {data.year}</p>
      <p>County: {data.county}</p>
      <p>Report Number: {data.reportNumber}</p>
      <div>
        <button onClick={previousSighting}>Previous</button>
        <button onClick={nextSighting}>Next</button>
      </div>
    </div>
  );
};

export default Sightings;
