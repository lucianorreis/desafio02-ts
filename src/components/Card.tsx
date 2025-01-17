import { Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import DButton from "./DButton";


export const Card = () => {
  return(
    <div>
      <Box>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
            <DButton onCLick={login} />
        </Center>
      </Box>
    </div>
  )
}