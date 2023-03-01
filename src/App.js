import React, {useEffect,useState} from "react";
import "./App.css";
import Nasa from './components/nasa';
import {örnekVeri} from "./components/ornekveri";
import axios from "axios";
import Tarih from "./components/tarih";


function App() {
  const [veri, setVeri] = useState(örnekVeri);
  const [tarih, setTarih] = useState(null);

   useEffect(() => {
     axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=kLbdhV1PSv36L7vfCiTzqj5emjksAicyXJ2mraGj&date=${tarih}`)
   .then((response) => setVeri(response.data))
  }, [tarih]);

  function tarihDeğiştirici(tarih){
    let gun = new Date (tarih);
    let gercekTarih = `${gun.getFullYear()}-${gun.getMonth()+1}-${gun.getDate()}`
    setTarih(gercekTarih);
  };


  return (
    <div className="App">
      <Nasa data = {veri}/>;
      <Tarih değiştirici = {tarihDeğiştirici}/>
    </div>
  );
}

export default App;
