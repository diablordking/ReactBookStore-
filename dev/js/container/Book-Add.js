import BookForm from '../components/BookForm'
import {addFriendAction} from '../actions/addBookAction'
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookAdd extends Component {
  constructor(props) {
      super(props);
  }
handleSubmit (values)
{

 (
   data = {
         isbn: values.isbn,
         title: values.title,
         subtitle: values.subtitle,
         author: values.author,
         published: values.published,
         publisher: values.publisher,
         pages: values.pages,
         website: values.website
     }) => (
  this.props.addFriendAction(data))
}
render() {
  return (<div>
  <BookForm onSubmit={this.handleSubmit} />
</div>
);
}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFriendAction}, dispatch)
}

export default connect(null,mapDispatchToProps)(BookAdd);
