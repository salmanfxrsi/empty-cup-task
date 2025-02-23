const Hero = () => {
  return (
    <div className="flex flex-col-reverse 2xl:flex-row justify-between items-center gap-10 text-center 2xl:text-left">
      {/* Hero Contents */}
      <div>
        <h5 className="text-[#151515] font-medium text-xl">
          Startup Nexus Innovate Launch Scale Fast
        </h5>
        <h1 className="text-2xl lg:text-5xl font-bold mt-6 leading-tight">
          From Vision to Venture
          <br />
          Pioneering the Future of Innovation
        </h1>
        <button className="mt-9 bg-[#995448] text-white py-2 px-6 rounded-3xl transition-all hover:bg-[#7a3c35]">
          Register Now
        </button>
      </div>

      {/* Hero Image/Video */}
      <div>
        <iframe
          className="rounded-2xl w-[440px] h-[240px] lg:w-[560px] lg:h-[315px]"
          src="https://www.youtube.com/embed/LNoEQ0Ig9LY?si=Bkc0H12sTKnAZ-1l"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
