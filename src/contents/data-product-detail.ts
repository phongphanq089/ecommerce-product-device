import { productDetailtype } from "@/types";

export const productDetail: productDetailtype = {
  images: [
    "/images/detail-product/image-1.jpg",
    "/images/detail-product/image-2.jpg",
    "/images/detail-product/image-3.jpg",
    "/images/detail-product/image-4.jpg",
  ],
  product: {
    name: "Samsung Galaxy",
    title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    quantity: "20 IN STOCK",
    price: "$30.00",
    discount: "$81.00",
    productInfomation:
      "Fast charging 18W, 50% in 30 min USB Power Delivery 2.0nQi wireless charging",
    SKU: "0093-29",
  },
  policy: [
    { title: "Estimated delivery time 14-30 days" },
    { title: "18 months warranty at Genuine Warranty Center." },
    { title: "Use coupon SS23 to get extra $23 off (only this product)" },
  ],
  tags: ["Accessories", "Electronic", "Game", "Tech Accessories"],
};
