import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script src="http://cdn.highcharts.com.cn/highcharts/highcharts.js"></script>
        <Router basename={'/'}>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
        </Router>
      </Router>
    );
  }
}

export default App;
