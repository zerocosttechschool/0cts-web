import Marquee from "react-fast-marquee";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  gradient?: boolean;
  gradientColor?: string;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marque: React.FC<MarqueeProps> = ({
  children,
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
      {children}
    </Marquee>
  );
};
