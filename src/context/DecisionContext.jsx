import { createContext, useContext, useEffect, useState } from "react";

const DecisionContext = createContext();

export const DecisionProvider = ({ children }) => {
  const [decisions, setDecisions] = useState(() => {
    const local = localStorage.getItem("decisions");
    return local ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem("decisions", JSON.stringify(decisions));
  }, [decisions]);

  const addDecision = (decision) => setDecisions([decision, ...decisions]);

  const updateDecision = (id, updated) => {
    setDecisions(
      decisions.map((d) => (d.id === id ? { ...d, ...updated } : d))
    );
  };

  return (
    <DecisionContext.Provider value={{ decisions, addDecision, updateDecision }}>
      {children}
    </DecisionContext.Provider>
  );
};

export const useDecisions = () => useContext(DecisionContext);

