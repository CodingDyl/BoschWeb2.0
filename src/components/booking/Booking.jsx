import * as React from "react";
import Box from "@mui/material/Box";
import { Stepper, Button, Group } from "@mantine/core";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonalBooking from "./PersonalBooking";
import ServiceBooking from "./ServiceBooking";

const steps = [
  "Enter in your peronal Details",
  "What service do you require?",
  "Complete your booking",
];

function Booking({ open, close }) {
  const [active, setActive] = React.useState(0);
  const nextStep = () => setActive((c) => (c < 3 ? c + 1 : c));
  const prevStep = () => setActive((c) => (c > 0 ? c - 1 : c));

  return (
    <>
    <Dialog open={open} onClose={close}>
      <DialogTitle>Book A Service</DialogTitle>
      <DialogContent className="px-5 py-5">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Personal Details">
            <PersonalBooking />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Type of Service">
            <ServiceBooking />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Complete Booking">
            Step 3 content: Complete Booking
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </DialogContent>
      <Group position="center" mt="xl" className="py-2">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep} className="bg-black-100 text-white">Next step</Button>
      </Group>
    </Dialog>
    </>
  );
}

export default Booking;
