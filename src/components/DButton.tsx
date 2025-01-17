import { Button } from "@chakra-ui/react";

interface IDButton {
    onCLick: () => void
}

export const DButton = ({ onCLick }: IDButton) => {
    return (
        <Button 
            onClick={onCLick}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
            >
            Entrar
        </Button>
    )
}

export default DButton