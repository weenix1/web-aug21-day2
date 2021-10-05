import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LastestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Welcome />
      <LastestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
