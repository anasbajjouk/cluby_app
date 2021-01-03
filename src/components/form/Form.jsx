import React from 'react'
import uuid from 'react-uuid'
import { Formik, Form, FieldArray } from 'formik'
import { FaTrash, FaCheckCircle } from 'react-icons/fa'
import FormField from '../formField/FormField'
import { IconHolder } from '../Elements'
import { validateSchema } from './validationSchema'
import { CardContainer, CardHeader, CardsGrid } from '../card/Card.styles'
import { CardBody } from '../card/Card.styles'
import { storeData } from '../../api'

const FormList = ({
  fields,
  FormIndex,
  formInitialValues,
  selectedSchema,
  removeForm,
}) => {
  const regex = fields.map((field) => field.validationRegex)

  return (
    <Formik
      initialValues={{ forms: [formInitialValues] }}
      validationSchema={validateSchema(regex)}
      onSubmit={(values) => {
        storeData(selectedSchema, values.forms)
      }}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="forms"
            render={(arrayHelpers) => {
              return (
                <CardsGrid>
                  {values?.forms?.map((_, idx) => (
                    <CardContainer key={uuid()}>
                      <CardHeader>
                        <span>#{FormIndex}</span>

                        <div style={{ display: 'flex' }}>
                          <IconHolder type="submit" status={'check'}>
                            <FaCheckCircle />
                          </IconHolder>
                          <IconHolder
                            type="button"
                            onClick={() => removeForm(FormIndex - 1)}
                          >
                            <FaTrash />
                          </IconHolder>
                        </div>
                      </CardHeader>

                      {fields?.map((field) => {
                        return (
                          <CardBody key={uuid()}>
                            <FormField
                              type="text"
                              name={`forms.${idx}.${field.id}`}
                              title={field.title}
                            />
                          </CardBody>
                        )
                      })}
                    </CardContainer>
                  ))}
                </CardsGrid>
              )
            }}
          />
        </Form>
      )}
    />
  )
}

export default FormList