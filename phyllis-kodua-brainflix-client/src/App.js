import Header from './Components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import UploadPage from './Components/UploadPage/UploadPage'
import MainPage from './Components/MainPage/MainPage';
import { Component } from 'react';



export default class App extends Component {
  defaultPrevent = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <BrowserRouter>
        <Header defaultPrevent={this.defaultPrevent} />
        <Switch>
          <Route path='/' exact component={MainPage} />
         
          <Route path="/videos/:id" render={props => 
              {return <MainPage {...props} />
            }}
          />
           <Route  path='/upload'  exact component={UploadPage} />

        </Switch>
      </BrowserRouter>
    )
  }


}
