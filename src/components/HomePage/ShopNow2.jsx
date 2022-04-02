import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HeroImg = styled.div`
  width: 100%;
  height: 220px;
  background-image: url(https://images.ctfassets.net/wn7ipiv9ue5v/5a5HhOXOSEIVV0uaIpvPiU/ec89fc996c28a02aef0228680858197d/R_Store_GoldBars_1344x500.jpg);
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

export const ShopNow2 = () => {
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
              "https://images.ctfassets.net/wn7ipiv9ue5v/53eLAEbas7t5je0nCBdAJk/4ccff0c85816cb6b0c079c235e298799/RDO_Logo_RGB.png"
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
            Buy Gold Bars for PC
          </h1>
          <Link to={"buy-red-dead-online-gold-bars"}>
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
