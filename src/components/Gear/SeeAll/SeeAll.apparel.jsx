import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SeeAllApparel = () => {
  const [apparelData, setapparelData] = useState([]);

  useEffect(() => {
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/apparel/?size=18")
      .then((res) => {
        setapparelData(res.data.gear);
      });
  }, []);

  return (
    <>
      <div id="header-part">
        <p>Header</p>
      </div>
      {/* All Products */}
      <div id="apparel-items-part"  style={{ "margin-top": "5em" }}>
        <div id="apparel-heading-part">
          <p class="apparel-heading-rohit">
            All Products
          </p>
          <p>SEE ALL</p>
        </div>
        <div id="all-card-container" style={{ "margin-top": "2em" }}>
          {apparelData.map((curElem) => {
            return (
              <div>
                <div id="apparel-items-content">
                  <div id="apparel-item-card">
                    <div id="apparel-item-img-part">
                      <img src={curElem.image} alt="" />
                    </div>
                    <div id="apparel-item-title-part" style={{ "margin-bottom": "5em" }}>
                      <p>{curElem.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeeAllApparel;
