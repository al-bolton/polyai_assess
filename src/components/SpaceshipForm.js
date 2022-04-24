import { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import moment from 'moment';


import ColorPicker from './ColorPicker';
import SpeedPicker from './SpeedPicker';
import ManufDatePicker from './ManufDatePicker';
import LaserPicker from './LaserPicker';

function SpaceshipForm() {
  const [queryString, setQueryString] = useState('');

  const [colorSelector, setColorSelector] = useState('all');
  const [selectedColors, setSelectedColors] = useState([]);

  const [speedSelector, setSpeedSelector] = useState('gr');
  const [selectedMaxSpeed, setSelectedMaxSpeed] = useState('');

  const [dateSelector, setDateSelector] = useState('aft');
  const [manufDate, setManufDate] = useState('');

  const [pulseLaser, setPulseLaser] = useState(false);

  const buildQueryString = () => {
    let query = '?';

    // Colors
    if (selectedColors.length > 0) {
      query += 'colorSel=' + colorSelector;
      selectedColors.forEach(color => (query += '&color=' + color));
    }

    // Max Speed
    if (selectedMaxSpeed !== '') {
      if (query.length > 1) query += '&';
      query += 'speed=' + speedSelector + selectedMaxSpeed;
    }

    // Date of Manufacture
    if (manufDate !== '') {
      if (query.length > 1) query += '&';
      query += 'date=' + dateSelector + moment(manufDate).format('DD-MM-YYYY');
    }

    // Pulse laser
    if (query.length > 1) query += '&';
    query += 'laser=' + pulseLaser;

    setQueryString(query);
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Set your spaceship details Mr Z</Heading>
        <Text>
          Choose options from the different filters to build your query string
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <ColorPicker
            setColorSelector={setColorSelector}
            setSelectedColors={setSelectedColors}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <SpeedPicker
            setSpeedSelector={setSpeedSelector}
            selectedMaxSpeed={selectedMaxSpeed}
            setSelectedMaxSpeed={setSelectedMaxSpeed}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ManufDatePicker
            setDateSelector={setDateSelector}
            manufDate={manufDate}
            setManufDate={setManufDate}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <LaserPicker setPulseLaser={setPulseLaser} />
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" onClick={e => buildQueryString()}>
            Create query string
          </Button>
        </GridItem>
      </SimpleGrid>
      <Text size="l">Your query string:</Text>
      <Text>{queryString}</Text>
    </VStack>
  );
}

export default SpaceshipForm;
