import { Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: 'fernando@gmail.com',
  password: '123456',
  displayName: 'Eric Rusinque'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El Correo debe tener una @.'],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  
  } = useForm(formData, formValidations);



  const onSubmit =  ( event ) => {
    event.preventDefault();
    setFormSubmited(true);

    if( !isFormValid ) return;
 
    dispatch( startCreatingWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Crear Cuenta'>

        <h1> Formvalid {isFormValid ? 'valido' : 'Incorrecto '}</h1>    
        <form onSubmit={ onSubmit }>
              <Grid 
                container
              >
                <Grid
                  item xs={ 12 } sx={{ mt: 2}}
                >
                  <TextField
                    label="Nombre Completo"
                    type="text"
                    placeholder="Nombre Completo"
                    fullWidth
                    name='displayName'
                    value={ displayName }
                    onChange={ onInputChange }
                    error={ !!displayNameValid && formSubmited }
                    helperText={ displayNameValid}

                  />
                </Grid>
                <Grid
                  item xs={ 12 } sx={{ mt: 2}}
                >
                  <TextField
                    label="Correo"
                    type="email"
                    placeholder="google@gmail.com"
                    fullWidth
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
                    error={ !!emailValid && formSubmited  }
                    helperText={ emailValid }
                  />
                </Grid>
                <Grid
                  item xs={ 12 } sx={{ mt: 2}}
                >
                  <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
                    error={ !!passwordValid && formSubmited  }
                    helperText={ passwordValid }
                  />
                </Grid>
              
                <Grid
                  container spacing={ 2 } sx={{ mb: 2, mt: 1 }} 
                >
                    <Grid 
                      item 
                      xs={ 12 } 
                      display={ !!errorMessage ?  '' : 'none'}
                    >
                      <Alert
                        severity='error'
                      >
                        {errorMessage}
                      </Alert>
                    </Grid>
                    <Grid item xs={ 12 }>
                      <Button disabled={ isCheckingAuthentication } type='submit' variant="contained" fullWidth>
                        Crear Cuenta
                      </Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                  <Typography sx={{ mr: 1}}>Ya tienes cuenta?</Typography>
                  <Link component={ RouterLink } color="inherit" to="/auth/login">
                    Ingresar
                  </Link>
                </Grid>

              </Grid>

        </form>
    </AuthLayout>
  )
}
