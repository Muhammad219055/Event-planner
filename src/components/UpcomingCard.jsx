import React, { useEffect, useState, useContext } from "react";
import edit from "../assets/edit-outline.svg";
import del from "../assets/trash-2-outline.svg";
import save from "../assets/save-outline.svg";
import { EventContext } from "../context/EventContext";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { motion } from "framer-motion";
const UpcomingCard = ({ id, title, date, index }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(new Date(date));
  const [editing, setEditing] = useState(false);
  const [timeDisplay, setTimeDisplay] = useState("");
  const [newTime, setNewTime] = useState(
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const { deleteEvent, editEvent } = useContext(EventContext);

  const delEvent = () => {
    deleteEvent(id);
  };

  const handleEdit = () => {
    if (editing) {
      const dt = new Date(newDate);
      const tme = newTime.split(":");
      dt.setHours(parseInt(tme[0]), parseInt(tme[1]));
      editEvent({ id, title: newTitle, dateTime: dt });
    }
    setEditing((prev) => !prev);
  };

  useEffect(() => {
    const eventDate = new Date(date);
    const currentDate = new Date();
    const remainingTime = eventDate - currentDate;

    if (remainingTime < 0) {
      setTimeDisplay("Event has already passed");
      return;
    }

    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    setTimeDisplay(
      `After ${
        remainingDays > 0
          ? `${remainingDays} day${remainingDays > 1 ? "s" : ""} and `
          : ""
      }${remainingHours} hour${remainingHours > 1 ? "s" : ""}`
    );
  }, [date]);

  return (
    <div className="event-card" key={index}>
      <div className="event-info">
        <input
          type="text"
          className="event-card-title"
          disabled={!editing}
          placeholder={title}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        {!editing && <h4>{timeDisplay}</h4>}
        <p>
          {!editing ? (
            new Date(date).toLocaleDateString()
          ) : (
            <Calendar onClickDay={setNewDate} className="editing-calender" />
          )}
        </p>

        {!editing ? (
          <motion.p
          initial = {{opacity:0, y:-100}}
          animate = {{opacity:1, y:0}}
          transition={{duration:0.5, type:'spring', delay:0.2}}
          exit={{opacity:0, y:-100}}
          >{newTime} </motion.p>
        ) : (
          <TimePicker onChange={setNewTime} value={newTime} />
        )}

        {editing && (
          <button className="save-event-btn" onClick={handleEdit}>
            <img src={save} alt="Save" />
          </button>
        )}
        {!editing && (
          <div className="event-card-buttons">
            <button onClick={handleEdit} className="edit-event-btn">
              <img src={edit} alt="Edit" />
            </button>
            <button onClick={delEvent} className="del-event-btn">
              <img src={del} alt="Delete" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingCard;
