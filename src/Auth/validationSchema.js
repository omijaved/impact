import * as yup from 'yup'

const username = {
  username: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
}

const password = {
  password: yup
    .string('Enter your password')
    .required('Password is required')
}

const newPassword = {
  password: yup
  .string('Enter your new password')
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
}

export const SignInSchema = yup.object({
  ...username,
  ...password
})

export const ForgotPasswordSchema = yup.object({
  ...username
})

export const ResetPasswordSchema = yup.object({
  ...username,
  ...newPassword,
  code: yup
    .number("Enter the code")
    .required("Validation code is required")
})
