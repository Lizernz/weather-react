import React, { useState }from "react";
import './App.css';

function App() {
  const [city, setCity] = useState("");

function updateCity (event) {
 setCity(event.target.value);
}
function handleSubmit (event) {
event.preventDefault();
}


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
      <main>
    
    <form onSubmit={handleSubmit}>
<input type="search" placeholder="Enter a city"
value={city}
 onChange={updateCity} />
<button type="submit" > Search </button>
    </form>
    
    </main>
    </div>
  );
}

export default App;
