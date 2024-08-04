import React, { useEffect, useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    console.log("Props: ", props);
    console.log("Times: ", times);
  },[times, props]);

  const handleChangeDate = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  return (
    <div>
      <section className="booking">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                type="date"
                required
                onChange={(e) => handleChangeDate(e.target.value)}
              />
            </div>

            {/*Times section */}

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                required
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/*Guests number */}

            <div>
              <label htmlFor="guest-number">Number of Guests:</label>
              <input
                id="guest-number"
                type="number"
                min={1}
                value={guests}
                required
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                key={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Book Now"
                onClick={handleSubmit}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default BookingForm;
