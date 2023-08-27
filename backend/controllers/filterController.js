const Applicant = require('../models/applicant'); // Import your Applicant model

// Define the filtering function
exports.filterApplicants = async (req, res) => {
  const { gateScore, ugCGPA } = req.body;
  try {
    // Fetch Applicants based on criteria
    const filteredApplicants = await Applicant.find({
      gateScore: { $gt: gateScore },
      ugCGPA: { $gt: ugCGPA }
    });
    
    res.status(200).json(filteredApplicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
