const mongoose = require("mongoose");
const IntroSechema = new mongoose.Schema(
  {
    WelcomeText: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Description: { type: String, required: true },
    Title: { type: String, required: true },
  },

  { collection: "Intro" }
);

const AboutSechema = new mongoose.Schema(
  {
    ImageUrl: { type: String, required: true },
    Description1: { type: String, required: true },
    Description2: { type: String, required: true },
    Skills: { type: Array, required: true },
  },
  { collection: "About" }
);
const ExperienceSechema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Period: { type: String, required: true },
    Company: { type: String, required: true },
    Description: { type: String, required: true },
  },
  { collection: "Experience" }
);
const ProjectSechema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Technologies: { type: Array, required: true },
    ImageUrl: { type: String, required: true },
    Link: { type: String, required: true },
  },
  { collection: "Project" }
);
const EducationSechema = new mongoose.Schema(
  {
    School: { type: String, required: true },
    Degree: { type: String, required: true },
    Period: { type: String, required: true },
    Description: { type: String, required: true },
  },
  { collection: "Education" }
);
const CourseSechema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    SourceBuffer: { type: String, required: true },
  },
  { collection: "Course" }
);
const ContactSechema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: String, required: true },
    Address: { type: String, required: true },
    LinkedIn: { type: String, required: true },
    Gender: { type: String, required: true },
  },
  { collection: "Contact" }
);

module.exports = {
  Intro: mongoose.model("Intro", IntroSechema),
  About: mongoose.model("About", AboutSechema),
  Experience: mongoose.model("Experience", ExperienceSechema),
  Project: mongoose.model("Project", ProjectSechema),
  Education: mongoose.model("Education", EducationSechema),
  Course: mongoose.model("Course", CourseSechema),
  Contact: mongoose.model("Contact", ContactSechema),
};
