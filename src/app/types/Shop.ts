export type ShopType = 'FRANCHISE' | 'REGULAR';

export type Shop = {
  id: string;
  name: string;
  address: string;
  type: ShopType;
  imageUrl: string;
};

export type ParsedAddress = {
  street: string;
  city: string;
};
