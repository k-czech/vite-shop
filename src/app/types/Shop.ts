export type ShopType = 'FRANCHISE' | 'REGULAR';

export interface Shop {
  id: string;
  name: string;
  address: string;
  type: ShopType;
  imageUrl: string;
}

export interface ParsedAddress {
  street: string;
  city: string;
}
