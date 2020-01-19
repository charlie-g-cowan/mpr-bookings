import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>MPR Bookings</h1>
				<a href="https://uclapi.com/oauth/authorise?client_id=9427329059023047.2689244313781199&state=hello">
					<img src="https://s3.eu-west-2.amazonaws.com/uclapi-static/SignInWithUCLSmall.png" />
				</a>
      </div>
    );
  }
}

export default Home;
