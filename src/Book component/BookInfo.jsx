import React from "react";

function BookInfo({year, genre, rating, description}){
    return (
      <div>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <p>Rating: {rating}</p>
        <p>{description}</p>
      </div>
    );
}