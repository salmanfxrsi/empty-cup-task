import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const KeynoteSpeakers = () => {
  // Fetch keynote speakers data
  const { data: keynoteSpeakers = [] } = useQuery({
    queryKey: ["keynoteSpeakers"],
    queryFn: async () => {
      const { data } = await axios.get("/keynoteSpeakers.json");
      return data;
    },
  });

  return (
    <div className="flex flex-wrap flex-auto gap-10 lg:justify-between justify-center">
      {/* Keynote Speaker Cards */}
      {keynoteSpeakers.map((keynoteSpeaker) => (
        <div key={keynoteSpeaker._id}>
          {/* Speaker Image */}
          <div className="h-[183px] w-[275px]">
            <img
              className="w-full h-full object-cover object-top"
              src={keynoteSpeaker.image}
              alt={keynoteSpeaker.name}
            />
          </div>
          {/* Speaker Name and Role */}
          <div className="flex items-center mt-6 justify-between">
            <h1 className="font-bold text-xl">{keynoteSpeaker.name}</h1>
            <h1 className="font-medium bg-amber-800 text-white px-2 py- rounded-2xl">
              Speaker
            </h1>
          </div>
          <h3>{keynoteSpeaker.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default KeynoteSpeakers;
