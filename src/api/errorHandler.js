import { toast } from 'react-toastify'

const toastOptions = (Id) => ({
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: Id,
})

export const parserErrorCode = (ErrorCode) => {
  switch (ErrorCode) {
    case 400:
      return {
        msg:
          'POST data does not pass the validation rules (invalid JSON, invalid values etc)!',
        id: 1,
      }
    case 401:
      return { msg: 'Authentication header missing or invalid API key!', id: 2 }
    case 404:
      return { msg: 'Not found!', id: 3 }
    case 405:
      return { msg: 'Method not allowed!', id: 4 }
    case 500:
      return {
        msg:
          'Something is broken, try again within few minutes and contact us if the problem persists.',
        id: 5,
      }
    default:
      return {
        msg: `${ErrorCode} 
         Code - Something is broken, try again within few minutes and contact us if the problem persists.`,
        id: 600,
      }
  }
}

const errorHandler = (errorMessage) => {
  if (typeof errorMessage !== 'object') return
  let ErrorCode = errorMessage.status

  const customId = parserErrorCode(ErrorCode)?.id

  const errorText = parserErrorCode(ErrorCode).msg || parserErrorCode(ErrorCode)

  return toast.error(errorText, toastOptions(customId))
}

export default errorHandler
