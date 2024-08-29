import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/index";
import Loader from "./components/Loader";
import Login from "./Pages/Admin/Login";
const App = () => {
  const { loading, portfoliodata, reloaddata } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading(true));
      const response = await axios.get("/api/portfolio/get-Portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    if (!portfoliodata) {
      getPortfolioData();
    }
  });
  useEffect(() => {
    if (reloaddata) {
      dispatch(ShowLoading(true));
      getPortfolioData();
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    }
  }, [reloaddata]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
