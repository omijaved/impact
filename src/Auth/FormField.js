import GridStructure from "../generics/GridStructure";
import InputField from '../generics/InputField';
import useStyles from './styles';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const FormField = (params) => {
  const { attribute, label, type, formik, ...rest } = params
  const classes = useStyles()

  return (
    <GridStructure item xs={12} className={classes.inputField}>
      <InputField
        fullWidth
        name={attribute}
        label={capitalize(label ? label : attribute)}
        type={type}
        value={formik.values[{attribute}]}
        onChange={formik.handleChange}
        error={formik.touched[attribute] && Boolean(formik.errors[attribute])}
        helperText={formik.touched[attribute] && formik.errors[attribute]}
        {...rest}
      />
    </GridStructure>
  )
}

FormField.defaultProps = {
  label: false
}

export default FormField
