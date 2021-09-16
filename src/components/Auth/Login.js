import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Paper, Typography } from '@material-ui/core';
import withReducer from '../../store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function Login(props) {
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state.auth.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    dispatch(Actions.loginUser(userInfo))
  }


  return (
    <div className="flex h-screen w-1/3 items-center mx-auto">
      <Container maxWidth="md" className="App">
        <Paper elevation={3} className="rounded-3xl pb-10">
          <img src="/logo.png" alt="Text Logo" width="300" className="mt-5 mx-auto" />
          <div>
            <TextField
              value={userInfo.email}
              label="Email"
              className="mt-8 w-2/3 pb-1.5"
              color="secondary"
              name="email"
              color="primary"
              error={errors.email}
              helperText={errors.email && errors.email}
              onChange={handleChange}
            />
            <TextField
              value={userInfo.password}
              type={showPassword ? 'text' : 'password'}
              label="Password"
              className="mt-8 w-2/3 pb-1.5"
              color="primary"
              name="password"
              error={errors.password}
              helperText={errors.password && errors.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Icon color="secondary">visibility</Icon> : <Icon color="secondary">visibility_off</Icon>}
                    </IconButton>
                  </InputAdornment>
                </InputAdornment>,
              }}
            />
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            component={Link}
            to="/admin/dashboard"
            color="primary"
            elevation={3}
            className="py-2 text-xl font-bold w-2/3 rounded-md mx-auto mt-8">
            LOG IN
          </Button>
          <br />
          <Link variant="h6" className="mt-10" to="/signup">Or create an account</Link>
        </Paper>
      </Container>
    </div>
  );
}

export default withReducer('auth', reducer)(Login);
