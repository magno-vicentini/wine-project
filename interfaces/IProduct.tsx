export interface IProduct {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number
  region: string;
  size: string;
  sommelierComment: string
  type: string
  quantity?: number 
}

export interface IProductData {
  items: IProduct[],
  itemsPerPage: number,
  page: number,
  totalItems: number,
  totalPages: number,
}

export interface IProductProps {
  data: IProduct
}