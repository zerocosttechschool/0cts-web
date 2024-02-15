import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  direction?: "left" | "right" | "up" | "down";
  gradient?: boolean;
  gradientColor?: string;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const MARQUEE_ITEMS = 10;
const IMAGE_SIZE = 25;

export const Marque = ({
  direction = "left",
  gradient = false,
  gradientColor = "black",
  speed = 40,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) => {
  return (
    <Marquee
      gradient={gradient}
      gradientColor={gradientColor}
      speed={speed}
      pauseOnHover={pauseOnHover}
      direction={direction}
      className={className}
    >
      {Array(MARQUEE_ITEMS)
        .fill(Math.random())
        .map((_, index) => (
          <div key={`marquee-item-${index}`} className="flex justify-evenly gap-3">
            <p className="ml-5">ZERO COST TECH SCHOOL</p>
            <Image src={"/images/star.svg"} width={IMAGE_SIZE} height={IMAGE_SIZE} alt="star" />
          </div>
        ))}
    </Marquee>
  );
};
