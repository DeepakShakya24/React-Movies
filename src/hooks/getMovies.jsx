import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const getMovies = async () => {
  try {
    const MovieData = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_KEY}`
    );
    return MovieData.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getMovies;
