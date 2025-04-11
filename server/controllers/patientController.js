import PatientProfile from "../models/PatientProfile.js";



export const createOrUpdateProfile = async (req, res) => {
  try {
    const { userId, age, gender, bloodGroup, allergies, medications, emergencyContact, existingConditions } = req.body;

    const profileData = { age, gender, bloodGroup, allergies, medications, emergencyContact, existingConditions };

    const profile = await PatientProfile.findOneAndUpdate(
      { user: userId },
      profileData,
      { new: true, upsert: true }
    );

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await PatientProfile.findOne({ user: userId });

    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
