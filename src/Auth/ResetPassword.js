import React from 'react';
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import GridStructure from '../generics/GridStructure';
import SubmitField from '../generics/SubmitField';
import AuthLayout from '../layouts/AuthLayout';
import { VERIFICATION_CODE_LENGTH } from '../Constants';
import { ResetPasswordSchema } from './validationSchema';
import { useResetPassword } from './useAuthentication';
import useStyles from './styles';
import FormField from './FormField';

const formikParams = {
  initialValues: {
    username: '',
    password: '',
    code: ''
  },
  validationSchema: ResetPasswordSchema,
}

const ResetPassword = () => {
  const handler = useResetPassword()
  const formik = useFormik({
    ...formikParams,
    onSubmit: handler,
  })

  const classes = useStyles()

  return (
    <AuthLayout>
      <GridStructure item xs={12}>
        <Typography textAlign='center' variant='caption'>
          Please check your email address for a verification code and input below.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormField label="email" attribute="username" type="email" formik={formik}/>
          <FormField label="new password" attribute="password" type="password" formik={formik}/>
          <FormField attribute="code" type="text" formik={formik} inputProps={{ maxLength: VERIFICATION_CODE_LENGTH }}/>
          <GridStructure item xs={12} className={classes.submitButton}>
            <SubmitField disabled={formik.isSubmitting} color="primary" variant="contained" fullWidth type="submit">
              Update Password
            </SubmitField>
          </GridStructure>
        </form>
      </GridStructure>
    </AuthLayout>
  )
}

export default ResetPassword
