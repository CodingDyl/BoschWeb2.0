import React, { useState } from "react";
import dayjs from "dayjs";
import { Group } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { MultiSelect } from '@mantine/core';

function CompleteBooking() {
    const data = [
        { value: 'vehicle', label: 'Vehicle Service'},
        { value: 'oil', label: 'Oil Change'},
        { value: 'tire', label: 'Tire Change'},
        { value: 'brake', label: 'Brake Service'},
        { value: 'battery', label: 'Battery Service'},
        { value: 'repair', label: 'Mechanical Repair'},
        { value: 'electrical', label: 'Elecrtical Fault'},
        { value: 'diagnostic', label: 'Diagnostic'},
    ]
  return (
    <>
      <Group position="center" className="py-5">
      <MultiSelect
          data={data}
          label="Service you require"
          placeholder="Select service you require"
            required
        />
        <Calendar />
      </Group>
    </>
  );
}

export default CompleteBooking;
