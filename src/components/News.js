import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9a6caaf05b71437ea3a9cd03c21cc1fb&page1&pagesize=15";
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        loading: false,
        totalResults: data.totalResults,
      });
    } catch (e) {
      console.log("No");
    }
  }

  handlePreviousClick = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9a6caaf05b71437ea3a9cd03c21cc1fb&page=${
        this.state.page - 1
      }&pagesize=15`;
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        loading: false,
        page: this.state.page - 1,
      });
    } catch (e) {
      console.log("No");
    }
  };
  handleNextClick = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9a6caaf05b71437ea3a9cd03c21cc1fb&page=${
        this.state.page + 1
      }&pagesize=15`;
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        loading: false,
        page: this.state.page + 1,
      });
    } catch (e) {
      console.log("No");
    }
  };
  render() {
    return (
      <div className="container my-5">
        <h2 id="pageTitleColor">Web-Hacks Top Updates</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-4 d-flex justify-content-center pt-5"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between pt-5">
          <div
            type="button"
            className="btn fw-semibold"
            id="pn-buttons"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </div>
          <div
            type="button"
            className="btn fw-semibold"
            id="pn-buttons"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </div>
        </div>
      </div>
    );
  }
}
