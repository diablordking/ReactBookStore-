
import React from 'react';
import {BrowserRouter ,Route , Switch} from 'react-router-dom';
import BookList from '../container/Book-List'
import BookDetail from '../container/Book-Detail'
import BookAdd from '../container/Book-Add'



const App = (match) => (
  <div>
  <Route path={`/create`} component={BookAdd} />

  <h2>Book List </h2>
  <BookList />
  <hr/>
  <h2>Book Details:</h2>
  <Route path={`/detail/:id`} component={BookDetail} />
  </div>
);

export default App;
