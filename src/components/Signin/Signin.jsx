import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Sigin = (props) => {
  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (e) => {
    const { id, value } = e.target;
    setForm({ ...formData, [id]: value });
    console.log(formData);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    function postData(url) {
      axios.post(url, formData).then((response) => {
  console.log(response);
  localStorage.setItem("token",JSON.stringify(response.data.token));
  const {nickName,profileImage} = response.data;
  localStorage.setItem("userData",JSON.stringify({profileImage,nickName}));
  window.location.reload(false);
}, (error) => {
  console.log(error);
});
;
    }
    postData("https://obscure-citadel-15133.herokuapp.com/login");
  };

  return (
    <>
      <div className=" h-full pb-16" id="bgimg">
        <div
          className="snap-x object-contain lg:ml-96 md:ml-52 rounded lg:w-1/3 justify-center item-center pt-8"
          id="fitC"
        >
          <div className="flex justify-center item-center">
            <img
              className="w-72 h-24 pb-8 snap-center"
              src="https://s.rsg.sc/auth/images/sc_logo_20180910.svg"
              alt=""
            />
          </div>
          <div className="justify-center item-center">
            <form
              onSubmit={formSubmit}
              className=" block bg-white py-4 px-3 rounded w-full"
              id="fitC"
            >
              <h1 className="p-2 text-[#161616] font-bold text-2xl">
                Sign in with Social Club
              </h1>
              <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={onChangeForm}
                value={formData.email}
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400 myInput"
                required
              />
              <br />
              <input
                id="password"
                type="text"
                placeholder="Password"
                onChange={onChangeForm}
                value={formData.password}
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
                required
              />
              <br />
              <input
                type="checkbox"
                className="px-1 m-1  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500"
              />
              <label>Keep me signed in</label>
              <br />
              <div className="flex justify-between items-center">
                <label className="underline w-76">
                  <a className="underline w-76" href="/">
                    Forgot your password?
                  </a>
                </label>
                <input
                  type="submit"
                  value="Signin"
                  className="px-3 py-1 m-1 font-semibold hover:bg-[#F7931E] text-black bg-[#f99e36]"
                />
              </div>
            </form>
          </div>

          <div className="flex justify-between items-center bg-white py-6 mt-12">
            <p className="pl-4 text-[18px] text-gray-600">Sign in using</p>
            <div className="social-icons">
              <a href="#" className="p-2">
                <i className="md:text-3xl text-yellow-500 fab fa-playstation"></i>
              </a>
              <a href="#" className="p-2">
                <i className="md:text-3xl text-yellow-500 fab fa-xbox"></i>
              </a>
              <a href="#" className="p-2">
                <i className="md:text-3xl text-yellow-500 fab fa-facebook"></i>
              </a>
              <a href="#" className="p-2">
                <i className="md:text-3xl text-yellow-500 fab fa-google"></i>
              </a>
              <a href="#" className="p-2">
                <i className="md:text-3xl text-yellow-500 fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <p className="p-2 text-white content-center justify-center">
            Not a member?{" "}
            <Link className="text-[#f99e36] hover:underline" to="/register">
              Create a new account
            </Link>
          </p>
          <p className="p-2 text-white text-[13px] mt-8">
            © 2022 ROCKSTAR GAMES | PRIVACY POLICY | TERMS OF SERVICE
          </p>
        </div>
      </div>
    </>
  );
};

export default Sigin;
