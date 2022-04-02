import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from "../MiniCompo/Card";
import { v4 as uuidv4 } from "uuid";

const NewArrivalDiv = styled.div`
  width: 85%;
  /* border: 1px solid white; */
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Screenshots = ({ ss }) => {
  return (
    <div>
      <NewArrivalDiv>
        <h1
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Screenshots
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
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        >
            {ss.map((ss) => {
                return (
                    <MyCard
                    key={uuidv4()}
                    img={ss}
                    height={"125px"}
                    />
                );
            })}
        </Carousel>
      </NewArrivalDiv>
    </div>
  );
};

// const EmbeddedVideo = ({ vid }) => {
//   return (
//     <iframe
//       width="420"
//       height="315"
//       src="https://www.youtube.com/embed/eI4an8aSsgw"
//     ></iframe>
//   );
// };
export { Screenshots };
