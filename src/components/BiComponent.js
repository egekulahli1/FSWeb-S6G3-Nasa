import React from "react";
import "./BiComponent.css";
export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;

  function handleDateChange(event) {
    dateChange(event.target.value);
  }

  return (
    <div class="main-container">
      <div class="text-container">
        <div class="h-container">
          <h1>{data.title}</h1>
          <h2>{data.copyright}</h2>
          <h3>{data.date}</h3>
          <div class="date-input">
            <label htmlFor="apodDate">Choose the Date You Want!</label>
            <input
              type="date"
              name="apodDate"
              onChange={handleDateChange}
              value={currentDate}
            />
          </div>
        </div>
        <div class="explanation-container">
          <p>{data.explanation}</p>
        </div>
      </div>
      <div class="image-container">
          {data.media_type === "image" && (<img src={data.hdurl} alt = {data.title}  />)}
          {data.media_type === 'video' && <iframe src = {data.url}/>}
      </div>
      <div class="video-container">

      </div>
    </div>
  );
}
