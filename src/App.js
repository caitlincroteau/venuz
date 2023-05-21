import "./App.css";
// import logo from "./components/images/venuz-logo-star.png";
import background from "./images/venuz_background.png";
import useData from "./components/useData";
import Venues from "./components/Venues";
import MapContainer from "./components/MapContainer";

function App() {
  const { venues, setVenues } = useData();

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#816bfe",
      }}
    >
      <h1>Welcome to Venuz!</h1>
      <Venues venues={venues} />
      <MapContainer />
    </div>
  );
}

export default App;
