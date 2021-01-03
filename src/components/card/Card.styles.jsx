import styled from 'styled-components'

export const CardsGrid = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
`

export const CardContainer = styled.div`
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  border: 1px solid rgba(105, 105, 105, 0.4);
  padding: 20px;
  width: 16em;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;

  & > input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 16px;
  }
`
