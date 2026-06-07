import cloudinaryPDF
  from "../config/cloudinaryPDF.js";

export const uploadPDFToCloudinary =
  async (fileBuffer, fileName) => {

    return new Promise((resolve, reject) => {

      const stream =
        cloudinaryPDF.uploader.upload_stream(
          {
            folder: "offers",

            resource_type: "raw",

            public_id:
              `${Date.now()}-${fileName}`,
          },

          (error, result) => {

            if (error) {

              reject(error);

            } else {

              resolve(result);
            }
          }
        );

      stream.end(fileBuffer);
    });
  };