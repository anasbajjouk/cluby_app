import axios from 'axios'
import errorHandler from './errorHandler'
import { toast } from 'react-toastify'

const config = {
  headers: {
    ClubyApiKey: process.env.REACT_APP_API_KEY,
  },
}

export const fetchProvidedSchema = async (schema) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_URI + `data/${schema}/schema`,
      config
    )

    return response.data
  } catch (error) {
    errorHandler(error.response)
  }
}

export const storeData = async (schema, data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_URI + `data/${schema}/`,
      data,
      config
    )

    response.status === 200 &&
      toast.success('Hooray, record has been added, please refresh the page.')

    return response.data
  } catch (error) {
    errorHandler(error.response)
  }
}

export const fetchSchemaData = async (schema) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_URI + `data/${schema}/`,
      config
    )
    return response.data
  } catch (error) {
    errorHandler(error.response)
  }
}
