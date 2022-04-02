import Grid from "@mui/material/Grid";




export const GamesDetails = ({desc, name, logo}) => {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        md={12}
        sm={12}
        xs={12}
        style={{
          backgroundColor: "transparent",
          padding: "30px",
        }}
        order={{ md: 1, sm: 2, xs: 2 }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
            padding: "40px",
            paddingBottom: "0px",
          }}
        >
          Game Details
        </h1>
        <div
          style={{
            backgroundColor: "transparent",
            display: "flex",
            padding: "40px",
            paddingBottom: "0px",
            paddingTop: "10px",
          }}
        >
          <img src={logo} alt={name} width={"150px"} />
        </div>
        <div
          style={{
            backgroundColor: "transparent",
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {name}
          </h1>
          <p style={{ marginBottom: "20px" }}>{desc}</p>
        </div>
      </Grid>
    </Grid>
  );
};
