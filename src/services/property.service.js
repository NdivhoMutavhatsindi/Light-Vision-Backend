import * as propertyRepository from "../repositories/property.repository.js";

const mapStatusValue = (status) => {
  if (status == null) return status;
  const s = String(status).trim().toLowerCase();
  const map = {
    available: 'for_sale',
    'for sale': 'for_sale',
    'for-sale': 'for_sale',
    for_sale: 'for_sale',
    'for_rent': 'for_rent',
    'for rent': 'for_rent',
    'for-rent': 'for_rent',
    for_rent: 'for_rent',
    sold: 'sold',
    pending: 'pending',
    rented: 'rented',
    'under offer': 'under_offer',
    'under-offer': 'under_offer',
    under_offer: 'under_offer',
    price_adjusted: 'price_adjusted',
    'price-adjusted': 'price_adjusted',
  };

  return map[s] ?? status;
};

const normalizePayloadStatus = (payload) => {
  if (!payload || typeof payload !== 'object') return payload;
  const copy = { ...payload };
  if (copy.status) copy.status = mapStatusValue(copy.status);
  return copy;
};

export const createProperty = async (payload) => {
  const normalized = normalizePayloadStatus(payload);
  const property = await propertyRepository.createProperty(normalized);
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
    const normalized = normalizePayloadStatus(payload);
    return await propertyRepository.updateProperty(
      id,
      normalized
    );
  };

export const updatePropertyStatus =
  async (id, status) => {
    const mapped = mapStatusValue(status);
    return await propertyRepository.updateProperty(id, {
      status: mapped,
    });
  };

export const deleteProperty =
  async (id) => {
    return await propertyRepository.deleteProperty(id);
  };
