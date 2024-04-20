import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'student' && password === 'password') {
      handleLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12}>
        <h2>Student Login</h2>
      </Grid>
      <Grid item xs={12}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
