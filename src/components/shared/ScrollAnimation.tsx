import Icon from "./Icon";

interface ScrollBannerProps {
  elments: React.ReactNode[];
}

const ScrollBanner = ({ elments }: ScrollBannerProps) => {
  const numberOfItems = 50;

  const renderRollItems = () => {
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div className="roll-item  py-4 md:py-8 px-8" key={i}>
          <div className="roll-title flex items-center">
            {elments}
            <div className="w-[35px] h-auto ml-6">
              <Icon name="BadgeDollarSign" className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      );
    }
    return items;
  };

  return (
    <div className="scroll-banner  overflow-hidden mb-14">
      <div className="sc-roll-section">
        <div className="slide-scroll flex items-center">
          <div className="roll-box flex ">{renderRollItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;
