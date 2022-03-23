import React, { useCallback, useMemo, useRef, useState } from "react";
import useAPI from "../hooks/useAPI";


function EventForm({activeUser}) {
  const {createEvent} = useAPI();
  const latInput = useRef(null);
  const lngInput = useRef(null);
  // const dateInput = useRef(null);

  const handleCreate = useCallback(async() => {
    console.log("in handlecreate")
    const lat = latInput.current.value;
    const lng = lngInput.current.value;
    
    const response = await createEvent(lat, lng, activeUser.id);
    if (!response.success) {
      alert("Couldn't create event. Please input details")
      return
    }
      alert("Event created!")
      latInput.current.value = null;
      lngInput.current.value = null; 
  }, []);


  return(
      <div>
      <h3>Create Event</h3>
      <div>
        <label htmlFor="lat">Latitude</label>
        <input ref={latInput} type="text" id="lat" />
      </div>
      <div>
        <label htmlFor="lng">Longitude</label>
        <input ref={lngInput} type="text" id="lng" />
      </div>
      {/* <div>
        <label htmlFor="date">Date</label>
        <input ref={dateInput} type="date" id="date" />
      </div> */}
      <button onClick={handleCreate}>
        Create 
      </button>
    </div>
  );
}

export default EventForm;