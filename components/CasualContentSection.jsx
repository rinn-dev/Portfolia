import Image from "next/image";
import React from "react";

const CasualContentSection = ({ isReversed }) => {
  return (
    <div
      className={`h-screen flex flex-col justify-center items-center px-16 bg-[url('/images/grid.webp')] bg-cover ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      style={{ backgroundPosition: "-230.415px -5.85px" }}
    >
      <div className="lg:flex-1 font-main text-rinn-text-primary leading-loose">
        <h2 className="text-4xl font-bold capitalize mb-10">
          Dig into my universe
        </h2>
        <p className="pb-5 text-base md:text-lg 2xl:text-xl tracking-wide">
          I'm Htet Myat Linn, a full stack developer living in Yangon, Myanmar.
          I'm a young professional who is passionate about what I do. My area of
          expertise is providing digital services, such as landing pages, JAM
          stack websites & e-commerce web applications.
        </p>
        <p className="text-base md:text-lg 2xl:text-xl tracking-wide">
          The key to effective design, in my opinion as a web developer, is
          striking the ideal balance between form and function. My objective is
          to produce elegant and user-friendly websites that support the
          commercial objectives of my clients.
        </p>
      </div>
      <div className="lg:flex-1">
        <Image
          src="/images/rinn-coding.svg"
          alt="Coding Vector - Dig into Htet Myat Linn's Universe"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default CasualContentSection;
