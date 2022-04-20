import './App.css';
import SelectBox from './components/SelectBox';
import WeatherCard from './components/WeatherCard';
import {useState} from "react";

function App() {
  const [snow, setSnow] = useState("")

  return (
    <div className="container">
      <div className='row'>
        <h1 className='title'>Hüseyin Yazıcı Weather</h1>
        <SelectBox />
        <WeatherCard setSnow={setSnow} />
        <div dangerouslySetInnerHTML={{ __html:snow }} />
      </div>
    </div>
  );
}

export default App;
