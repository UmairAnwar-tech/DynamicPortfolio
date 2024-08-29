import React, { useEffect } from "react";
import axios from "axios";
import { message, Form, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ShowLoading,
  ReloadData,
} from "../../redux/rootSlice";

function Adminexperiences() {
  const dispatch = useDispatch();
  const { portfoliodata } = useSelector((state) => state.root);
  const { experience } = portfoliodata;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [form] = Form.useForm(); // Create form instance

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading(true));
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          values,
          _id: selectedItemForEdit._id,
        });
        setSelectedItemForEdit(null);
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Server Error");
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading(true));
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Server Error");
    }
  };

  useEffect(() => {
    if (selectedItemForEdit) {
      form.setFieldsValue(selectedItemForEdit);
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  const closeModal = () => {
    setShowAddEditModal(false);
    setSelectedItemForEdit(null);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="px-5 py-2 bg-primary text-white"
          onClick={() => setShowAddEditModal(true)}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-2 h-82">
        {experience.map((item, index) => (
          <div className="shadow border  p-5  border-gray-700 flex flex-col " key={index}>
            <h1 className="text-primary text-xl font-semibold">
              {item.Period}
            </h1>
            <hr />
            <h1 className="text-primary">{item.Title}</h1>
            <h1>{item.Company}</h1>
            <h1 className="h-28">{item.Description}</h1>
            <div className="flex justify-end gap-5 sm:mt-0 sm:flex-col mt-5  mb-0">
              <button
                className="px-5 py-2 bg-red-500 text-white"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
              <button
                className="px-5 py-2 bg-primary text-white"
                onClick={() => {
                  setSelectedItemForEdit(item);
                  setShowAddEditModal(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={closeModal}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="Period"
            label="Period"
            rules={[{ required: true, message: "Please input the period!" }]}
          >
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item
            name="Title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="Company"
            label="Company"
            rules={[{ required: true, message: "Please input the company!" }]}
          >
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item
            name="Description"
            label="Description"
            rules={[{ required: true, message: "Please input the description!" }]}
          >
            <textarea placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end sm:flex-col ">
            <button
              type="button"
              className="px-10 py-2 bg-white text-primary border-primary"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" className="px-10 py-2 bg-primary text-white">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Adminexperiences;
