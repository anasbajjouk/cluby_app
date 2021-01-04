import React from 'react'
import { capitalize } from '../../common/utils'
import { HeaderContainer, NavContainer, SelectSchema } from './Header.styles'

const Header = ({
  listOfSchemas,
  selectedSchema,
  setSelectedSchema,
  schemaDetail,
  addForm,
}) => {
  const { title } = schemaDetail

  return (
    <HeaderContainer>
      <div className="current_schema">
        Current schema:
        <SelectSchema
          name="select_schema"
          className="select_schema"
          value={selectedSchema || listOfSchemas[0]}
          onChange={(e) => setSelectedSchema(e.target.value)}
        >
          {listOfSchemas.map((schema, i) => (
            <option key={i} value={schema}>
              {capitalize(`${schema}`)}
            </option>
          ))}
        </SelectSchema>
      </div>

      <NavContainer>
        <h1>{title}</h1>
        <div className="header-left">
          <div className="navbutton" onClick={addForm}>
            Add New Form
          </div>
        </div>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
