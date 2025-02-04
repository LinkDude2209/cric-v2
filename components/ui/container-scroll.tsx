"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = (): [number, number] => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-20, -100] : [-50, -100]
  );

  return (
    <div
      className="h-[50rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

type HeaderProps = {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
};

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

type CardProps = {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
};

export const Card = ({ rotate, scale, children }: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-16 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            child.type === "video" &&
            typeof child.props === "object"
          ) {
            return React.cloneElement(child as React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>>, {
              autoPlay: true,
              muted: true,
              playsInline: true,
              loop: true,
              controls: false,
            });
          }
          return child;
        })}
      </div>
    </motion.div>
  );
};
