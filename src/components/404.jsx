import { textAlign } from "@mui/system";
import { HomeGames } from "./HomePage/Games";


export const Page404 = ()=>{
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginTop: "190px",
              textAlign: "center",
            }}
          >
            404 Page Not Found
          </h1>
          <p>Error Code: 404</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <HomeGames />
        </div>
      </>
    );
}