import Categoried from "@/components/categoried";
import BannerVideo from "@/components/home/BannerVideo";
import FollowUs from "@/components/home/FollowUs";
import OutstandingProducts from "@/components/home/OutstandingProducts";
import Subscribe from "@/components/shared/Subscribe";
import Banner from "@/components/shared/Banner";

export default function Home() {
  return (
    <>
      <div className="container-xxl mb-16">
        <Banner />
        <Categoried />
      </div>
      <BannerVideo />
      <OutstandingProducts />
      <FollowUs />
      <Subscribe />
    </>
  );
}
