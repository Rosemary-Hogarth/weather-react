import React from "react";

export default function Date(props) {
  return (
    <h1 id="date">
      {props.time} O'Clock | {props.day} | {props.date}
    </h1>
  );
}
