import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../../components';
import useForm from '../../hooks/useForm';
import { startGoogleSignIn, startLoginUser } from '../../store/auth/thunks';


export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChanged } = useForm({
    email:'cristian@gmail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginUser(email, password));
  }

  const onGoogleSignIn = (event) => {
    console.log('google signIn');
    dispatch(startGoogleSignIn());
  }

  return (
      <AuthLayout title='Login'>
        <form
          onSubmit={onSubmit}
          className='animate__animated animate__fadeIn animate__faster'
        >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChanged}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="*****"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChanged}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

            <Grid
              item
              xs={12}
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant='contained'
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
        
  )
}
