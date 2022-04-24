import { Checkbox } from '@chakra-ui/react';

function LaserPicker({ setPulseLaser }) {
  return (
    <Checkbox onChange={e => setPulseLaser(e.target.checked)}>
      With pulse laser?
    </Checkbox>
  );
}

export default LaserPicker;
