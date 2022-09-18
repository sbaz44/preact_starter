import Router from "preact-router";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
    </Router>
  );
}
