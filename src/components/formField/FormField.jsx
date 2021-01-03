import React from 'react'
import { useField, Field } from 'formik'
import { ErrorForm } from '../Elements'

const FormField = ({ title, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label>{title}</label>
      <Field {...field} {...props} />

      {meta.touched && meta.error && <ErrorForm>{meta.error}</ErrorForm>}
    </>
  )
}

export default FormField
