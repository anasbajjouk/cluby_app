import React from 'react'
import { useField } from 'formik'
import { ErrorForm } from '../Elements'
import { CardBody } from '../card/Card.styles'

const FormField = ({ title, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <CardBody>
      <label htmlFor={props.name}>{title}</label>
      <input {...props} {...field} />

      {meta.touched && meta.error && <ErrorForm>{meta.error}</ErrorForm>}
    </CardBody>
  )
}

export default FormField
