import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Paper, Typography } from '@material-ui/core';
import withReducer from '../../store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function Register(props) {
  const dispatch = useDispatch();
  const {errors} = useSelector(state => state.auth.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  console.log(errors);

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name] : e.target.value})
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    dispatch(Actions.registerUser(userInfo))
  }

  return (
    <div className="flex h-screen w-1/3 items-center mx-auto">
      <Container maxWidth="md" className="App">
        <Paper elevation={3} className="rounded-3xl pb-10">
          <img src="/logo.png" alt="Text Logo" width="300" className="mt-5 mx-auto" />
          <div>
          <TextField
            value={userInfo.name}
            label="Name"
            className="mt-8 w-2/3 pb-1.5"
            name="name"
            error={errors.name}
            helperText={errors.name && errors.name}
            onChange={handleChange}
          />
          <TextField
            value={userInfo.email}
            label="Email"
            className="mt-8 w-2/3 pb-1.5"
            name="email"
            error={errors.email}
            helperText={errors.email && errors.email}
            onChange={handleChange}
          />
          <TextField
            value={userInfo.password}
            type={showPassword ? 'text' : 'password'}
            label="Password"
            className="mt-8 w-2/3 pb-1.5"
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
                    {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                  </IconButton>
                </InputAdornment>
              </InputAdornment>,
            }}
          />
          <TextField
            value={userInfo.password2}
            type={showPassword ? 'text' : 'password'}
            label="Confirm Password"
            className="mt-8 w-2/3 pb-1.5"
            name="password2"
            onChange={handleChange}
            error={errors.password2}
            helperText={errors.password2 && errors.password2}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Icon>visibility</Icon> : <Icon>visibility_off</Icon>}
                  </IconButton>
                </InputAdornment>
              </InputAdornment>,
            }}
          />
          </div>
          <Button onClick={handleSubmit} variant="contained" component={Link} to="/admin/dashboard" color="primary" elevation={3} className="py-2 text-xl font-bold w-2/3 rounded-md mx-auto mt-8">
            Sign Up
          </Button>
          <br />
          <Link variant="h6" className="mt-10" to="login">Go to Login</Link>
        </Paper>
      </Container>
    </div>
  );
}

export default withReducer('auth', reducer)(Register);
