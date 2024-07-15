import React  from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
       <form> 
        <input
        type="search"  
        placeholder="Enter a city"
        required
        class="search-form-submit"
        
        />
        <input type="submit" value="Search" 
        class="search-form-input" />
       </form>
    
       
      <div className="container">
        <h1>San Francisco</h1>
        <div className="temperature" >
        <div className="description">
        <p>Sunday 19:42, scattered clouds </p>
         <p>Humidity: 70%, Wind: 4.63km/h </p>
        </div>
        
        
          <h2 className="temps">
            <em>🌤️{20}</em>
            <span>°C</span>
            </h2>
           
        </div>

        <div className="temp-data">
          <div className="row">
            <div className="col">
              Sun
              <br />
              🌦️
              <br />
              21° 14°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Mon
              <br />
              🌩️
              <br />
              18° 14°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Tue
              <br />
              ☁️
              <br />
              18° 13°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Wed
              <br />
              🔆
              <br />
              18° 13°
            </div>
          </div>
          
          
          <div className="row">
            <div className="col">
              Thur
              <br />
              ☀️
              <br />
              19° 14°
            </div>
          </div>
        </div>
      </div>
        <footer>
        <p>This project was coded by  Elizabeth Lavender
          and is <a href="https://github.com/Lizernz/weather-react" 
          target="_blank" rel="noopener noreferrer">open-sourced on Github</a> and hosted on <a href="https://lizernz-weather-react.netlify.app"
          target="_blank" rel="noopener noreferrer">Netlify</a>.
        </p>
        </footer>
        </div>
       </div>
  );
}

export default App;
