import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// Import Montserrat font
import '@fontsource/montserrat';
// import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  fontFamily: 'Montserrat, Arial, sans-serif', // Set Montserrat as the font
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false); // Loading state
  const [open, setOpen] = React.useState(false);
  const [redirectUri, setRedirectUri] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect_uri');
    if (redirect) {
      setRedirectUri(redirect);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) {
      return;
    }

    setLoading(true); // Start loading animation

    const params = new URLSearchParams(window.location.search);
    const client = params.get('client') || 'compro'; // Default to 'compro'
    const loginEndpoint = client === 'academy' 
      ? 'https://academy.example.com/oauth/login' 
      : 'https://compro.example.com/oauth/login';
  
    const payload = {
      email,
      password,
      client,
    };

    try {
      const response = await fetch('https://3wzg6m6x-6969.asse.devtunnels.ms/oauth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login berhasil!');
        
        if (redirectUri) {
          const token = data.access_token;
          const user = JSON.stringify(data.user);
          window.location.href = `${redirectUri}?token=${token}&user=${encodeURIComponent(user)}`;
        }
      } else {
        const errorData = await response.json();
        switch (errorData.message) {
          case 'Invalid email or password':
            alert('Login Failed: Invalid email or password.');
            break;
          case 'Email not found':
            alert('Login Failed: Email not found.');
            break;
          default:
            alert('Login Failed: Terjadi kesalahan. Silakan coba lagi.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login Failed: Server down, please try again later.');
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography 
        component="h1" 
        variant="h4" 
        sx={{ 
          width: '100%', 
          fontSize: 'clamp(2rem, 10vw, 2.15rem)', 
          fontFamily: 'Montserrat, Arial, sans-serif' 
        }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email" sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
          />
        </FormControl>
        <FormControl>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        />
        <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          {loading ? <CircularProgress size={24} /> : 'Sign in'}
        </Button>
      </Box>
    </Card>
  );
}
