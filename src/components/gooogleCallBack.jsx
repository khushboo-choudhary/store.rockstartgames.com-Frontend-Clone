import { useLocation } from "react-router-dom";

export const GoogleCallBack = () => {

      const search = useLocation().search;
      const token = new URLSearchParams(search).get("token");
      const nickName = new URLSearchParams(search).get("nickName");
      const profileImage = new URLSearchParams(search).get("profileImage");

          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem(
            "userData",
            JSON.stringify({ profileImage, nickName })
          );
          alert("You Have LoggedIn Successfully")
            // navigate("/");
            window.location.href = "/";

  return (
    <div>
      <h1>Google CallBack</h1>
    </div>
  );
};
