import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Music_Download from './pages/main_music';
import HakuDetector from './pages/download';
import Terms from './pages/terms'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Music_Download} exact />
      <Route path="/hakudetector" component={HakuDetector} exact />
      <Route path="/terms" component={Terms} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
