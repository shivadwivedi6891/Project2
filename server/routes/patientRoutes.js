import express from "express";
import { createOrUpdateProfile, getProfile } from "../controllers/patientController.js";
import PatientProfile from "../models/PatientProfile.js";


const router = express.Router();

router.post("/profile", createOrUpdateProfile);
router.get("/profile/:userId", getProfile);

router.get("/emergency/:userId", async (req, res) => {
    try {
    //   const { userId } = req.params;
    const userId = req.params.userId.trim();

      const profile = await PatientProfile.findOne({ user: userId }).populate("user", "name");
  
      if (!profile) return res.status(404).json({ message: "Profile not found" });
  
      const emergencyData = {
        name: profile.user.name,
        bloodGroup: profile.bloodGroup,
        allergies: profile.allergies,
        emergencyContact: profile.emergencyContact,
      };
  
      res.json(emergencyData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  



export default router;
