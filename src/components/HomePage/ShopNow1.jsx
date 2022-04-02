import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HeroImg = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(https://images.ctfassets.net/wn7ipiv9ue5v/AUyAKJaKI00AvkIlX8bDQ/9883a60f608390f27afb148ce86d0d0a/R_Store_RDRPackaging_1344x500.jpg);
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

export const ShopNow1 = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        style={{
          backgroundColor: "#000000",
          padding: "30px",
        }}
        order={{ md: 1, sm: 2, xs: 2 }}
      >
        <div
          style={{
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={
              "https://images.ctfassets.net/wn7ipiv9ue5v/787xl5GAX1DHerodehTlqj/f63a43907cac1f96ced85169d40ee737/RDR2_logo.png"
            }
            alt="GTA"
            width={"150px"}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Essentials Collection Now Available
          </h1>
          <Link to="/gear">
            <ColorButton variant="contained">BUY NOW</ColorButton>
          </Link>
        </div>
      </Grid>
      <Grid item md={6} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
        <HeroImg />
      </Grid>
    </Grid>
  );
};
