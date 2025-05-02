import { useParams, useNavigate } from "react-router-dom";
import { useDecisions } from "../context/DecisionContext";
import { useState } from "react";

const Reflect = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { decisions, updateDecision } = useDecisions();

  const decision = decisions.find((d) => d.id === id);
  const [finalChoice, setFinalChoice] = useState(decision?.finalChoice || "");
  const [explanation, setExplanation] = useState(decision?.explanation || "");
  const [reflection, setReflection] = useState(decision?.reflection || "");

  const handleSave = () => {
    updateDecision(id, { finalChoice, explanation, reflection });
    navigate("/history");
  };

  if (!decision)
    return (
      <div className="text-white text-center mt-10 text-lg font-medium">
         Decision not found.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto bg-zinc-800 border border-gray-300 rounded-lg shadow-md p-12 space-y-5">
      <h2 className="text-3xl font-bold text-white pb-4">
        Reflect on: <span className="italic">{decision.title}</span>
      </h2>

      <input
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="What did you decide?"
        value={finalChoice}
        onChange={(e) => setFinalChoice(e.target.value)}
      />

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Why did you make this choice?"
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        rows={3}
      />

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Was it a good decision? (Optional)"
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        rows={3}
      />

      <button
        className="w-full bg-amber-500 hover:bg-black/50 text-white py-2 px-4 rounded-md transition duration-200 font-semibold"
        onClick={handleSave}
      >
        Save Reflection
      </button>
    </div>
  );
};

export default Reflect;
