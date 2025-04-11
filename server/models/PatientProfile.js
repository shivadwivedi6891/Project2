import mongoose  from "mongoose";

const ProfileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },

    age: Number,
    gender: String,
    bloodGroup: String,
    allergies: [String],
    medications: [String],
    emergencyContact: {
      name: String,
      phone: String,
      relation: String,
    },
    existingConditions: [String],
  }, { timestamps: true }


)


export default mongoose.model("PatientProfile",ProfileSchema);