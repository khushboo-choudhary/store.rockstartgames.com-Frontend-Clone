import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Hero from "../Hero/Hero";

function AllCard() {
  const [apparelData, setapparelData] = useState([]);
  const [capsData, setcapsData] = useState([]);
  const [posterData, setposterData] = useState([]);
  const [CollectiblesData, setCollectiblesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/apparel?page=2")
      .then((res) => {
        setapparelData(res.data.gear);
      });
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/caps")
      .then((res) => {
        setcapsData(res.data.gear);
      });
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/posters")
      .then((res) => {
        setposterData(res.data.gear);
      });
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/collectibles")
      .then((res) => {
        setCollectiblesData(res.data.gear);
      });
  }, []);

  return (
    <>
      <Hero />
      {/* Apparel Part */}
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">Apparel</p>
          <p id="see-all-btn">
            <Link to={`/seeall/apparel`}>
              <button> SEE ALL </button>
            </Link>
          </p>
        </div>
        <div id="all-card-container">
          {apparelData.map((curElem) => {
            return (
              <div key={curElem._id}>
                <Link to={`/gear/${curElem._id}`}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div id="name-price-part">
                        <div id="apparel-item-title-part">
                          <p>{curElem.name}</p>
                        </div>
                        <div id="apparel-item-price-part">
                          <p>€{curElem.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caps Part */}
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">Caps</p>
        </div>
        <div id="all-card-container">
          {capsData.map((curElem) => {
            return (
              <div key={curElem._id}>
                <Link to={`/gear/${curElem._id}`}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div id="name-price-part">
                        <div id="apparel-item-title-part">
                          <p>{curElem.name}</p>
                        </div>
                        <div id="apparel-item-price-part">
                          <p>€{curElem.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Posters Part */}
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">Posters</p>
          <p id="see-all-btn">
            <Link to={`/seeall/posters`}>
              <button> SEE ALL </button>
            </Link>
          </p>
        </div>
        <div id="all-card-container">
          {posterData.map((curElem) => {
            return (
              <div key={curElem._id}>
                <Link to={`/gear/${curElem._id}`}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div id="name-price-part">
                        <div id="apparel-item-title-part">
                          <p>{curElem.name}</p>
                        </div>
                        <div id="apparel-item-price-part">
                          <p>€{curElem.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collectibles Part */}
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">Collectibles</p>
          <p id="see-all-btn">
            <Link to={`/seeall/collectibles`}>
              <button> SEE ALL </button>
            </Link>
          </p>
        </div>
        <div id="all-card-container">
          {CollectiblesData.map((curElem) => {
            return (
              <div key={curElem._id}>
                <Link to={`/gear/${curElem._id}`}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div id="name-price-part">
                        <div id="apparel-item-title-part">
                          <p>{curElem.name}</p>
                        </div>
                        <div id="apparel-item-price-part">
                          <p>€{curElem.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllCard;
