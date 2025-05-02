import { Link } from "react-router-dom";
import { useDecisions } from "../context/DecisionContext";

const History = () => {
  const { decisions } = useDecisions();

  return (
    <div className="max-w-7xl mx-auto space-y-6 bg-zinc-800 rounded-lg p-12">
      <h2 className="text-3xl font-bold text-white">Decision History</h2>

      {decisions.length === 0 && (
        <p className="text-gray-300">No decisions yet.</p>
      )}

      {decisions.map((d) => {
        const isThinking = d.status === "thinking";
        const cardBg = isThinking ? "bg-yellow-100" : "bg-green-100";

        return (
          <div
            key={d.id}
            className={`border border-gray-300 rounded-lg shadow-md p-6 space-y-2 ${cardBg}`}
          >
            <h3 className="text-xl font-semibold text-gray-900">{d.title}</h3>
            <p className="text-sm text-gray-700">
              Date: {new Date(d.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-700">
              Status: {isThinking ? "  Still Thinking" : "Completed"}
            </p>
            {d.status === "made" && (
              <p className="text-sm text-black">
                Chosen: <strong>{d.finalChoice || "Not Specified Yet"}</strong>
              </p>
            )}
            <Link
              to={`/reflect/${d.id}`}
              className="text-orange-600 underline text-sm inline-block mt-2 hover:text-orange-800 transition"
            >
              {isThinking ? "Reflect Now" : "View / Update Reflection"}
            </Link>
            <div
              className={`mt-3 h-2 rounded ${
                d.reflection && d.reflection.includes("regret")
                  ? "bg-red-400"
                  : "bg-green-400"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
