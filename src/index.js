import React from "react";
import ReactDOM from "react-dom/client";
import MovieApp from "./simpleApp/MovieApp";
// import BudgetApp from "./reactHooks/budgetApp/BudgetApp";
// import Hooks from "./reactHooks/hooks/Hooks";
// import HightlightEffects from "./highlighting/HighlightEffects";
// import Experiment from "./composerEngine/Experiment";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const experimentToRun = process.env;

root.render(
	<React.StrictMode>
		{}
		<MovieApp />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
