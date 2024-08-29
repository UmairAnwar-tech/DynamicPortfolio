import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Select,Form } from "antd";
import axios from "axios";
import { message } from "antd";
import {
  HideLoading,
  ShowLoading,
} from "../../redux/rootSlice";
function Adminabout() {
  const dispatch = useDispatch();
  const { portfoliodata } = useSelector((state) => state.root);
  const initialValues = portfoliodata?.about || {};
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading(true));
      console.log("Received values of form:", values);
      const response = await axios.post("/api/portfolio/update-about", {
        values,
        _id: portfoliodata.about._id,
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
        <Form.Item name="ImageUrl" label="ImageUrl">
          <input placeholder="ImageUrl" />
        </Form.Item>
        <Form.Item name="Description1" label="Description1">
          <textarea placeholder="Description1" />
        </Form.Item>
        <Form.Item name="Description2" label="Description2">
          <textarea placeholder="Description2" />
        </Form.Item>
        <Form.Item name="Skills" label="Skills">
          <Select
            mode="tags"
            placeholder="Enter your skills"
            style={{ width: "100%" }}
          >
            {/* Optionally, you can provide predefined options */}
            {["JavaScript", "React", "Node.js"].map((skill) => (
              <Select.Option key={skill} value={skill}>
                {skill}
              </Select.Option>
            ))}
          </Select>
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

export default Adminabout;
