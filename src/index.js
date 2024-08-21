import React from "react";
import ReactDOM from "react-dom/client";
import MovieApp from "./simpleApp/MovieApp";
// import BudgetApp from "./reactHooks/budgetApp/BudgetApp";
// import Hooks from "./reactHooks/hooks/Hooks";
// import DashboardApp from "./reactHooks/tailwind/DashboardApp";
// import HightlightEffects from "./highlighting/HighlightEffects";
// import ComposerEngine from "./composerEngine/Experiment";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const experimentToRun = process.env.REACT_APP_EXPERIMENT_SELECTION;
console.log(process.env);

function experimentToRender(experiment) {
	switch (experiment) {
		case "movieApp":
			return <MovieApp />;
		case "dashboardApp":
			break;
		case "reactHooks":
			break;
		case "budgetApp":
			break;
		case "highlights":
			break;
		case "composerEngine":
			break;
		default:
			return <p>No experiment found/selected</p>;
	}
}

root.render(
	<React.StrictMode>{experimentToRender(experimentToRun)}</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
