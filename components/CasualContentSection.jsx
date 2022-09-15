import React from "react";

const CasualContentSection = ({
  data: { isReversed, title, paragraphs, image, id },
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col py-8 lg:py-0 justify-start lg:justify-center items-center gap-y-8 px-8 xl:px-16 bg-[url('/images/grid.webp')] bg-cover ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      style={{ backgroundPosition: "-230.415px -5.85px" }}
      id={id}
    >
      <div className="lg:flex-1 font-main text-rinn-text-primary leading-loose">
        <h2 className="text-4xl font-bold capitalize mb-10">{title}</h2>
        {paragraphs.map((para, index) => (
          <p
            className={`${
              paragraphs.length == index - 1 ? "" : "pb-5"
            } text-base md:text-lg 2xl:text-xl tracking-wide 2xl:leading-[1.7]`}
            key={index}
          >
            {para}
          </p>
        ))}
      </div>
      <div className="lg:flex-1">{image}</div>
    </div>
  );
};

export default CasualContentSection;
