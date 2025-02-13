import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SeeAllApparel = () => {
  const [apparelData, setapparelData] = useState([]);

  useEffect(() => {
    axios
      .get("https://clear-pear-tuna.cyclic.app/gear/apparel/?size=18")
      .then((res) => {
        setapparelData(res.data.gear);
      });
  }, []);

  return (
    <>
      {/* All Products */}
      <div id="apparel-items-part" style={{ "margin-top": "5em" }}>
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">All Products</p>
        </div>
        <div id="all-card-container" style={{ "margin-top": "2em" }}>
          {apparelData.map((curElem) => {
            return (
              <Link to={`/gear/${curElem._id}`}>
                <div key={curElem._id}>
                  <div id="apparel-items-content">
                    <div id="apparel-item-card">
                      <div id="apparel-item-img-part">
                        <img src={curElem.image} alt="" />
                      </div>
                      <div
                        id="apparel-item-title-part"
                        style={{ "margin-bottom": "5em" }}
                      >
                        <p>{curElem.name}</p>
                        <p>€ {curElem.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeeAllApparel;
