import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ksai54190:ksai54190@cluster0.poahv7p.mongodb.net/tomato-food",
    )
    .then(() => console.log("DB Connected Successfully."));
};
