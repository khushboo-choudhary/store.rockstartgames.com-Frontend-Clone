import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ContactSupportOutlined } from "@mui/icons-material";
import doPayment from "../../utilities/payment";
import { useNavigate } from "react-router-dom";

const HeroImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center-top;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "red",
  color: "white",
  height: "50px",
  width: "auto",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "red",
  },
  "@media (max-width: 400px)": {
    width: "100%",
    height: "50px",
  },
}));
const ColorButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  height: "50px",
  width: "auto",
  fontWeight: "bold",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "white",
  },
  "@media (max-width: 400px)": {
    width: "100%",
    height: "50px",
    marginLeft: "0px",
    marginTop: "10px",
  },
}));

export const GamesHeader = ({ img, logo, name, amount }) => {
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

    if (nickName == "none") {
      navigate("/signin");
    } else {
      let disc = "payment for" + " " + name;
      amount = amount * 84;
      doPayment(amount, disc);
    }
  };

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
          <img src={logo} alt={name} width={"150px"} />
        </div>
        <div>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {name}
          </h1>
          <p style={{ marginBottom: "20px" }}>
            <img
              src="https://i.ibb.co/Rjwb872/select-Platform.png"
              alt="selectPlatform"
            />
          </p>
          <ColorButton
            variant="contained"
            onClick={() => {
              buyNow();
            }}
          >
            BUY NOW
          </ColorButton>
        </div>
      </Grid>
      <Grid item md={6} sm={12} xs={12} order={{ md: 2, sm: 1, xs: 1 }}>
        <HeroImg img={img} />
      </Grid>
    </Grid>
  );
};
