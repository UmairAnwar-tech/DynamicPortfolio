import React from "react";
import axios from "axios";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ShowLoading,
} from "../../redux/rootSlice";
import { Form, Radio } from "antd";
function Admincontact() {
  const dispatch = useDispatch();
  const { portfoliodata} = useSelector((state) => state.root);
  const { contact } = portfoliodata;
 
 
  const initialValues = contact || {};
console.log(initialValues);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading(true));
      console.log("Received values of form:", values);
      const response = await axios.post("/api/portfolio/update-contact", {
        values,
        _id: portfoliodata.contact[0]._id,
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
      <Form onFinish={onFinish} layout="vertical" initialValues={initialValues[0]}>
        <Form.Item name="Name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="Email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="Phone" label="Phone">
          <input placeholder="Phone" />
        </Form.Item>
        <Form.Item name="Address" label="Address">
          <input placeholder="Address" />
        </Form.Item>
        <Form.Item name="Gender" label="Gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="LinkedIn" label="LinkedIn">
            <input placeholder="LinkedIn Url"/>
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

export default Admincontact;
