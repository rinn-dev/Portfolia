import React from "react";

const ContactFormSection = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 xl:px-16 py-12 lg:py-0"
    >
      <div className="flex flex-col items-center text-rinn-text-primary">
        <p className="opacity-75 text-base font-title leading-relaxed tracking-wide uppercase mb-4">
          Whats Next
        </p>
        <h3 className="text-[28px] md:text-3xl xl:text-[38px] font-bold capitalize mb-8 font-title fancy-font tracking-wide gradient-text from-[#f36] to-[#f90]">
          Let's Work Together
        </h3>
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-lg md:text-xl font-main mb-2 opacity-70 leading-relaxed">
            I can provide digital solutions for your business! Get online and
            grow faster.
          </p>
          <p className="text-lg font-main md:text-xl leading-relaxed">
            <span className="opacity-70">
              If you have a project idea or want to create your own website,
              just drop me a message at{" "}
            </span>
            <span>mr.htetmyatlinn404@gmail.com</span>
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form
      action="#"
      className="space-y-8 font-main w-full max-w-[500px] mx-auto my-16 [&_label]:text-rinn-text-primary [&_label]:opacity-70 [&_input]:focus-visible:outline-none"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-base font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-rinn-border text-rinn-text-primary text-base rounded-lg block w-full p-2.5 placeholder-gray-400"
          placeholder="name@domain.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-base font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-base text-rinn-text-primary bg-rinn-border rounded-lg shadow-sm placeholder-gray-400 "
          placeholder="Let me know how I can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-base text-rinn-text-primary bg-rinn-border rounded-lg shadow-sm  placeholder-gray-400 "
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-rinn-border mx-auto"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactFormSection;
