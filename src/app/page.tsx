import Categoried from "@/components/categoried";
import BannerVideo from "@/components/home/BannerVideo";
import FollowUs from "@/components/home/FollowUs";
import OutstandingProducts from "@/components/home/OutstandingProducts";
import Subscribe from "@/components/shared/Subscribe";
import BannerHome from "@/components/shared/BannerHome";
import ListCategoried from "@/components/shared/ListCategoried";
import DiscoundAndSale from "@/components/shared/DiscoundAndSale";
import ScrollBanner from "@/components/shared/ScrollAnimation";
import FeaturedProduct from "@/components/shared/DiscountProduct";
import DiscoundProduct from "@/components/shared/DiscountProduct";
import ListProductBigSale from "@/components/shared/ListProductBigSale";

export default function Home() {
  const items = [
    <h1 className="title pr-10 text-color_1" key="my-key-1">
      Sale Upto 50% Off Today
    </h1>,
    <h1 className="title style-2" key="my-key-2">
      New Arrival
    </h1>,
  ];

  return (
    <>
      <BannerHome />

      <ListCategoried />

      <DiscoundAndSale />

      <ScrollBanner elments={items} />

      <Categoried />

      <BannerVideo />

      <OutstandingProducts />

      <DiscoundProduct />

      <ListProductBigSale />

      <FollowUs />

      <Subscribe />
    </>
  );
}
