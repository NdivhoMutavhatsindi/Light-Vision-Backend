import prisma from "../config/database.js";

export const createOffer =
  async (data) => {

    return await prisma.offer.create({
      data,
    });
  };

export const getAllOffers =
  async () => {

    return await prisma.offer.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        property: {
          select: {
            property_id: true,
            title: true,
            location: true,
            price: true,
            property_type: true,
            status: true,
          },
        },
      },
    });
  };

export const getOfferById =
  async (id) => {

    return await prisma.offer.findUnique({
      where: {
        offer_id: id,
      },
      include: {
        property: {
          select: {
            property_id: true,
            title: true,
            location: true,
            price: true,
            property_type: true,
            status: true,
          },
        },
      },
    });
  };

export const updateOfferStatus =
  async (id, status) => {

    return await prisma.offer.update({
      where: {
        offer_id: id,
      },

      data: {
        status,
      },
    });
  };