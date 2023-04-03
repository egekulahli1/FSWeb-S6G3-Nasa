import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import BiComponent from './components/BiComponent';


function App() {
  const [apodData, setApodData] = useState('asdf');
  const [datePicker, setDatePicker] = useState(new Date('2022-12-31').toISOString().slice(0,10));
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'ho4esds7zf0WGtCBRieeHYAYbQQBjVo1dmnvWOCR',
          date: datePicker
        },
      })
      .then(response => {
        setApodData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [datePicker]);

  return (
    <div className="App">
      <BiComponent data = {apodData} dateChange={setDatePicker} currentDate = {datePicker}/>
    </div>
  );
}

export default App;

//api key = ho4esds7zf0WGtCBRieeHYAYbQQBjVo1dmnvWOCR