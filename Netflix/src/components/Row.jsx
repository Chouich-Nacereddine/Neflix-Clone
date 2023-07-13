import axios from "axios";
import React, { useEffect, useState } from "react";
import {BsBalloonHeart , BsBalloonHeartFill} from 'react-icons/bs'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'
import Movie from './Movie';


const Row = ({ title, fetchURL, Rowid }) => {
  const [movies, setMovies] = useState([]);
  const [like , setLike] = useState(false)

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const goLeft = () => {
    let slider = document.getElementById("slider"+ Rowid); 
    slider.scrollLeft = slider.scrollLeft -500
  }

  const goRight = () => {
    let slider = document.getElementById("slider" + Rowid); 
    slider.scrollLeft = slider.scrollLeft +500
  }


//   console.log(movies);

  return (
    <div>
      <h2 className="text-[bisque] font-semibold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={goLeft} size={30} className="text-black absolute bg-[bisque] rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 font-bold hidden group-hover:block left-0"/>

        <div id={"slider" + Rowid } className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
        {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
          
          {/* {movies.map((item, index) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-[bisque]">
                <p className="white-space-normal text-xs md:tex-sm font-bold flex flex-col justify-center items-center h-full text-center">
                  {item?.title} 
                  <p className="text-gray-400">Released: {item?.release_date}</p>
                </p>
                <p>
                    {like? <BsBalloonHeartFill className="absolute text-white  bottom-4 right-4 "/> : <BsBalloonHeart className="absolute  text-white bottom-4 right-4 "/>}
                </p>
              </div>
            </div>
          ))} */}
        </div>
        <MdChevronRight onClick={goRight} size={30} className="text-black absolute bg-[bisque] rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 font-bold hidden group-hover:block right-0"/>
      </div>
    </div>
  );
};

export default Row;
