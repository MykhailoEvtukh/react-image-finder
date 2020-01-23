import React, { Component } from "react";
import * as API from "../../services/ApiService";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

// console.log(API);

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    pageNumber: 1,
    query: "",
    isModalOpen: false,
    bigUrl: ""
  };

  componentDidMount() {
    const { query, pageNumber } = this.state;
    this.getArticles(query, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, query, articles } = this.state;
    if (prevState.pageNumber !== pageNumber || prevState.query !== query) {
      this.getArticles(query, pageNumber);
    }
    if (prevState.articles !== articles && articles.length > 12) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      }, 1000);
    }
  }

  getArticles = (query, page) => {
    this.setState({ isLoading: true });

    API.fetchArticles(query, page)
      .then(res =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...res.data.hits]
        }))
      )
      .catch(err => console.warn(err))
      .finally(() =>
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 500)
      );
  };

  changePage = () => {
    const { articles } = this.state;
    if (articles.length > 0) {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber + 1
      }));
    }
  };

  onSearch = queryParameter => {
    this.setState({ query: queryParameter, articles: [], pageNumber: 1 });
  };

  openModal = bigUrl => {
    this.setState({ isModalOpen: true, bigUrl });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.keyCode === 27)
      this.setState({ isModalOpen: false });

    window.removeEventListener("keydown", this.closeModal);
  };

  render() {
    const { articles, isLoading, isModalOpen, bigUrl } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <ImageGallery items={articles} onOpenModal={this.openModal} />
        {isLoading && <Loader />}
        <Button onChangePage={this.changePage} />
        {isModalOpen && <Modal bigUrl={bigUrl} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default App;
