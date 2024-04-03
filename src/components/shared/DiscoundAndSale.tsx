import React from "react";
import Banner from "../../../public/images/banner-4.jpg";
import { TypographyH1 } from "../ui/Typography";
import ButtonStyle from "../design-system/ButtonStyle";
import Icon from "./Icon";
import CountDownTimer from "./CountDownTimer";

const DiscoundAndSale = () => {
  const endDate = new Date("2024-04-01T00:00:00");
  return (
    <div className="container-xxl mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="col-span-2">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden min-h-96 relative"
            style={{
              backgroundImage: `url(${Banner.src})`,
            }}
          >
            <div className="max-w-[500px] absolute top-1/2 translate-y-[-50%] left-6">
              <span className="text-color_1 text-xl font-bold">
                USE CODE: SALE35%
              </span>
              <TypographyH1 className="mb-4">
                Heavy On Features Light On Price
              </TypographyH1>
              <div className="flex flex-col gap-4">
                <span>AMAZING DISCOUNTS AND DEALS</span>
                <ButtonStyle icon={<Icon name="ShoppingCart" />}>
                  Shop Now
                </ButtonStyle>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-color_1 rounded-2xl text-center flex justify-center flex-col">
          <div className="p-4">
            <span className="text-color_1 text-xl font-bold">
              ONLY FOR TODAY
            </span>
            <TypographyH1 className="mb-4">Deal Of The Day</TypographyH1>
            <span>
              Deal of the Day for deals on consumer electronics. Watch for many
              other great daily offers.
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <CountDownTimer endDate={endDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoundAndSale;
