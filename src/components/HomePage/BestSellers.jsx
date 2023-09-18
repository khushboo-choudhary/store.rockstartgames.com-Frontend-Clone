import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from "../MiniCompo/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewArrivalDiv = styled.div`
  width: 85%;
  /* border: 1px solid white; */
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://clear-pear-tuna.cyclic.app/gear/collectibles")
      .then((res) => {
        // console.log(res.data.gear)
        setProducts(res.data.gear);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <NewArrivalDiv>
        <h1
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Best Sellers
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={99999999999999999}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        >
          {products.map((product) => {
            return (
              <Link to={`/gear/${product._id}`}>
                <MyCard
                  key={product._id}
                  img={product.image}
                  title={product.name}
                  price={"€" + product.price}
                />
              </Link>
            );
          })}
        </Carousel>
      </NewArrivalDiv>
    </div>
  );
};

export { BestSellers };
