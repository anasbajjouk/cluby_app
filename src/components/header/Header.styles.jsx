import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.default};
  color: ${({ theme }) => theme.colors.white};

  & .current_schema {
    text-align: center;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    & {
      padding: 10px;
    }
  }
`

export const NavContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;

  & .header-left {
    display: flex;
    & .navbutton {
      cursor: pointer;
      border-radius: 6px;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.navy};
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
      text-align: center;

      & .header-left {
        display: flex;
        padding-top: 10px;
      }
    }
  }
`

export const SelectSchema = styled.select`
  margin-left: 30px;
  width: 200px;
  padding: 10px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.navy};
  color: white;
  outline: none;
  cursor: pointer;
`
