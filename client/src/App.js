import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import { Route, Link } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [urlID, setUrlID] = useState(0);
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <nav>
        <div className="nav-links">
          <Link to="/">MovieList</Link>
          <Link to="/movies">Movie</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/movies/:movieID">
          <Movie items={MovieList} />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch> */}
      <Route exact path="/" render={props => <MovieList {...props} />} />
      <Route match path='/movies/:id' render={props => (
        <Movie
          {...props}
          setUrlID={setUrlID}
          urlID={urlID}
          movies={MovieList}/>
        )}
      />
    </div>
  );
};

export default App;
