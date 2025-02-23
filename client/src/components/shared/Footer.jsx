const Footer = () => {
  return (
    <div className="bg-black text-white">
      {/* Footer Navigation Links */}
      <footer className="container mx-auto p-10 footer sm:footer-horizontal">
        <aside className="flex flex-col items-start">
          <img
            className="w-16 h-16"
            src="https://i.ibb.co.com/kV2MDDKC/small-logo.png"
            alt="Empty Cup Logo"
          />
          <p>
            EmptyCup TechVerse
            <br />
            1000+ houses designed since January 2020
          </p>
        </aside>

        {/** Navigation Sections */}
        {[
          {
            title: "Services",
            links: ["Branding", "Design", "Marketing", "Advertisement"],
          },
          {
            title: "Company",
            links: ["About us", "Contact", "Jobs", "Press kit"],
          },
          {
            title: "Legal",
            links: ["Terms of use", "Privacy policy", "Cookie policy"],
          },
        ].map((section, index) => (
          <nav key={index}>
            <h6 className="footer-title">{section.title}</h6>
            {section.links.map((link, i) => (
              <a key={i} className="link link-hover">
                {link}
              </a>
            ))}
          </nav>
        ))}
      </footer>

      {/* Footer Copyright Section */}
      <footer className="footer footer-center p-4">
        <aside>
          <p>
            Copyright &copy; {new Date().getFullYear()} - All rights reserved by
            EmptyCup TechVerse Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
