import React from 'react'
import uuid from 'react-uuid'
import { Pre } from '../Elements'
import FormList from '../form/Form'
import { CardsGrid } from './Card.styles'

const Card = ({
  existingData,
  formInitialValues,
  dataState,
  fields,
  selectedSchema,
  removeForm
}) => {
  return (
    <>
      <CardsGrid>
        {existingData && <Pre>{existingData}</Pre>}
        {formInitialValues &&
          dataState?.map((dataFields, index) => {
            return (
              <FormList
              removeForm={removeForm}
                key={uuid()}
                FormIndex={index + 1}
                selectedSchema={selectedSchema}
                dataFields={dataFields}
                fields={fields}
                formInitialValues={formInitialValues}
              />
            )
          })}
      </CardsGrid>
    </>
  )
}

export default Card
