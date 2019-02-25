import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './components/Header'
import ImageGallery from './components/ImageGallery'

class App extends Component {




  render() {

    
    return (


        <BrowserRouter>
            <div className="App">
              <Header/>
                <Switch>
                  <Route exact path="/imagegallery" component={ImageGallery} />
                </Switch>
            </div>
        </BrowserRouter>




    );
  }
}


export default App;
