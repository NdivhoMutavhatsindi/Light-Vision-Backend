import prisma from "../config/database.js";

export const createPropertyImage =
  async (data) => {

    return await prisma.propertyImage.create({
      data,
    });
  };

export const getPropertyImagesByPropertyId = async (propertyId) => {
  return await prisma.propertyImage.findMany({
    where: {
      property_id: propertyId,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

export const deletePropertyImage = async (id) => {
    return await prisma.propertyImage.delete({
      where: {
        property_image_id: id,
      },   
    });
};