import './App.css';
import TopButtons from './components/TopButtons';
import InputAreas from './components/InputAreas';
import Timeline from './components/Timeline';
import TempProfile from './components/TempProfile';
import filteredData from './Api_work/service';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {

  const [area, setArea] = useState({q:'kolkata'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchTest = async () => {
      const message = area.q ? area.q : "current location.";

      toast.info("Fetching weather for " + message);

    await filteredData({ ...area, units}).then(
      (data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      }
    );
  };

  fetchTest();
  }, [area, units]);

  const controlBackground = ()  => {
    if(weather !== null){
      if(weather.main === "Clear")
      return "from-blue-300 to-yellow-200";
    
     if(weather.main === "Clouds") 
      return "from-slate-500 to-blue-400";
    

     if(weather.main === "Mist") 
      return "from-teal-100 to-slate-400";
    

     if(weather.main === "Haze") 
      return "from-sky-600 to-slate-700";
    

     if(weather.main === "Rain") 
      return "from-sky-600 to-slate-700";
    

     if(weather.main === "Snow") 
      return "from-sky-600 to-slate-700";

      if(weather.main === "Thunderstorm") 
      return "from-yellow-600 to-slate-700";

      else 
      return "from-pink-300 to-amber-300";

    }
    

    else 
      return "from-pink-300 to-amber-300"
    
  }
  

  return (
    <div>
    <div className={`container bg-gradient-to-br ${controlBackground()} shadow-xl shadow-gray-400`}>
      <TopButtons setArea={setArea} />
      <InputAreas setArea={setArea} units={units} setUnits={setUnits} />
      {weather &&(
        <div>
          <Timeline weather={weather} />
          <TempProfile weather={weather} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
    <Footer />
    </div>
  );
}

export default App;
