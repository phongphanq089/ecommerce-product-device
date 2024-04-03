export interface productDetailtype {
  images: string[];
  product: {
    name: string;
    title: string;
    quantity: string;
    price: string;
    discount: string;
    productInfomation: string;
    SKU: string;
  };
  policy: { title: string }[];
  tags: string[];
}

export interface listProductType {
  badge: string;
  title: string;
  description: string;
  coin: string;
}
