const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  intermediate: {
    type: String,
    required: true,
  },
  gateScore: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  ugCGPA: {
    type: Number,
    required: true,
  },
  casteCategory: {
    type: String,
    required: true,
  },
  workExperience: {
    type: Number,
    required: true,
  },
  workOrganisation: {
    type: String,
    required: true,
  },
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
