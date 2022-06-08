import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./components/UI/Header";
import BasedOnWatched from "./components/VideoAreas/BasedOnWatched";
import Titles from "./components/UI/Titles";

function App() {
  return (
    <>
      <NavHeader />
      <Titles />
      <BasedOnWatched />
    </>
  );
}

export default App;
