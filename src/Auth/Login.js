import { useContext } from 'react';
import { useFormik } from 'formik';
import AuthLayout from '../layouts/AuthLayout';
import GridStructure from '../generics/GridStructure';
import LinkTo from '../generics/LinkTo';
import sessionContext from '../context/sessionContext';
import SubmitField from '../generics/SubmitField';
import FormField from './FormField';
import { SignInSchema } from './validationSchema';
import useStyles from './styles';
import { useLogin } from './useAuthentication';

const FORMIK_PARAMS = {
  initialValues: {
    username: '',
    password: ''
  },
  validationSchema: SignInSchema
}

const Login = () => {
  const { setSessionState } = useContext(sessionContext)
  const handler = useLogin({ setSessionState })
  const formik = useFormik({
    ...FORMIK_PARAMS,
    onSubmit: handler
  })

  const classes = useStyles()

  return (
    <AuthLayout>
      <GridStructure item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <FormField label="email" attribute="username" type="email" formik={formik}/>
          <FormField attribute="password" type="password" formik={formik}/>
          <GridStructure item xs={12} className={classes.submitButton}>
            <SubmitField disabled={formik.isSubmitting} fullWidth color="primary" variant="contained" type="submit">
              Submit
            </SubmitField>
          </GridStructure>
        </form>
      </GridStructure>
      <GridStructure item xs={12} textAlign='center'>
        <LinkTo href="/forgotPassword">Forgot Password</LinkTo>
      </GridStructure>
    </AuthLayout>
  )
}

export default Login
