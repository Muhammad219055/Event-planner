import React, { useContext, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { EventContext } from "../context/EventContext";
import AddingEventForm from "../components/AddingEventForm";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const AddEvent = () => {
  const { events, addEvent } = useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [readyToSave, setReadyToSave] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateClick = (value) => {
    setDate(value);
  };

  const handleTimeChange = (value) => {
    setTime(value);
  };

  useEffect(() => {
    if (time !== "" && date !== "") {
      setReadyToSave((prev) => !prev);
    }
  }, [time, date]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventDate = new Date(date);
    const eventTimeParts = time.split(":");

    eventDate.setHours(
      parseInt(eventTimeParts[0]),
      parseInt(eventTimeParts[1])
    );

    const event = {
      id: uuidv4(),
      title: title,
      dateTime: eventDate,
    };

    addEvent(event);
    setTitle("");
    setDate(new Date());
    setTime("");
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5, type: "spring", damping: 7 }}
        className="event-form"
      >
        <AddingEventForm
          titleHandler={handleChange}
          dateHandler={handleDateClick}
          timeHandler={handleTimeChange}
          handleAddEvent={handleAddEvent}
          title={title}
          date={date}
          time={time}
          readyToSave={readyToSave}
        />
      </motion.div>
    </div>
  );
};

export default AddEvent;
