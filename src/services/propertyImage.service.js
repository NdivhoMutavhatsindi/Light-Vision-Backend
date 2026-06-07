import * as propertyImageRepository
from "../repositories/propertyImage.repository.js";

import { uploadImage } from "../helper/uploadIMG.helper.js";

export const uploadPropertyImages = async (propertyId, files) => {
  const existingImages = await propertyImageRepository.getPropertyImagesByPropertyId(propertyId);
  const hasPrimary = existingImages.some((image) => image.is_primary);
  const uploadedImages = [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const result = await uploadImage(file.buffer);

    const image = await propertyImageRepository.createPropertyImage({
      property_id: propertyId,
      image_url: result.secure_url,
      is_primary: !hasPrimary && index === 0,
      display_order: existingImages.length + index,
    });

    uploadedImages.push(image);
  }

  return uploadedImages;
};

export const getPropertyImages = async (propertyId) => {
  return await propertyImageRepository.getPropertyImagesByPropertyId(propertyId);
};

export const deletePropertyImage = async (id) => {
  return await propertyImageRepository.deletePropertyImage(id);
};