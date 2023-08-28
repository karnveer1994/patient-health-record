import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ForgotPassword: React.FC = () => {
  const [showOTPInput, setShowOTPInput] = useState(false);

  const handleEmailPhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTPInput(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LockOutlinedIcon sx={{ fontSize: 50, color: '#0d1875' }} />
        <Typography component="h1" variant="h5">
          Reset Your Password
        </Typography>
        {!showOTPInput ? (
          <form onSubmit={handleEmailPhoneSubmit}>
            <Typography
              component="p"
              variant="body2"
              sx={{ textAlign: 'center', padding: '16px' }}
            >
              Enter your email address or phone number to receive a password reset link.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailPhone"
              label="Email or Phone"
              name="emailPhone"
              autoComplete="email"
              autoFocus
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </form>
        ) : (
          <form>
            <Typography
              component="p"
              variant="body2"
              sx={{ textAlign: 'center', padding: '16px' }}
            >
              An OTP has been sent to your email address or phone number. Enter the OTP below.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="otp"
              label="One-Time Password (OTP)"
              name="otp"
              autoComplete="off"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify OTP
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPassword;