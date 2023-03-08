import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=37fe60cbfce74faeafd7e9d0b37cebbc&page=${page}&pageSize=9 `;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(20);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=37fe60cbfce74faeafd7e9d0b37cebbc&page=${page}&pageSize=9 `;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  News.defaultProps = {
    country: "in",
    category: "science",
  };
  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  document.title = "NEWSmonkey - " + props.category1;
  return (
    <div className="container mt-4">
      <h1 className="text-center" style={{ margin: "30px" , marginTop:"90px"}}>
        NewsMonkey - Top Headlines From {props.category1}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4">
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container mt-3 mb-3 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button "
              className="btn btn-dark"
              onClick={this.handlPrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 10)
              }
            >
              Next &#8594;
            </button>
          </div> */}
    </div>
  );
};

// handlNextClick = async () => {
//   this.setState({ page: this.state.page + 1 });
//   this.updateNews();
// };

// handlPrevClick = async () => {
//   this.setState({ page: this.state.page - 1 });
//   this.updateNews();
// };

export default News;
