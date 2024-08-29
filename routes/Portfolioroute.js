const router = require("express").Router();
const {
  Education,
  About,
  Experience,
  Course,
  Project,
  Contact,
  Intro,
} = require("../models/Portfolio");
const User = require("../models/userModel");
// Api for datafetch
router.get("/get-Portfolio-data", async (req, res) => {
  try {
    const intro = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const course = await Course.find();
    const project = await Project.find();
    const contact = await Contact.find();
    const education = await Education.find();
    res.status(200).send({
      intro: intro[0],
      about: about[0],
      experience: experience,
      course: course,
      project: project,
      contact: contact,
      education: education,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
// Api for update intro
router.post("/update-intro", async (req, res) => {
  try {
    const { _id, values } = req.body;

    // Perform the update using the values object
    const intro = await Intro.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );

    console.log("Updated Intro:", intro);
    if (!intro) return res.status(404).send("Intro not found");
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

// api to update about
router.post("/update-about", async (req, res) => {
  try {
    const { _id, values } = req.body;

    // Perform the update using the values object
    const about = await About.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );

    console.log("Updated About:", about);
    if (!about) return res.status(404).send("About not found");
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to add experience

router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to update experience
router.post("/update-experience", async (req, res) => {
  try {
    const { _id, values } = req.body;
    // Perform the update using the values object
    const experience = await Experience.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
    if (!experience) return res.status(404).send("experience not found");
    res.status(200).send({
      data: experience,
      success: true,
      message: "experience updated successfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//apoi to delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const { _id, values } = req.body;
    const experience = await Experience.findByIdAndDelete(_id);
    if (!experience) return res.status(404).send("experience not found");
    res.status(200).send({
      data: experience,
      success: true,
      message: "experience deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api to add project

router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api to update project

router.post("/update-project", async (req, res) => {
  try {
    const { _id, values } = req.body;
    // Perform the update using the values object
    const project = await Project.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
    if (!project) return res.status(404).send("Project not found");
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api to delete project

router.post("/delete-project", async (req, res) => {
  try {
    const { _id, values } = req.body;
    const project = await Project.findByIdAndDelete(_id);
    if (!project) return res.status(404).send("Project not found");
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to add course

router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to update course

router.post("/update-course", async (req, res) => {
  try {
    const { _id, values } = req.body;
    // Perform the update using the values object
    const course = await Course.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
    if (!course) return res.status(404).send("Course not found");
    res.status(200).send({
      data: course,
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to delete course
router.post("/delete-course", async (req, res) => {
  try {
    const { _id, values } = req.body;
    const course = await Course.findByIdAndDelete(_id);
    if (!course) return res.status(404).send("Course not found");
    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to add education

router.post("/add-education", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).send({
      data: education,
      success: true,
      message: "Education added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
//api to update education

router.post("/update-education", async (req, res) => {
  try {
    const { _id, values } = req.body;
    // Perform the update using the values object
    const education = await Education.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
    if (!education) return res.status(404).send("Education not found");
    res.status(200).send({
      data: education,
      success: true,
      message: "Education updated successfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api to delete education

router.post("/delete-education", async (req, res) => {
  try {
    const { _id, values } = req.body;
    const education = await Education.findByIdAndDelete(_id);
    if (!education) return res.status(404).send("Education not found");
    res.status(200).send({
      data: education,
      success: true,
      message: "Education deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api to update contact

router.post("/update-contact", async (req, res) => {
  try {
    const { _id, values } = req.body;
    // Perform the update using the values object
    const user = await Contact.findByIdAndUpdate(
      _id,
      { $set: { ...values } },
      { new: true }
    );
    if (!user) return res.status(404).send("Contact not found");
    res.status(200).send({
      data: user,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//api for admin login

router.post("/admin-login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({
      username: username,
      password: password,
    });
    user.password = "";
    console.log(user);
    if (!user) {
      return res.status(400).send({
        sucess: false,
        message: "Invalid email or password",
      });
    }
    res.send({
      data: user,
      success: true,
      message: "Admin login successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
