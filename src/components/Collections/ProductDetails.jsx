import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Gear/Product/Product.css";
import doPayment from "../../utilities/payment";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [apparelData, setapparelData] = useState([]);
  let storeCart = JSON.parse(localStorage.getItem("store_cart")) || [];
  // console.log(storeCart)
  useEffect(() => {
    axios.get(`https://clear-pear-tuna.cyclic.app/coll/${id}`).then((res) => {
      setproduct(res.data);
    });
    axios.get("https://clear-pear-tuna.cyclic.app/gear?page=2").then((res) => {
      setapparelData(res.data.gear);
    });
  }, []);

  const navigate = useNavigate();

  const buyNow = () => {
    const { nickName, profileImage } =
      JSON.parse(localStorage.getItem("userData")) ||
      localStorage.setItem(
        "userData",
        JSON.stringify({
          profileImage: "https://a.rsg.sc/n/shreyas1000",
          nickName: "none",
        })
      );

    if (nickName === "none") {
      navigate("/signin");
    } else {
      let disc = "payment for" + " " + product.name;
      let amount = product.price * 84;
      amount = amount.toFixed(2);
      doPayment(amount, disc);
    }
  };

  return (
    <>
      <div id="product-part">
        <div id="product-left-part">
          <div id="main-img-part">
            <img src={product.image} alt="" />
          </div>
          <div id="other-img-part">
            {product.allimages &&
              product.allimages.map((el) => (
                <img src={el} alt="images" key={el} />
              ))}
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
            <div
              id="buy-btn"
              onClick={() => {
                buyNow();
              }}
            >
              Buy Now
            </div>
            <div id="add-btn">
              <button
                onClick={() => {
                  let status = false;
                  storeCart.map((el) => {
                    if (el._id === product._id) {
                      status = true;
                    }
                  });
                  if (status) {
                    alert("Product is Already in cart");
                    return;
                  } else {
                    product.qty = 1;
                    storeCart.push(product);
                    localStorage.setItem(
                      "store_cart",
                      JSON.stringify(storeCart)
                    );
                    alert("Product is Added in cart successfully");
                  }
                }}
              >
                Add to cart
              </button>
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
              <Link to={`/gear/${curElem._id}`}>
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
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
