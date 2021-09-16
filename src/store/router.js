import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import Splash from "../components/Splash"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import Admin from "../components/Admin"
// import App from './containers/App/App';
// import asyncComponent from './helpers/AsyncFunc';
// import Auth0 from './helpers/auth0';
const RestrictedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/login`,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);
const PublicRoutes = ({ history, isAuthenticated }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path='/'
        component={Splash}
      />
      <Route
        exact
        path='/login'
        component={Login}
      />

      <Route
        exact
        path='/signup'
        component={Register}
      />
      {/* <Route
        exact
        path={`${process.env.PUBLIC_URL}/signin`}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      /> */}
      {/* <RestrictedRoute
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={App}
        isAuthenticated={isAuthenticated}
      /> */}
      <Route
        path='/admin'
        component={Admin}
        isAuthenticated={isAuthenticated}
      />
    </div>
  </ConnectedRouter>
);

// export default connect(state => ({
//   isLoggedIn: state.auth.idToken !== null,
// }))(PublicRoutes);
export default PublicRoutes