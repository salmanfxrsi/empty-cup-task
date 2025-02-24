const sponsorLogos = [
  "https://i.ibb.co.com/BKt51cnK/img-icons8.png",
  "https://i.ibb.co.com/6R9nmmRK/img-icons8.png",
  "https://i.ibb.co.com/RThbywq4/img-icons8.png",
  "https://i.ibb.co.com/G4sxmgK8/img-icons8.png",
  "https://i.ibb.co.com/1w21WMP/img-icons8.png",
  "https://i.ibb.co.com/3mGXCCKG/img-icons8.png",
  "https://i.ibb.co.com/svmxkX07/img-icons8.png",
];

const Sponsors = () => {
  return (
    <div>
      {/* Sponsor Logos Section */}
      <div className="flex flex-wrap gap-24 justify-center">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            className="w-32 h-32"
            src={logo}
            alt={`Sponsor ${index + 1}`}
          />
        ))}
      </div>

      {/* Sponsor Call to Action */}
      <div className="bg-amber-800 py-12 flex justify-center mt-24">
        <h1 className="text-white font-bold text-4xl uppercase">
          Be Our Sponsor
        </h1>
      </div>

      {/* Contact Section */}
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* Contact Info Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Now!</h1>
            <p className="py-6">
              Join us as a sponsor and gain exposure to a diverse audience while
              supporting innovation and growth. Together, we can make a
              significant impact!
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              {["Name", "Email", "Message"].map((label) => (
                <div className="form-control" key={label}>
                  <label className="label">
                    <span className="label-text">{label}</span>
                  </label>
                  {label === "Message" ? (
                    <textarea
                      name={label.toLowerCase()}
                      className="textarea"
                      rows={4}
                      required
                    />
                  ) : (
                    <input
                      type={label === "Email" ? "email" : "text"}
                      name={label.toLowerCase()}
                      className="input input-bordered"
                      required
                    />
                  )}
                </div>
              ))}
              <div className="form-control mt-6">
                <button className="btn bg-amber-800 text-white w-full transition-all hover:bg-[#7a3c35]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
