import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "./ApplicationForm.css";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    gateScore: "",
    degree: "",
    department: "",
    ugCGPA: "",
    casteCategory: "",
    workExperience: "",
  });

  const [filteredApplicants, setFilteredApplicants] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setFilteredApplicants(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="application-form-container">
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="mb-4">Shortlisting Criteria</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Minimum Gate Score:</label>
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
                <label className="form-label">Degree:</label>
                <select
                  className="form-select"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
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
                <label className="form-label">Minimum UG CGPA:</label>
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
                <label className="form-label">Category:</label>
                <select
                  className="form-select"
                  name="casteCategory"
                  value={formData.casteCategory}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="General">General</option>
                  <option value="EWS">EWS</option>
                  <option value="OBC-NCL">OBC-NCL</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="PWD">PWD</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Minimum Work Experience:(Months)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Apply Filter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Display the filtered applicants in a tabular format */}
      <div className="container mt-4">
        <h2>Filtered Applicants</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>School</th>
              <th>Intermediate</th>
              <th>Gate Score</th>
              <th>College</th>
              <th>Degree</th>
              <th>Department</th>
              <th>UG CGPA</th>
              <th>Caste Category</th>
              <th>Work Experience</th>
              <th>Work Organisation</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.age}</td>
                <td>{applicant.gender}</td>
                <td>{applicant.school}</td>
                <td>{applicant.intermediate}</td>
                <td>{applicant.gateScore}</td>
                <td>{applicant.college}</td>
                <td>{applicant.degree}</td>
                <td>{applicant.department}</td>
                <td>{applicant.ugCGPA}</td>
                <td>{applicant.casteCategory}</td>
                <td>{applicant.workExperience}</td>
                <td>{applicant.workOrganisation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default ApplicationForm;
