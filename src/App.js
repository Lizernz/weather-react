import React  from "react";
import './App.css';

function App() {
 let temperature = 1;

  return (
    <div className="App">
      <div className="App-header">
       <form> 
        <input
        type="search"  
        placeholder="Enter a city"
        requiredid="search-form-input"
        
        />
        <input type="submit" value="Search" 
        class="search-form-input" />
       </form>
    
    
        <h1>San Francisco</h1>
        <div className="description">
          Sunday 17:26, broken clouds
          <br />
          Humidity: 85, Wind: 2.57km/h
        </div>
        
          <div className="weather-data" >
          <div className="temperature" >
          <h2 className="temps">
            <em>{1}</em>
            <span>°C| F°</span>
            </h2>
            <p className="humidity" >
          Sunday 19:42, scattered clouds
            <br />
            Humidity: 70%, Wind: 4.63km/h
          </p>
        </div>

        <div className="temp-data">
          <div className="row">
            <div className="col">
              Sun
              <br />
              🌕
              <br />
              21° 14°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Mon
              <br />
              🌕
              <br />
              18° 14°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Tue
              <br />
              🌕
              <br />
              18° 13°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Wed
              <br />
              🌕
              <br />
              18° 13°
            </div>
          </div>

          <div className="row">
            <div className="col">
              Thur
              <br />
              🌕
              <br />
              19° 14°
            </div>
          </div>
        </div>
        </div>
        </div>
        <footer>
          <p>This project</p>
        </footer>
       </div> 
  );
}

export default App;
