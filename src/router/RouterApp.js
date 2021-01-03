import React from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../common/history'
import Main from '../pages/main/Main'

//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalStyles />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Main} />
        {/* I would add in here a 404 Page but for this case i will 
        just show the MAIN component no matter what is the path */}
        <Route component={Main} />
      </Switch>
    </Router> 
  </ThemeProvider>
)

export default RouterApp
