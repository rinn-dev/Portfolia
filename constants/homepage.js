import Image from "next/image";

export const homepage = {
  intro: {
    title: (
      <>
        Dig into my{" "}
        <span className="gradient-text from-[#cf0] to-[#6ff]">universe</span>
      </>
    ),
    paragraphs: [
      "I'm Htet Myat Linn, a full stack developer living in Yangon, Myanmar. I'm a young professional who is passionate about what I do. My area of expertise is providing digital services, such as landing pages, JAM stack websites & e-commerce web applications.",
    ],
    image: (
      <Image
        src="/images/rinn-coding.svg"
        alt="Coding Vector - Dig into Htet Myat Linn's Universe"
        width={600}
        height={600}
      />
    ),
    isReversed: false,
    id: "my-universe",
  },
  about: {
    title: (
      <>
        What I'm an{" "}
        <span className="gradient-text from-[#f36] to-[#f90]">expert at</span>
      </>
    ),
    paragraphs: [
      "I offer digital services to companies in various industries with high performance and high quality digital products. When I develop a website, my aim is to craft a website with user-friendly design, better google lighthouse score and high SEO ranking whatever the client’s budget is.",
      "I provide JAM stack websites which are low cost, high performance and suitable for small and medium businesses and the modern MERN technology stack for customized web applications.",
    ],
    image: (
      <Image
        src="/images/rinn-expert-fields.svg"
        alt="Expert Fields - Dig into Htet Myat Linn's Universe"
        width={600}
        height={600}
      />
    ),
    isReversed: true,
    id: "rinn",
  },
};
