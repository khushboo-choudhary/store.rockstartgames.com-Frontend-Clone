import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../styles/Grand.collection.css";

const MyCard = ({ img, title, price}) => {
  return (
    <Card
    className="myOwnCard"
      sx={{ maxWidth: 345 }}
      style={{
        margin: "10px",
        backgroundColor: "#000000",
        color: "white",
        height: "93%",
      }}
    >
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          {title}
        </Typography>
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { MyCard };
