import Image from "next/image";

export const homepage = {
  intro: {
    title: "Dig into my universe",
    paragraphs: [
      "I'm Htet Myat Linn, a full stack developer living in Yangon, Myanmar. I'm a young professional who is passionate about what I do. My area of expertise is providing digital services, such as landing pages, JAM stack websites & e-commerce web applications.",
      "The key to effective design, in my opinion as a web developer, is striking the ideal balance between form and function. My objective is to produce elegant and user-friendly websites that support the commercial objectives of my clients. Please get in touch if you're seeking a web engineer who can assist you in growing your company. I am eager to begin working on your project!",
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
    id: "home",
  },
  about: {
    title: "What I'm an expert at",
    paragraphs: [
      "I offer digital services to companies in various industries with high performance and high quality digital products. When I develop a website, my aim is to craft a website with user-friendly design, better google lighthouse score and high SEO ranking whatever the client’s budget is.",
      "Without an online presence, it's nearly hard to succeed in the commercial world nowadays. Any business must have a website in order to function properly. Potential buyers can more easily see your products or services thanks to the internet.",
      "There is no need to go any farther if you want a web engineer you can trust. To learn how I can assist you in building the ideal website for your company, get in contact with me right away.",
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
