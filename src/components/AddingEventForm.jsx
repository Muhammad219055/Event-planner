import React from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { motion } from "framer-motion";
const AddingEventForm = ({
  titleHandler,
  dateHandler,
  timeHandler,
  handleAddEvent,
  time,
  title,
  date,
  readyToSave,
}) => {
  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="adding-event-form"
    >
      <span className="input-field-label">
        <label htmlFor="event-title">What is the Event?</label>
        <input type="text" onChange={titleHandler} value={title} required />
      </span>

      <span className="date-calender">
        <label htmlFor="date">Select the Date</label>
        <Calendar onChange={dateHandler} value={date} />
      </span>
      <span className="label-time">
        <label htmlFor="time">What Time?</label>
        <TimePicker onChange={timeHandler} value={time} />
      </span>
      <motion.button
        initial={{
          opacity: 0,
          rotate: 180,
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          display:'none'
        }}
        animate={readyToSave ? { opacity: 1, rotate: 0, display:'inline-block' } : {}}
        transition={{ duration: 0.3, type: "spring", damping: 6 }}
        whileHover={{
          scale: 1.02,
          shadow: 1,
          boxShadow: "0px 0px 20px #c0c0c0",
        }}
        className="add-event-btn"
        type="submit"
        onClick={handleAddEvent}
      >
        Add Event
      </motion.button>
    </motion.form>
  );
};
export default AddingEventForm;
