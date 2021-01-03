import { createGlobalStyle } from 'styled-components'
import { cssVariables } from './theme'

export const GlobalStyles = createGlobalStyle`
${cssVariables};
*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
}
    
html{
    box-sizing: border-box;
    font-family: 62.5%;
    font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;  
}

body{  
    max-height: 100vh;
    line-height: 1.7;
    font-size: ${({ theme }) => theme.typography.small};
     background-color: ${({ theme }) => theme.colors.white};
    /*color: ${({ theme }) => theme.colors.white};
   */
    transition: background-color .35s ease-in-out,
    color .35s ease-in;
    
    a{
        text-decoration: none;
    }
}

/* width */
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    /* background: #f1f1f1;
    border-radius: 10px; */
    margin-bottom: 6px;
    margin-top: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;

    &:hover {
      background: #999;
    }
  }
`
