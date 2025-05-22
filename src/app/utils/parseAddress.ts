import { ParsedAddress } from '@app/types/Shop';

const errorMessage = 'Invalid address format';

export function parseAddress(address: string): ParsedAddress {
  if (!address || typeof address !== 'string') {
    throw new Error(errorMessage);
  }

  const cleanAddress = address.replace(/\s+/g, ' ').trim();
  const parts = cleanAddress.split(',');

  if (parts.length !== 2) {
    throw new Error(errorMessage);
  }

  let street = parts[0].trim();
  let city = parts[1].trim();

  street = street.replace(/\d{2}-\d{3}/g, '').trim();
  city = city.replace(/\d{2}-\d{3}/g, '').trim();

  if (!street || !city) {
    throw new Error(errorMessage);
  }

  return { street, city };
}
