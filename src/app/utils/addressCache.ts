import { ParsedAddress } from "@app/types/Shop";
import { parseAddress } from "@app/utils/parseAddress";

const addressCache = new Map<string, ParsedAddress>();

export function getParsedAddress(address: string): ParsedAddress {
  if (addressCache.has(address)) {
    return addressCache.get(address)!;
  }

  const parsedAddress = parseAddress(address);
  addressCache.set(address, parsedAddress);
  return parsedAddress;
}
