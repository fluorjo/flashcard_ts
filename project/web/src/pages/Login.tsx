import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import CommonLayout from '../components/commonLayout'
// import LoginForm from '../components/auth/loginForm'

function Login(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <CommonLayout>
        <Flex align="center" justify="center">
      {/* <LoginForm /> */}
        </Flex>
      </CommonLayout>
    </Box>
  )
}

export default Login
