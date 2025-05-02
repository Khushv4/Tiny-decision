import { Link } from "react-router-dom";

const DecisionItem = ({ decision }) => {
  return (
    <li className="p-4 border rounded- shadow hover:bg-gray-50">
      <Link to={`/decision/${decision.id}`}>
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{decision.title}</h3>
            <p className="text-sm text-gray-600">{new Date(decision.date).toLocaleDateString()}</p>
          </div>
          <div className="text-sm">
            {decision.status === "thinking" ? (
              <span className="text-yellow-500">🟡 Thinking</span>
            ) : (
              <span className="text-green-600">✅ {decision.finalChoice || "Decided"}</span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default DecisionItem;
