import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [apparelData, setapparelData] = useState([]);
  let storeCart=JSON.parse(localStorage.getItem("store_cart"))||[];
  useEffect(() => {
    axios
      .get(`https://obscure-citadel-15133.herokuapp.com/gear/${id}`)
      .then((res) => {
        setproduct(res.data);
      });
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/apparel")
      .then((res) => {
        setapparelData(res.data.gear);
      });
  }, []);

  return (
    <>
      <div id="product-part">
        <div id="product-left-part">
          <div id="main-img-part">
            <img src={product.image} alt="" />
          </div>
          <div id="other-img-part">
            {/* {product.allimages.map((el) => (
                  <img src={el} alt="images" />
                ))} */}
          </div>
        </div>
        <div id="product-right-part">
          <div id="prod-head">
            <p>{product.name}</p>
          </div>
          <div id="prod-desc">
            <p>{product.description}</p>
          </div>
          <div id="prod-price">
            <p>€{product.price}</p>
          </div>
          <div id="user-gender">
            <p>Select Gender</p>
          </div>
          <div id="user-gender-btn">
            <div id="mens-btn">Men's</div>
            <div id="womens-btn">Women's</div>
          </div>
          <div id="user-size">
            <p>Select Size</p>
          </div>
          <div id="user-size-btn">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
            <span>XXXL</span>
          </div>
          <div id="buy-add-btn">
            <div id="buy-btn">
              <button>Buy Now</button>
            </div>
            <div id="add-btn">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p class="apparel-heading-rohit">Realted Products</p>
        </div>
        <div id="all-card-container">
          {apparelData.map((curElem) => {
            return (
              <div key={curElem._id}>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
