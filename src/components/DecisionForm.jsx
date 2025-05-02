import { useState } from "react";
import { useDecisions } from "../context/DecisionContext";

const DecisionForm = () => {
  const { addDecision } = useDecisions();
  const [title, setTitle] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [status, setStatus] = useState("thinking");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    addDecision({
      id: `decision-${Date.now()}`,
      title,
      pros,
      cons,
      date: new Date().toISOString(),
      status,
      finalChoice: "",
      explanation: "",
      reflection: ""
    });

    setTitle("");
    setPros("");
    setCons("");
    setStatus("thinking");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-zinc-800 border border-gray-300 rounded-lg shadow-md p-12 space-y-5"
    >
      <h2 className="text-3xl font-bold text-white pb-4"> Log a New Decision</h2>

      <input
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Decision Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Pros (optional)"
        value={pros}
        onChange={(e) => setPros(e.target.value)}
        rows={3}
      />

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
        placeholder="Cons (optional)"
        value={cons}
        onChange={(e) => setCons(e.target.value)}
        rows={3}
      />

      <div className="flex items-center gap-3">
        <label className="text-white font-medium">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <option value="thinking" >Still Thinking</option>
          <option value="made" >Decision Made</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-black/50 text-white py-2 px-4 rounded-md transition duration-200 font-semibold"
      >
        Add Decision
      </button>
    </form>
  );
};

export default DecisionForm;

