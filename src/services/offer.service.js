import * as offerRepository
  from "../repositories/offer.repository.js";

import { uploadPDFToCloudinary }
  from "../helper/uploadPDFToCloudinary.js";

export const createOffer =
  async (payload, file) => {

    if (!file) {
      throw new Error("Offer document file is required");
    }

    const result =
      await uploadPDFToCloudinary(
        file.buffer,
        file.originalname
      );

    const application =
      await offerRepository.createOffer({
        ...payload,

        offer_document_url: result.secure_url,
        offer_amount: parseFloat(payload.offer_amount),
        status: "pending",
      });

    return application;
  };

export const getAllOffers =
  async () => {
    return await offerRepository.getAllOffers();
  };

export const getOfferById =
  async (id) => {
    return await offerRepository.getOfferById(id);
  };

export const updateOfferStatus =
  async (id, status) => {
    return await offerRepository.updateOfferStatus(
      id,
      status
    );
  };    