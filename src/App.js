import React, { useState }from "react";
import './App.css';

function App() {
  const [city, setCity] = useState("");

function updateCity (event) {
 setCity(event.target.value);
};


  return (
    <div className="App">
      <header className="App-header">
        <div class="cities">
          <ul>
            <li>Lisbon</li>
            <li>Paris</li>
            <li>Sydney</li>
            <li>San Francisco</li>
          </ul>
        </div>
      </header>
    <div>
    
    <form>
<input type="search" placeholder="Enter a city"
value={city}
 onChange={updateCity} />
<button type="submit" > Search </button>
    </form>
    </div>
    </div>
  );
}

export default App;
