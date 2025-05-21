import { ParsedAddress } from '@app/types/Shop';

export function parseAddress(address: string): ParsedAddress {
  if (!address || typeof address !== 'string') {
    throw new Error('Nieprawidłowy format adresu. Oczekiwany format: "ulica, miasto"');
  }

  // Usuń wielokrotne spacje i przytnij
  const cleanAddress = address.replace(/\s+/g, ' ').trim();

  // Podziel na części przed i po przecinku
  const parts = cleanAddress.split(',');

  if (parts.length !== 2) {
    throw new Error('Nieprawidłowy format adresu. Oczekiwany format: "ulica, miasto"');
  }

  let street = parts[0].trim();
  let city = parts[1].trim();

  // Usuń kod pocztowy z ulicy (jeśli istnieje)
  street = street.replace(/\d{2}-\d{3}/g, '').trim();

  // Usuń kod pocztowy z miasta (jeśli istnieje)
  city = city.replace(/\d{2}-\d{3}/g, '').trim();

  if (!street || !city) {
    throw new Error('Nieprawidłowy format adresu. Oczekiwany format: "ulica, miasto"');
  }

  return { street, city };
}
