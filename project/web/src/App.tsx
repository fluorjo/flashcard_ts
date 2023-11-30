import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from './apollo/createApolloClient'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { useTranslation } from 'react-i18next'
const apolloClient = createApolloClient()

export const App: React.FC = () => {
  // const { t, i18n } = useTranslation()
  // const changelanguageToKo = () => i18n.changeLanguage('ko')
  // const changelanguageToEn = () => i18n.changeLanguage('en')
  return (
    // <div>
    //   <span>language : {i18n.language}</span>
    //   <h1>{t('welcome')}</h1>
    //   <button onClick={changelanguageToKo}>Korean</button>
    //   <button onClick={changelanguageToEn}>English</button>
    // </div>
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  )
}
