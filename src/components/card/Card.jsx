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
    // <>
    //   <CardsGrid>
    //     {existingData && <Pre>{existingData}</Pre>}

    //     <FormList
    //       removeForm={removeForm}
    //       key={uuid()}
    //       selectedSchema={selectedSchema}
    //       fields={fields}
    //       formInitialValues={formInitialValues}
    //     />
    //   </CardsGrid>
    // </>

    <>
      <CardsGrid>
        {existingData && <Pre>{existingData}</Pre>}
        {formInitialValues &&
          dataState?.map((_, index) => {
            return (
              <FormList
                removeForm={removeForm}
                key={uuid()}
                formIndex={index + 1}
                selectedSchema={selectedSchema}
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
