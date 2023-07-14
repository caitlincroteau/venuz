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
 
    >
      {/* <h1>Welcome to Venuz!</h1> */}
      {/* displays all venues at top of page */}
      {/* <Venues venues={venues} /> */}

      <MapContainer />
    </div>
  );
}

export default App;
