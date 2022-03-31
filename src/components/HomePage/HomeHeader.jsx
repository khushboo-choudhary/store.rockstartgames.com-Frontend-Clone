import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";


const HeroImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(https://images.ctfassets.net/wn7ipiv9ue5v/5ubZpAMvujWLMLqkcB6KIv/e1bc69ea4d581335a51a9bbf8a51efdd/GTAV_Gen9_MFT_Webstore_ProductPage_2048x879_DELIV__1_.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 600px) {
    height: 200px;
  }
`;


const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#000000",
  height: "50px",
  width: "150px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "white",
  },
  "@media (max-width: 400px)": {
    width: "100%",
    height: "50px",
  },
}));

export const HomeHeader = ()=>{


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
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
            }}
          >
            <img
              src={
                "https://images.ctfassets.net/wn7ipiv9ue5v/4xtHbRSQjSnBeXFH8DKMXx/326c7e85add1ca0d1459bc29dcab25cd/GTAV_Logo.svg?w=512&h=&fm=webp&q="
              }
              alt="GTA"
              width={"150px"}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom:"20px"}}>
              GTAV and GTA Online for PS5 and Xbox Series X|S
            </h1>
            <p style={{marginBottom:"20px"}}>
              Experience blockbuster hits Grand Theft Auto V and GTA Online —
              now upgraded for a new generation with stunning visuals, faster
              loading, 3D audio and more, plus exclusive content for GTA Online
              players.
            </p>
            <ColorButton variant="contained">BUY NOW</ColorButton>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
          <HeroImg />
        </Grid>
      </Grid>
    );
}