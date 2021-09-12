import "./App.css";
import HomePage from "../src/components/HomePage/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPage from "./components/UserPage/index";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/user/:userId" component={UserPage} />
					<Route>404 Page Not Found!</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
