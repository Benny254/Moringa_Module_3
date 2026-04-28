import React from "react";
import "../styles/Hobbies.css";

class Hobbies extends React.Component {
  render() {
    const hobbies = [
      "Coding",
      "Sports",
      "Gaming",
      "Traveling",
      "Music",
      "Photography",
      "Cooking",
      "Reading",
      "Watching Movies",
      "Blogging",
    ];

    return (
      <div className="hobbies-container">
        <h2>My Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              className={index < 3 ? "hobby highlight" : "hobby"}
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hobbies;
