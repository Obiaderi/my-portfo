function Contact() {
  return (
    <div id="contact" className="dark:bg-slate-900">
      <div className="container mx-auto ">
        {/* Top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">CONTACT</h1>
          <h1 className="text-3xl dark:text-white">Have a Question?</h1>
          <p className="w-full md:w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>

        {/* Bottom */}
        <form className="flex flex-col gap-5 items-center mt-5 p-8">
          <input
            className="input-control md:w-1/2"
            type="text"
            placeholder="Name & Surname"
          />
          <input
            className="input-control md:w-1/2"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="input-control md:w-1/2"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
