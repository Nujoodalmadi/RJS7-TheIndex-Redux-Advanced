import React, { Component } from "react";
import * as actionCreaters from "./store/actions/index";
import { connect } from "react-redux";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

class AuthorDetail extends Component {
  componentDidMount() {
    this.props.fetchAuthorDetail(this.props.match.params.authorID);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const authorName = `${this.props.author.first_name} ${
        this.props.author.last_name
      }`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={this.props.author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={this.props.author.books} />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthorDetail: authorID =>
      dispatch(actionCreaters.fetchAuthorDetail(authorID))
  };
};

const mapStateToProps = state => {
  return {
    author: state.rootAuthor.author,
    loading: state.rootAuthor.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
