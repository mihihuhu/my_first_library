import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBook from './screens/AddBook'
import EditBook from './screens/EditBook'
import BookDetail from './screens/BookDetail'
import ShowBooks from './screens/ShowBooks'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/addBook' component={AddBook} />
          <Route exact path='/books' component={ShowBooks} />
          <Route exact path='/book/edit/:id' component={EditBook} />
          <Route exact path='/book/:id' component={BookDetail} />


         
        </Switch>

    </Router>
  )
}

export default App