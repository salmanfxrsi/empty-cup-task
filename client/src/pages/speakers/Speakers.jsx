import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Speakers = () => {
  // Fetch speakers data
  const { data: speakers = [] } = useQuery({
    queryKey: ["speakers"],
    queryFn: async () => {
      const { data } = await axios.get("/speakers.json");
      return data;
    },
  });

  return (
    <div className="w-11/12 lg:container mx-auto grid 2xl:grid-cols-2 gap-14">
      {speakers.map((speaker) => (
        <div key={speaker._id} className="flex gap-6">
          {/* Speaker Image */}
          <div className="w-44 h-24">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={speaker.image}
              alt={speaker.name}
            />
          </div>

          {/* Speaker Info */}
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">{speaker.name}</h1>
              <h4 className="font-medium bg-amber-800 text-white px-2 rounded-2xl text-sm">
                {speaker.title}
              </h4>
            </div>
            <div className="mt-2">
              <p>
                {speaker.bio.length > 150
                  ? `${speaker.bio.substring(0, 150)}...`
                  : speaker.bio}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;
