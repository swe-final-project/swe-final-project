import { redirect } from "next/dist/server/api-utils";
import React from "react";
import GoogleLogin from "react-google-login";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: null
    };
  }

  onSuccess = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.profileObj
    });

  };

  onFailure = (error) => {
    console.error(error);
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <h2>Welcome, {this.state.user.name}!</h2>
            <img src={this.state.user.imageUrl} alt={this.state.user.name} />
          </div>
        ) : (
          <GoogleLogin
            clientId="865652350661-h785grqcc1jvpd2du10b4sg5artj9hgt.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    );
  }
}

export default Login;
