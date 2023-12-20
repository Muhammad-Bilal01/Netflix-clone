import React, { useState, useEffect } from "react";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import "./Home.scss";

import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/original";
const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = "9a7083574d7ca4a26043827c80b3e25e";
const popular = "popular";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const topRated = "top_rated";

const Card = ({ img }) => {
  return <img className="card" onClick={() => {}} src={img} alt="banner" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div>
          {arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  useEffect(() => {
    const fetchPopularData = async () => {
      const {
        data: { results },
      } = await axios.get(`${baseUrl}/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
      //   console.log(popularMovies);
    };

    const fetchUpcomingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${baseUrl}/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchTopRatedData = async () => {
      const {
        data: { results },
      } = await axios.get(`${baseUrl}/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    const fetchNowPlayingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${baseUrl}/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };
    fetchPopularData();
    fetchUpcomingData();
    fetchTopRatedData();
    fetchNowPlayingData();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>

      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Top Rated Movies"} arr={topRatedMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
    </section>
  );
};

export default Home;
