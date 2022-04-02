import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";

const HeroImg = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "1px solid white",
  height: "50px",
  width: "150px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "@media (max-width: 400px)": {
    width: "100%",
    height: "50px",
  },
}));

export const KeyFeatures = ({ keyfeaImg, keyfeaDesc, keyfeaTitle, ind }) => {

    const grid1md = ind%2 == 0 ? 1 : 2;
    const grid2md = ind%2 == 0 ? 2 : 1;
    const bg = ind%2 == 0 ? "black" : "transparent";
  return (
    <Grid container spacing={0} style={{backgroundColor:bg}}>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        style={{
          backgroundColor: "transparent",
          padding: "30px",
        }}
        order={{ md: grid1md, sm: 2, xs: 2 }}
      >
        <div style={{ padding: "40px" }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {keyfeaTitle}
          </h1>
          <p>{keyfeaDesc}</p>
        </div>
      </Grid>
      <Grid item md={6} sm={12} xs={12} order={{ md: grid2md, sm: 1, xs: 1 }}>
        <HeroImg img={keyfeaImg} />
      </Grid>
    </Grid>
  );
};
