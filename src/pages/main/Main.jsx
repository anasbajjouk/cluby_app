import React, { useEffect, useState } from 'react'
import { fetchProvidedSchema, fetchSchemaData } from '../../api'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'

const Main = () => {
  const [schemaDetail, setSchemaDetail] = useState({})
  const [schemaData, setSchemaData] = useState({})
  const [listOfSchemas] = useState(['cars', 'uuid', 'questionnaire'])
  const [selectedSchema, setSelectedSchema] = useState('cars')

  useEffect(() => {
    async function fetchData() {
      const providedSchemaresponse = await fetchProvidedSchema(selectedSchema)
      const schemaDataResponse = await fetchSchemaData(selectedSchema)
      setSchemaDetail(providedSchemaresponse)
      setSchemaData(schemaDataResponse)
    }
    fetchData()
  }, [selectedSchema])

  const { fields } = schemaDetail
  const { data } = schemaData
  const [dataState, setDataState] = useState([data])

  let formInitialValues = fields?.reduce(
    (obj, item) => Object.assign(obj, { [item.id]: '' }),
    {}
  )

  useEffect(() => {
    setDataState(data)
  }, [data, schemaData])

  const addForm = () => {
    setDataState([...dataState, { ...formInitialValues }])
  }

  const removeForm = (id) => {
    let removePieceOfState = [...dataState]

    if (id === 0) {
      removePieceOfState.splice(id)
    } else {
      removePieceOfState.splice(id, id)
    }

    setDataState(removePieceOfState)
  }

  let firstEntry = data && data[0]
  const existingData = JSON?.stringify(firstEntry, null, 2)?.replace(
    /[{""}]/g,
    ''
  )

  return (
    <>
      <Header
        addForm={addForm}
        listOfSchemas={listOfSchemas}
        selectedSchema={selectedSchema}
        setSelectedSchema={setSelectedSchema}
        schemaDetail={schemaDetail || {}}
      />
      <Card
        removeForm={removeForm}
        selectedSchema={selectedSchema}
        schemaDetail={schemaDetail}
        schemaData={schemaData}
        existingData={existingData}
        formInitialValues={formInitialValues}
        dataState={dataState}
        fields={fields}
      />
    </>
  )
}

export default Main
