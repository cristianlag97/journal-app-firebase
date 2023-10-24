import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../../components';
import useForm from '../../hooks/useForm';
import { startCreatingUser } from '../../store/auth/thunks';


const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'La clave debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChanged,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm({
    displayName: '',
    email:'',
    password: '',
  }, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreatingUser(formState));
  }

  return (
      <AuthLayout title='Crear cuenta'>

        <form
          onSubmit={onSubmit}
          className='animate__animated animate__fadeIn animate__faster'
        >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="John due"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChanged}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChanged}
                error={!!emailValid  && formSubmitted}
                helperText={emailValid}
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
                error={!!passwordValid  && formSubmitted}
                helperText={passwordValid}
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

            <Grid item xs={12}>
              <Button
                variant='contained'
                fullWidth
                type='submit'
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
        
  )
}
