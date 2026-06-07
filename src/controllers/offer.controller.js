import * as offerService
  from "../services/offer.service.js";

import { successResponse }
  from "../util/response.js";

export const createOffer =
  async (req, res, next) => {

    try {

      const offer =
        await offerService.createOffer(
          req.body,
          req.file
        );

      return successResponse(
        res,
        "Offer submitted successfully",
        offer,
        201
      );

    } catch (error) {

      next(error);
    }
  };

export const getAllOffers =
  async (req, res, next) => {

    try {

      const offers =
        await offerService.getAllOffers();

      return successResponse(
        res,
        "Offers fetched successfully",
        offers
      );

    } catch (error) {

      next(error);
    }
  };

export const getOfferById =
  async (req, res, next) => {

    try {

      const offer =
        await offerService.getOfferById(
          req.params.id
        );

      return successResponse(
        res,
        "Offer fetched successfully",
        offer
      );

    } catch (error) {

      next(error);
    }
  };

export const updateOfferStatus =
  async (req, res, next) => {

    try {

      const offer =
        await offerService.updateOfferStatus(
          req.params.id,
          req.body.status
        );

      return successResponse(
        res,
        "Offer updated successfully",
        offer
      );

    } catch (error) {

      next(error);
    }
  };    