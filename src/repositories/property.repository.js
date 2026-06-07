import prisma from "../config/database.js";

export const createProperty = async (data) => {
  return await prisma.property.create({
    data,
  });
};

export const getAllProperties = async () => {
  const properties = await prisma.property.findMany({
    where: {
      status: {
        not: "inactive",
      },
    },
    include: {
      images: {
        orderBy: [
          { is_primary: "desc" },
          { display_order: "asc" }
        ]
      },
      inquiries: true,
      offers: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return properties.map(property => ({
    ...property,
    image:
      property.images.find(img => img.is_primary)?.image_url ||
      property.images[0]?.image_url ||
      null
  }));
};

export const getPropertyById = async (id) => {
  const property = await prisma.property.findUnique({
    where: {
      property_id: id,
    },
    include: {
      images: {
        orderBy: [
          { is_primary: "desc" },
          { display_order: "asc" }
        ]
      },
      inquiries: true,
      offers: true,
    },
  });

  if (!property) return null;

  return {
    ...property,
    image:
      property.images.find(img => img.is_primary)?.image_url ||
      property.images[0]?.image_url ||
      null
  };
};

export const getSimilarProperties = async (propertyId, propertyType) => {
  return await prisma.property.findMany({
    where: {
      property_type: propertyType,
      property_id: {
        not: propertyId,
      },
    },
    include: {
      images: {
        orderBy: [
          { is_primary: "desc" },
          { display_order: "asc" }
        ]
      },
    },
    orderBy: {
      created_at: "desc",
    },
    take: 3,
  });
};

export const updateProperty = async (id, data) => {
  return await prisma.property.update({
    where: {
      property_id: id,
    },
    data,
  });
};

export const deleteProperty = async (id) => {
  return await prisma.property.delete({
    where: {
      property_id: id,
    },
  });
};
