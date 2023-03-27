import React from 'react';
import { useFormik } from 'formik';
import SubmitField from '../generics/SubmitField';
import GridStructure from '../generics/GridStructure';
import LinkTo from '../generics/LinkTo';
import AuthLayout from '../layouts/AuthLayout';
import { ForgotPasswordSchema } from './validationSchema';
import useStyles from './styles';
import { useForgotPassword } from './useAuthentication';
import FormField from './FormField';

const FORMIK_PARAMS = {
  initialValues: {
    username: '',
  },
  validationSchema: ForgotPasswordSchema,
}

const ForgotPassword = () => {
  const handler = useForgotPassword()
  const formik = useFormik({
    ...FORMIK_PARAMS,
    onSubmit: handler,
  })

  const classes = useStyles()

  return (
    <AuthLayout>
      <GridStructure item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <FormField label="email" attribute="username" type="email" formik={formik}/>
          <GridStructure item xs={12} className={classes.submitButton}>
            <SubmitField fullWidth disabled={formik.isSubmitting} color="primary" variant="contained" type="submit">
              Get Reset Code
            </SubmitField>
          </GridStructure>
        </form>
      </GridStructure>
      <GridStructure container className={classes.link}>
        <GridStructure item xs={4}>
          <LinkTo href="/login">Back to Login</LinkTo>
        </GridStructure>
      </GridStructure>
    </AuthLayout>
  )
}

export default ForgotPassword
