import mongoose, { Schema } from "mongoose";

const PageDetailsSchema = new Schema({
    key: String, 
    value: String,
  });

  const PageDetail = mongoose.models.Pagedetail || mongoose.model('Pagedetail', PageDetailsSchema);
export default PageDetail