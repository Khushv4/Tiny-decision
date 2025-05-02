import { useParams } from "react-router-dom";
import { useDecisions } from "../context/DecisionContext";
import { useState } from "react";

const DecisionDetail = () => {
  const { id } = useParams();
  const { decisions, updateDecision } = useDecisions();
  const decision = decisions.find(d => d.id === id);
  const [finalChoice, setFinalChoice] = useState(decision?.finalChoice || "");
  const [explanation, setExplanation] = useState(decision?.explanation || "");
  const [reflection, setReflection] = useState(decision?.reflection || "");

  const handleSave = () => {
    updateDecision(id, { finalChoice, explanation, reflection });
  };

  if (!decision) return <p>Decision not found</p>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">{decision.title}</h2>
      <p><strong>Pros:</strong> {decision.pros}</p>
      <p><strong>Cons:</strong> {decision.cons}</p>

      {decision.status === "made" && (
        <>
          <textarea className="w-full p-2 border" placeholder="What did you choose?" value={finalChoice} onChange={(e) => setFinalChoice(e.target.value)} />
          <textarea className="w-full p-2 border" placeholder="Why did you choose it?" value={explanation} onChange={(e) => setExplanation(e.target.value)} />
          <textarea className="w-full p-2 border" placeholder="Reflection (optional)" value={reflection} onChange={(e) => setReflection(e.target.value)} />
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default DecisionDetail;
