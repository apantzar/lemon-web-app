import React, { useEffect } from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {

    useEffect(() => {
    console.log("Props: ", props);
    }, [props.availableTimes]);
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm} 

    />
  );
};

export default Booking;
