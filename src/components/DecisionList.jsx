import { useDecisions } from "../context/DecisionContext";
import DecisionItem from "./DecisionItem";

const DecisionList = () => {
  const { decisions } = useDecisions();

  return (
    <div className="mt-6 ">
      <h2 className="text-lg font-bold">Decision History</h2>
      <ul className="space-y-4 mt-4 rounded-lg">
        {decisions.map(decision => (
          <DecisionItem key={decision.id} decision={decision} />
        ))}
      </ul>
    </div>
  );
};

export default DecisionList;
