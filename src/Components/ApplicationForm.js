import React, { useState } from 'react';
import Header from './header'; // Import the Header component
import Footer from './footer'; // Import the Footer component
import './ApplicationForm.css'; 

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    school: '',
    intermediate: '',
    gateScore: '',
    college: '',
    degree: '',
    department: '',
    ugCGPA: '',
    casteCategory: '',
    workExperience: '',
    workOrganisation: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="application-form-container">
      <Header /> 
    <div className="container" >
        <div className="row justify-content-center"> {/* Center the form */}
        <div className="col-lg-6"> {/* Set the desired width */}
      <h2 className="mb-4" >Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">School Score:</label>
          <input
            type="text"
            className="form-control"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Intermediate Score:</label>
          <input
            type="text"
            className="form-control"
            name="intermediate"
            value={formData.intermediate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gate Score:</label>
          <input
            type="text"
            className="form-control"
            name="gateScore"
            value={formData.gateScore}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">College:</label>
          <input
            type="text"
            className="form-control"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Degree:</label>
          <select
            className="form-select"
            name="degree"
            value={formData.degree}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="BE">BE</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Sc">M.Sc</option>
            <option value="MCA">M.Tech</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Department:</label>
          <select
            className="form-select"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="CSE">CSE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="CH">CH</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">UG CGPA:</label>
          <input
            type="text"
            className="form-control"
            name="ugCGPA"
            value={formData.ugCGPA}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label">Caste Category:</label>
          <select
            className="form-select"
            name="casteCategory"
            value={formData.casteCategory}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="OC">OC</option>
            <option value="OBC-NCL">OBC-NCL</option>
            <option value="SC/ST">SC/ST</option>
            <option value="PWD">PWD</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Work Experience:(Months)</label>
          <input
            type="text"
            className="form-control"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Work Organisation:</label>
          <input
            type="text"
            className="form-control"
            name="workOrganisation"
            value={formData.workOrganisation}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
    </div>
    <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default ApplicationForm;
