import * as Yup from 'yup'

export const validateSchema = (regex) =>
  Yup.object().shape({
    forms: Yup.array().of(
      Yup.object().shape({
        carModel: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers, dashes and dots are accepted.'
        ),
        licensePlate: Yup.string().matches(
          `${regex[1]}`,
          'Must Contain up to 3 Capital Letters followed by - then up to 3 Numbers.'
        ),

        uuidv4: Yup.string().matches(
          `${regex[0]}`,
          'eg. f6e5a4fc-cfbd-49e1-8069-c7cb3f63631a'
        ),

        // only letter, numbers and ^ _ - + ` \'
        question1: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers.'
        ),

        question2: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers.'
        ),
        question3: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers.'
        ),
        question4: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers.'
        ),
        question5: Yup.string().matches(
          `${regex[0]}`,
          'Must Contain Letters or Numbers.'
        ),
      })
    ),
  })
