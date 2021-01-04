import React from 'react'
import uuid from 'react-uuid'
import { Formik, Form, FieldArray } from 'formik'
import { FaTrash, FaCheckCircle, FaPlus } from 'react-icons/fa'
import FormField from '../formField/FormField'
import { validateSchema } from './validationSchema'
import { IconHolder } from '../Elements'
import { CardContainer, CardHeader, CardsGrid } from '../card/Card.styles'
import { CardBody } from '../card/Card.styles'
import { storeData } from '../../api'

const FormList = ({ fields, formInitialValues, selectedSchema }) => {
  const regex = fields.map((field) => field.validationRegex)

  return (
    <Formik
      initialValues={{ forms: [formInitialValues] }}
      validationSchema={validateSchema(regex)}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        storeData(selectedSchema, values.forms)
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="forms"
            render={(arrayHelpers) => {
              return (
                <CardsGrid>
                  {values?.forms?.map((_, index) => (
                    <CardContainer key={uuid()}>
                      <CardHeader>
                        <span>#{index + 1}</span>

                        <div style={{ display: 'flex' }}>
                          <IconHolder
                            type="submit"
                            aria-label="submit"
                            status={'check'}
                          >
                            <FaCheckCircle />
                          </IconHolder>
                          <IconHolder
                            aria-label="addForm"
                            type="button"
                            status={'add'}
                            onClick={() => arrayHelpers.insert(index)}
                          >
                            <FaPlus />
                          </IconHolder>
                          <IconHolder
                            aria-label="removeForm"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
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
                              name={`forms.${index}.${field.id}`}
                              title={field.title}
                              placeholder={`Enter ${field.title}`}
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
    </Formik>
  )
}

export default FormList
