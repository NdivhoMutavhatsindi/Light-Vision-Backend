import test from 'node:test';
import assert from 'node:assert/strict';

import { buildAdminProfileUpdatePayload } from '../src/util/adminProfileUpdate.js';

test('buildAdminProfileUpdatePayload maps profile fields and adds avatar URL', () => {
  const payload = buildAdminProfileUpdatePayload({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '+27 82 111 2222',
    bio: 'Luxury specialist',
  }, 'https://cdn.example.com/avatar.jpg');

  assert.deepEqual(payload, {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@example.com',
    phone: '+27 82 111 2222',
    bio: 'Luxury specialist',
    profile_picture_url: 'https://cdn.example.com/avatar.jpg',
  });
});

test('buildAdminProfileUpdatePayload omits empty values', () => {
  const payload = buildAdminProfileUpdatePayload({ firstName: '  ', lastName: '' }, null);

  assert.deepEqual(payload, {});
});
