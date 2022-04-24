import React from 'react';
import {
  Box,
  Grid,
  ChakraProvider,
  Container,
  Flex,
  Image,
  theme,
} from '@chakra-ui/react';
import SpaceshipForm from './components/SpaceshipForm';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container maxW="container.xl" p={0}>
            <Flex h="90vh" py={5}>
              <SpaceshipForm />
              <Image
                w="full"
                objectFit="scale-down"
                src="spaceship.jpg"
                alt="Spaceship image"
              ></Image>
            </Flex>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
