import { v2 as cloudinaryPDf } from "cloudinary";

cloudinaryPDf.config({

  cloud_name:
    process.env.CLOUDINARY1_CLOUD_NAME,

  api_key:
    process.env.CLOUDINARY1_API_KEY,

  api_secret:
    process.env.CLOUDINARY1_API_SECRET,
});

export default cloudinaryPDf;