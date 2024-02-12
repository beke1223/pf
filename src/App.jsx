import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import ProjectDetails from "./components/individual_projects";
function App() {
  return (
    <BrowserRouter className="">
      <NavBar />
      <Switch>
        <Route path="/"  element={<HomePage />} />
        <Route path="/ProjectDetail" element={<ProjectDetails />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
