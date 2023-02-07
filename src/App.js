import "./App.css";
import logo from "./components/images/venuz-logo-star.png";
import background from "./images/venuz_background.png";
import Map from "./components/map";

function App() {
  return (
    <div className="App" 
    style={{backgroundImage: `url(${background})`,
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#816bfe'
    }}>
      <h1>Welcome to Venuz!</h1>
      <Map />
    </div>
  );
}

export default App;
