import { describe, it, expect } from 'vitest';
import { parseAddress } from '../parseAddress';

const errorMessage = 'Invalid address format';

describe('parseAddress', () => {
  it('should parse a simple address without a zip code', () => {
    const result = parseAddress('ul. Główna 1, Warszawa');
    expect(result).toEqual({
      street: 'ul. Główna 1',
      city: 'Warszawa',
    });
  });

  it('should parse an address with a zip code after the comma', () => {
    const result = parseAddress('ul. Główna 1, 00-001 Warszawa');
    expect(result).toEqual({
      street: 'ul. Główna 1',
      city: 'Warszawa',
    });
  });

  it('should parse an address with a zip code before the comma', () => {
    const result = parseAddress('ul. Główna 1 00-001, Warszawa');
    expect(result).toEqual({
      street: 'ul. Główna 1',
      city: 'Warszawa',
    });
  });

  it('should parse an address with multiple spaces', () => {
    const result = parseAddress('ul.   Główna   1  ,   Warszawa  ');
    expect(result).toEqual({
      street: 'ul. Główna 1',
      city: 'Warszawa',
    });
  });

  it('should throw an error for an address without a comma', () => {
    expect(() => parseAddress('ul. Główna 1 Warszawa')).toThrow(errorMessage);
  });

  it('should throw an error for an empty address', () => {
    expect(() => parseAddress('')).toThrow(errorMessage);
  });

  it('should throw an error for an address with only a comma', () => {
    expect(() => parseAddress(',')).toThrow(errorMessage);
  });

  it('should throw an error for an address with multiple commas', () => {
    expect(() => parseAddress('ul. Główna 1, 00-001, Warszawa')).toThrow(errorMessage);
  });
});
