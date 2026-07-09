export const buildAdminProfileUpdatePayload = (values = {}, profilePictureUrl = null) => {
  const payload = {};

  const firstName = values.firstName?.trim();
  const lastName = values.lastName?.trim();
  const email = values.email?.trim();
  const phone = values.phone?.trim();
  const bio = values.bio?.trim();

  if (firstName) payload.first_name = firstName;
  if (lastName) payload.last_name = lastName;
  if (email) payload.email = email;
  if (phone) payload.phone = phone;
  if (bio) payload.bio = bio;
  if (profilePictureUrl) payload.profile_picture_url = profilePictureUrl;

  return payload;
};

export const sanitizeAdmin = (admin) => {
  if (!admin) return null;

  const { password_hash, ...safeAdmin } = admin;
  return safeAdmin;
};
