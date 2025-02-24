import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/salmanfarsi9005/",
    imgSrc: "https://i.ibb.co.com/Gvd29XJz/img-icons8.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/salmanfxrsi/",
    imgSrc: "https://i.ibb.co.com/4R9KvmvS/img-icons8.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/salman.farsi.259647/",
    imgSrc: "https://i.ibb.co.com/WND9R6nK/img-icons8.png",
    alt: "Facebook",
  },
];

const Contact = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Contact Info Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Now!</h1>
          <p className="py-6">
            Got questions or need assistance? We&apos;re here to help! Fill out
            the form, and our team will get back to you as soon as possible.
            Let’s connect!
          </p>
          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            {socialLinks.map(({ href, imgSrc, alt }) => (
              <Link
                key={alt}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-12" src={imgSrc} alt={alt} />
              </Link>
            ))}
          </div>
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
  );
};

export default Contact;
