import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.round(Math.random() * movies.length)];
  const truncateString = (str , num) => {
    if(str?.length > num){
    return str.slice(0 , num) + '...'
    } else {
        return str
    }
  }

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

//   console.log(movie);


  return (
    <div className="w-full h-[70vh]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[70vh] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[15%] p-4 md:p-8 text-justify">
            <h1 className="font-semibold text-white text-3xl">{movie?.title}</h1>
          <div className="my-6">
            <button className="bg-[bisque] px-5 py-3 rounded font-bold mr-4">
              Play
            </button>
            <button className="text-[bisque] px-5 py-3 rounded font-bold border border-[bisque]-300">
              Watch Later
            </button>
          </div>
          <p className="text-gray-200 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full  h-[20vh] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">{truncateString(movie?.overview, 135)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
