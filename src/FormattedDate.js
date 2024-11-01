import React from "react";

export default function FormattedDate(props) {
  // Define days and months arrays for formatting
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  // Pad hours and minutes with a leading zero if needed
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // Format and return the date as "Friday | November 1 | 09:58"
  return (
    <div>
      {day} | {month} {date} | {hours}:{minutes}
    </div>
  );
}
