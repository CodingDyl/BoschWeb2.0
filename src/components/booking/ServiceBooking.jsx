import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Code, Textarea } from "@mantine/core";

function ServiceBooking() {
  const [submittedValues, setSubmittedValues] = useState("");

  //Can use to populate with data from database
  const form = useForm({
    initialValues: {
      make: "",
      model: "",
      mileage: "",
      vin: "",
      address: "",
    },

    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
      age: Number(values.age) || 0,
    }),
  });
  return (
    <Box maw={400} mx="auto" mah={350}>
      <form
        onSubmit={form.onSubmit((values) =>
          setSubmittedValues(JSON.stringify(values, null, 2))
        )}
      >
        <TextInput
          label="Make of Vehicle"
          placeholder="Polo Volkswagen"
          {...form.getInputProps("make")}
        />
        <TextInput
          label="Car Model"
          placeholder="2012 v4"
          mt="md"
          {...form.getInputProps("model")}
        />
        <div className="flex justify-between content-center items-center">
          <TextInput
            type="number"
            label="Mileage"
            placeholder="124000km"
            mt="md"
            {...form.getInputProps("mileage")}
          />
          <TextInput
            type="number"
            label="Vin Number"
            placeholder="Vin number"
            mt="md"
            {...form.getInputProps("vin")}
          />
        </div>
        <Textarea
          placeholder="Any Additional Comments"
          label="Your comment"
            mt="md"
        />
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default ServiceBooking;
