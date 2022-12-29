// import logo from "./logo.svg";
import "./App.css";

function App() {
  const getquotes = async () => {
    const fetchdata = await fetch(`https://picsum.photos/`);
    const response = await fetchdata.json();
    console.log(response);
  };
  return (
    <div className="App">
      <button onClick={getquotes}>click heare to featch api</button>
    </div>
  );
}

export default App;
