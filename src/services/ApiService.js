import axios from "axios";

export const fetchArticles = (searchQuery = "mountain", pageNumber = 1) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&page=${pageNumber}&key=14164139-8943874eaa49b60ce964146b7&q=${searchQuery}`
  );
};

export const somethingFunc = () => {};
