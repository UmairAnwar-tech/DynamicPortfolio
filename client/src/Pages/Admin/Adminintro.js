import React from "react";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  HideLoading,
  ShowLoading,
} from "../../redux/rootSlice";
import { Form } from "antd";
function Adminintro() {
  const dispatch = useDispatch();
  const { portfoliodata } = useSelector((state) => state.root);
  const initialValues = portfoliodata?.intro || {};
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading(true));
      console.log("Received values of form:", values);
      const response = await axios.post("/api/portfolio/update-intro", {
        values,
        _id: portfoliodata.intro._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Server Error");
    }
  };
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical" initialValues={initialValues}>
        <Form.Item name="WelcomeText" label="Welcome Text">
          <input placeholder="Introduction" />
        </Form.Item>
        <Form.Item name="FirstName" label="FirstName">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="LastName" label="LastName">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="Title" label="Title">
          <input placeholder="Title" />
        </Form.Item>
        <Form.Item name="Description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            className="px-10 py-2 bg-primary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Adminintro;
