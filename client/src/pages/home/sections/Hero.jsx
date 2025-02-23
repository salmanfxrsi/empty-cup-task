const Hero = () => {
  return (
    <div className="flex flex-col-reverse 2xl:flex-row justify-between items-center gap-10 text-center 2xl:text-left">
      {/* Hero Contents */}
      <div>
        <h5 className="text-[#151515] font-medium text-xl">
          Tech Innovation Future Growth
        </h5>
        <h1 className="text-2xl lg:text-5xl font-bold mt-6 leading-tight">
          Bridging Ideas To
          <br />
          Reality Shaping Tomorrow
        </h1>
        <button className="mt-9 bg-[#995448] text-white py-2 px-6 rounded-3xl transition-all hover:bg-[#7a3c35]">
          Register Now
        </button>
      </div>

      {/* Hero Image/Video */}
      <div>
        <iframe
          className="rounded-2xl w-[440px] h-[240px] lg:w-[560px] lg:h-[315px]"
          src="https://www.youtube.com/embed/N5oDgHLTEDI?si=bfbF1wIFI5Bg0B2w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
