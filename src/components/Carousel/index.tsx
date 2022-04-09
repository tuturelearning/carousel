import React from "react";
import { useInterval } from "ahooks";
import "./index.less";

export interface CarouselOptions {
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  delay?: number;
}

export interface CarouselProps {
  children: React.ReactChild[];
  onChange?: (index: number) => void;
  options?: CarouselOptions;
}

const Carousel: React.FC<CarouselProps> = ({ children, options }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [_delay, setDelay] = React.useState(
    options?.delay || 3000 || undefined
  );
  const prevCount = React.useRef(React.Children.count(children));

  useInterval(() => {
    if (currentIndex === prevCount.current - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, _delay);

  const dotClick = (index: number) => {
    setCurrentIndex(index);
    setDelay(undefined);
    setTimeout(() => {
      setDelay(3000);
    }, 0);
  };
  const createDots = () => {
    let ret = [];
    for (let i = 0; i < prevCount.current; i++) {
      ret.push(
        <div className="dots-item" key={i} onClick={() => dotClick(i)}>
          <div
            className={`dots-item-main ${
              i === currentIndex ? "active" : "clear-animation"
            }`}
          ></div>
        </div>
      );
    }

    return ret;
  };
  const dots = createDots();

  return (
    <div className="carousel">
      <div className="carousel-inner-wrap">
        <div
          className="carousel-inner"
          style={
            {
              transform: `translateX(-${currentIndex * 100}%)`,
            } as React.CSSProperties
          }
        >
          {React.Children.map(children, (child, index) => {
            return (
              <div
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ left: `${index * 100}%` } as React.CSSProperties}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      <div className="carousel-control">{dots}</div>
    </div>
  );
};

export default Carousel;
