import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const experimentToRun = process.env.REACT_APP_EXPERIMENT_SELECTION;
const experimentToRun = "movieApp";

function experimentToRender(experiment) {
	switch (experiment) {
		case "movieApp":
			const MovieApp = require("./movieApp/MovieApp").default;
			return <MovieApp />;
		case "dashboardApp":
			const DashboardApp = require("./dashboardApp/DashboardApp").default;
			return <DashboardApp />;
		case "reactHooks":
			const Hooks = require("./reactHooks/Hooks").default;
			return <Hooks />;
		case "budgetApp":
			const BudgetApp = require("./budgetApp/BudgetApp").default;
			return <BudgetApp />;
		case "highlights":
			const HighlightEffects =
				require("./highlights/HighlightEffects").default;
			return <HighlightEffects />;
		case "composerEngine":
			const ComposerEngine =
				require("./composerEngine/ComposerEngine").default;
			return <ComposerEngine />;
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
