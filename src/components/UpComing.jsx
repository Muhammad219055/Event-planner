import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import UpcomingCard from "./UpcomingCard";

const UpComing = () => {
  const { events } = useContext(EventContext);
  
  return (
    <div className="upcoming-grid">
      {events.map((event, index) => {
        // const date = event.dateTime.toISOString().split("T")[0];
        return (
          <UpcomingCard id={event.id} title={event.title} date={event.dateTime} key={index} />
        );
      })}
    </div>
  );
};

export default UpComing;
