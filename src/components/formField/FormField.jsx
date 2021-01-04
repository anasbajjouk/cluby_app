import React from 'react'
import { Field, useField } from 'formik'
import { ErrorForm } from '../Elements'

const FormField = ({ title, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{title}</label>
      <input type="text" {...props} />

      {meta.touched && meta.error && <ErrorForm>{meta.error}</ErrorForm>}
    </>
  )
}

export default FormField
