import React , {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
  render() {
    if(!this.props.book) {
    return (  <h2> Select Book </h2>);
    }
    return (
      <div>
      <h3>Title :{this.props.book.title} </h3>
      <h3>Author:{this.props.book.author} </h3>
      <h3>Publisher:{this.props.book.publisher} </h3>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStatetoProps)(BookDetail);
