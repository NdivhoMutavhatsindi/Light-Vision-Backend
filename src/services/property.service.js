import * as propertyRepository from "../repositories/property.repository.js";
import prisma from "../config/database.js";

export const createProperty = async (payload) => {
  const property = await propertyRepository.createProperty(payload);
  return property;
};

export const getAllProperties =
  async () => {
    return await propertyRepository.getAllProperties();
  };

export const getPropertyById =
  async (id) => {
    return await propertyRepository.getPropertyById(
      id
    );
  };

export const getSimilarProperties =
  async (propertyId) => {
    const property = await propertyRepository.getPropertyById(propertyId);
    if (!property) return [];
    return await propertyRepository.getSimilarProperties(propertyId, property.property_type);
  };

export const updateProperty =
  async (id, payload) => {
    return await propertyRepository.updateProperty(
      id,
      payload
    );
  };

export const updatePropertyStatus =
  async (id, status) => {
    return await propertyRepository.updateProperty(id, {
      status,
    });
  };

export const deleteProperty =
  async (id) => {
    return await propertyRepository.deleteProperty(id);
  };
