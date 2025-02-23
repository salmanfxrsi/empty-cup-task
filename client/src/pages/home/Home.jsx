import Hero from "./sections/Hero";
import KeynoteSpeakers from "./sections/KeynoteSpeakers";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-11/12 lg:container mx-auto pb-24">
        <Hero />
      </section>

      {/* Keynote Speakers Section */}
      <section className="w-11/12 lg:container mx-auto pt-12">
        <KeynoteSpeakers />
      </section>
    </>
  );
};

export default Home;
