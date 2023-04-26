import React, {useState} from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

function PersonalBooking() {
    const [submittedValues, setSubmittedValues] = useState('');

    //Can use to populate with data from database
    const form = useForm({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        },
    
        transformValues: (values) => ({
          fullName: `${values.firstName} ${values.lastName}`,
          age: Number(values.age) || 0,
        }),
      });
  return (
        <Box maw={400} mx="auto" mah={350}>
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          {...form.getInputProps('lastName')}
        />
        <div className="flex justify-between content-center items-center">
        <TextInput
          type="number"
          label="Phone Number"
          placeholder="072-786-9080"
          mt="md"
          {...form.getInputProps('phone')}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="Email"
          mt="md"
          {...form.getInputProps('email')}
        />
        </div>
        <TextInput
          type="text"
          label="Address"
          placeholder="123 Main St"
          mt="md"
          {...form.getInputProps('address')}
        />
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
    )
}

export default PersonalBooking