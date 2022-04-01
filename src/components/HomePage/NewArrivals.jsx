import styled from "styled-components"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from "../MiniCompo/Card";

const NewArrivalDiv = styled.div`
    width: 85%;
    /* border: 1px solid white; */
    margin: auto;
    margin-top: 80px;
    margin-bottom: 80px;
`

const NewArrivals = () => {
  return (
    <div>
      <NewArrivalDiv>
        <h1
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}
        >
          New Arrivals
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={99999999999999999}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
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
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </Carousel>
      </NewArrivalDiv>
    </div>
  );
};

export { NewArrivals };
