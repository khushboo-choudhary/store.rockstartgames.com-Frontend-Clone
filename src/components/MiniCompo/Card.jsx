import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"10px", backgroundColor: "#000000", color:"white"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.ctfassets.net/wn7ipiv9ue5v/267fSFBO6jT8CDRmMgFZFL/2a89bd1b21f133e29d95e993b9131080/RDR2_Vinyl_HouseBuildingEP_Group_01_V02.jpg"
      />
      <CardContent>
        <Typography variant="body2" >
          Lizards are a widespread group 
        </Typography>
      </CardContent>
    </Card>
  );
};

export { MyCard };
