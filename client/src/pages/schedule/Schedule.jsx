import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Schedule = () => {
  // Fetch schedule data using React Query
  const { data: schedule = [] } = useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const { data } = await axios.get("/schedule.json");
      return data;
    },
  });

  return (
    <div className="container mx-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-amber-800 text-white">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Topic</th>
            <th className="border border-gray-300 px-4 py-2">Speaker</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(({ _id, date, time, topic, speaker }) => (
            <tr key={_id} className="border-b border-gray-200">
              <td className="border border-gray-300 px-4 py-2">{date}</td>
              <td className="border border-gray-300 px-4 py-2">{time}</td>
              <td className="border border-gray-300 px-4 py-2">{topic}</td>
              <td className="border border-gray-300 px-4 py-2">{speaker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
