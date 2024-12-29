import React, { Component } from 'react';
import NewsItem from './NewsItem';
import spinner from './spinner';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1, // Initialize page state
      totalResults: 0, // Total number of results
    };
  }

  async fetchArticles(page) {
    const pageSize = 5; // Set the fixed page size to 5
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ee992f7b5dc0491e9be71758725ac916&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page,
    });
  }

  async componentDidMount() {
    this.fetchArticles(this.state.page);
  }

  handlePreviousClick = async () => {
    if (this.state.page > 1) {
      this.fetchArticles(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    if (this.state.page < Math.ceil(this.state.totalResults / 5)) {
      this.fetchArticles(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <spinner/>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || ''}
                  description={element.description || ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 5)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}
