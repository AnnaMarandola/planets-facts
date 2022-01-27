import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../styles/PlanetPage2.scss";
import "../styles/InnerNavMobile.scss";
import SOURCE from "../images/icon-source.svg";

import InnerNavMobile from "./InnerNavMobile";

const PlanetPage2 = () => {
  const [view, setView] = useState("overview");

  const handleChange = (e) => {
    setView(e.target.value);
  };

  let planetInParams = useParams().planet.substring(1);
  const planetData = data.find((data) => data.name === planetInParams);

  return (
    <div className="planet-page">
      <InnerNavMobile handleChange={handleChange} />
      <div className="top-container">
        <div className="image-container">
          {view === "overview" && (
            <img
              src={planetData.images.overview}
              alt="mercury planet"
              className="planet-image"
            />
          )}
          {view === "structure" && (
            <img
              src={planetData.images.structure}
              alt="mercury structure"
              className="planet-image"
            />
          )}
          {view === "geology" && (
            <div className="geo-picture">
              <img
                src={planetData.images.overview}
                alt="mercury planet"
                className="planet-image"
              />

              <img
                src={planetData.images.geology}
                alt="mercury geology"
                className="geo-img"
              />
            </div>
          )}
        </div>
        <div className="right-container">
          <div className="description-container">
            <h1 className="planet-name">{planetData.name}</h1>
            {view === "overview" && (
              <div className="description">
                <p className="text">{planetData.overview.content}</p>
                <a
                  href={planetData.overview.source}
                  className="navlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text">
                    source: Wikipedia
                    <img src={SOURCE} alt="source" className="source-icon" />
                  </p>
                </a>
              </div>
            )}
            {view === "structure" && (
              <div className="description">
                <p className="text">{planetData.structure.content}</p>
                <a
                  href={planetData.structure.source}
                  className="navlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text">
                    source: Wikipedia{" "}
                    <img src={SOURCE} alt="source" className="source-icon" />
                  </p>
                </a>
              </div>
            )}
            {view === "geology" && (
              <div className="description">
                <p className="text">{planetData.geology.content}</p>
                <a
                  href={planetData.geology.source}
                  className="navlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text">
                    source:<span className="source"> Wikipedia </span>
                    <img src={SOURCE} alt="source" className="source-icon" />
                  </p>
                </a>
              </div>
            )}
          </div>
          <div className="buttons">
            <button className="button" value="overview" onClick={handleChange}>
              <span>01</span> overview
            </button>
            <button className="button" value="structure" onClick={handleChange}>
              <span>02</span> internal structure
            </button>
            <button className="button" value="geology" onClick={handleChange}>
              <span>03</span> surface geology
            </button>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="info">
          <p className="data">rotation time</p>
          <p className="value">{planetData.rotation}</p>
        </div>
        <div className="info">
          <p className="data">revolution time</p>
          <p className="value">{planetData.revolution}</p>
        </div>
        <div className="info">
          <p className="data">radius</p>
          <p className="value">{planetData.radius}</p>
        </div>
        <div className="info">
          <p className="data">average temp.</p>
          <p className="value">{planetData.temperature}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetPage2;
