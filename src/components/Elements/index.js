import styled from 'styled-components'

export const IconHolder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, status }) =>
    status === 'check'
      ? theme.colors.green
      : status === 'add'
      ? theme.colors.info
      : theme.colors.red};
  border: 0;
  outline: 0;
  color: white;
  border-radius: 50%;
  padding: 10px;
  font-size: 16px;
  margin: 1px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  position: relative;
  transition-duration: 0.4s;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  }
`
export const ErrorForm = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.typography.verySmall};
  text-align: center;
  word-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px 0 10px 0;
`

export const Pre = styled.pre`
  display: flex;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  padding: 10px;
  width: 100%;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: -20px;

  @media only screen and (max-width: 600px) {
    & {
      align-items: center;
      align-content: center;
      overflow: scroll;
      padding: 10px 20px 10px 80px;
    }
  }
`

export const Flex = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
