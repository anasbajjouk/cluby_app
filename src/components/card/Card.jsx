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
  removeForm,
}) => {
  return (
    <CardsGrid>
      {existingData && <Pre>{existingData}</Pre>}

      <FormList
        removeForm={removeForm}
        key={uuid()}
        selectedSchema={selectedSchema}
        fields={fields}
        formInitialValues={formInitialValues}
      />
    </CardsGrid>
  )
}

export default Card
