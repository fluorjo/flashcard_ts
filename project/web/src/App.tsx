import * as React from 'react'
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

import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')
  return (
    <div>
      <span>language : {i18n.language}</span>
      <h1>{t('welcome')}</h1>
      <button onClick={changelanguageToKo}>Korean</button>
      <button onClick={changelanguageToEn}>English</button>
    </div>
  )
}
export default App
