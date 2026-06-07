import streamifier from "streamifier";

import cloudinaryIMG
from "../config/cloudinaryIMG.js";

export const uploadImage =
  (fileBuffer) => {

    return new Promise(
      (resolve, reject) => {

        const stream =
          cloudinaryIMG.uploader.upload_stream(
            {
              folder: "properties",
            },

            (error, result) => {

              if (result)
                resolve(result);

              else reject(error);
            }
          );

        streamifier
          .createReadStream(fileBuffer)
          .pipe(stream);
      }
    );
  };