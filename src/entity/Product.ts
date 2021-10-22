export interface ProductI {
  id: string;
  title: string;
  description: string;
  discount: number;
  price: number;
  end_date: string;
  location: string;
  orgName: string;
  phone: number;
  category: {
    code: string;
    name: string;
  };
  imgUrl: string;
}

export type ProductCardType = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discountPercent: number;
};
