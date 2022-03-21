import React, { useCallback } from "react";
const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

export default function useAPI() {
  const makeAPICall = useCallback(async (url, config) => {
    try {
        // const fullURL = "http://localhost:8080/api/testing/json";
        const fullURL = apiBaseURL + url;

        const res = await fetch(fullURL, config); 
        const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
      return { data: null, success: false, error: "Something went wrong." };
    }
  }, []);

  const login = useCallback(
    async (username, password) => {
      return await makeAPICall("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const register = useCallback(
    async (username, password, truckName) => {
      return await makeAPICall("/api/users/register", {
        method: "PUT",
        body: JSON.stringify({ username, password, truckName }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const test = useCallback(
    async () => {
      return await makeAPICall("/api/testing/json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const getEventsByUserId = useCallback(
    async (userId) => {
      return await makeAPICall(`/api/events/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const usersByUserIds = useCallback(
    async (userIds) => {
      const url = "/api/users?" + userIds.map((userId) => `userId=${userId}`).join("&")
      return await makeAPICall(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const allEvents = useCallback(
    async () => {
      return await makeAPICall("/api/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );


  return { login, test, register, getEventsByUserId, usersByUserIds, allEvents };
}
