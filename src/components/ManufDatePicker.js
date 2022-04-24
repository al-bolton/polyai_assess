import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { FormControl, FormLabel, Select, Box } from '@chakra-ui/react';

function ManufDatePicker({ setDateSelector, manufDate, setManufDate }) {
  return (
    <FormControl>
      <FormLabel>Date of Manufacture</FormLabel>
      <Select onChange={e => setDateSelector(e.target.value)}>
        <option value="aft">After</option>
        <option value="bef">Before</option>
        <option value="on">On</option>
      </Select>
      <Box w="45%" borderWidth="1px" borderRadius="lg" mt={3}>
        <DatePicker
          selected={manufDate}
          onChange={date => setManufDate(date)}
        />
      </Box>
    </FormControl>
  );
}

export default ManufDatePicker;
