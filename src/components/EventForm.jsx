import React from "react";

function EventForm() {
    return(
        <div>
        <h3>Create Event</h3>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input  type="date" id="date" />
        </div>
        <button >
          Create 
        </button>
      </div>
    );
}

export default EventForm;