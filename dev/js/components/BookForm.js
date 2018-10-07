import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {addFriendAction} from '../actions/addBookAction'

class BookForm extends Component {
  render() {
    const { handleSubmit, dispatch } = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <center>
        <div>
          <label>isbn</label>
          <Field type="text" component="input" placeholder="isbn" name="isbn"/>
        </div>
        <div>
          <label>title</label>
          <Field type="text" component="input" placeholder="title" name="title" />
        </div>
        <div>
          <label>subtitle</label>
          <Field type="text" component="input" placeholder="subtitle" name="subtitle"/>
        </div>
        <div>
          <label>author</label>
          <Field type="text" component="input" placeholder="author" name="author"/>
        </div>
        <div>
          <label>published </label>
          <Field type="text" component="input" placeholder="published" name="published"/>
        </div>
        <div>
          <label>publisher </label>
          <Field type="text" component="input" placeholder="publisher" name="publisher"/>
        </div>
        <div>
          <label>pages </label>
          <Field type="text" component="input" placeholder="pages" name="pages"/>
        </div>
        <div>
          <label>website </label>
          <Field type="text" component="input" placeholder="website" name="website"/>
        </div>
        <button type="submit">Submit</button>
      </center>
      </form>
    );
  };
}
BookForm = reduxForm({ form: 'BOOKADDED', onSubmit: addFriendAction })(BookForm);
export default connect( undefined, { onSubmit: addFriendAction })(BookForm);
