import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
      },
      onUpdate: () => {
        setDisplayValue(
          `${prefix}${Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }).format(obj.val)}${suffix}`
        );
      },
    });
  }, { scope: ref });

  return <span ref={ref}>{displayValue || `${prefix}0${suffix}`}</span>;
};

export default AnimatedCounter;
