 import React , {Component} from 'react';
 import {bindActionCreators} from 'redux';
 import {connect} from 'react-redux';
 import {selectbook} from '../actions/index'
 import {
    Link
 } from "react-router-dom";
 import BookDetail from '../container/Book-Detail'

 class BookList extends Component {
   constructor() {
     super();
     this.state = {
       type : 'title',
       search : '',
       match :''
     }
   }

  renderList(filteredBook) {
return filteredBook.map((book) => {
  if(this.state.type == "title") {
  return (
 <Link to={`/detail/${book.isbn}`} onClick = {() => (this.props.selectbook(book))
    }
 className="list-group-item">
 Book Title: {book.title} <br />
  </Link>
); }
else if (this.state.type == "author") {
  return (

 <Link to={`/detail/${book.isbn}`} onClick = {() => (this.props.selectbook(book))
    }
 className="list-group-item">
  Book Author : {book.author} <br />
  </Link>
);
}
else if (this.state.type == "publisher") {
  return (
 <Link to={`/detail/${book.isbn}`} onClick = {() => (this.props.selectbook(book))
    }
 className="list-group-item">
  Book Publisher: {book.publisher} <br />
  </Link>
);
}

})
  }

  render () {
    console.log(this.props.books)
    let filteredBook = this.props.books.filter(
      (book) => {
        if(this.state.type == "title") {
        return book.title.indexOf(this.state.search) !== -1;
        }
        else if (this.state.type == "author") {
          return book.author.indexOf(this.state.search) !== -1;

        }
        else if (this.state.type == "publisher") {
          return book.publisher.indexOf(this.state.search) !== -1;
        }
        else {
          return book.title.indexOf(this.state.search) !== -1;
        }
      }
    );

    return (<div>
      <input type= "text" value = {this.state.search}
       onChange= {this.updateSearch.bind(this)} />
       <Link to= '/create'> Create </Link>
      <div >

      <select value={this.state.type} onChange={this.setType.bind(this)} className="form-control">
      <option value ="title" >Title</option>
      <option value = "author">Author</option>
      <option value = "publisher">Publisher</option>>
</select>

      </div>

      <ul className="list-group col-sm-4">
      {this.renderList(filteredBook)}
      </ul>
     </div>
    );
  }

  updateSearch (event) {
    this.setState({search : event.target.value.substr(0,20)});
  }

  setType(event) {
    this.setState({type : event.target.value});
    }
}

function mapStatetoProps(state) {
  return {
    books: state.books
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectbook:selectbook},dispatch);
}

export default connect(mapStatetoProps,matchDispatchToProps)(BookList);
