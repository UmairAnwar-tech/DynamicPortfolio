import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";

function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const login = async () => {
    try {
      dispatch(ShowLoading(true));
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      message.error(err);
      dispatch(HideLoading());
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 bg-white p-5 gap-5 flex  flex-col shadow border border-gray-500">
        <h1 className=" text-2xl">Umair - Admin Login</h1>
        <hr className="w-ful" />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="w-full p-3 text-white bg-primary hover:bg-primary"
          type="submit"
          onClick={login}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
