/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Map from "./Map";

const API_KEY = "at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

const Information = ({ query }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   async function getInfo() {
  //     try {
  //       const res = await fetch(
  //         `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
  //       );

  //       const data = await res.json();
  //       setInfo(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }

  //   getInfo();
  // }, [query]);

  const controller = new AbortController();

  useEffect(() => {
    async function getInfo() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
        );
        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        setInfo(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getInfo();

    return function () {
      controller.abort();
    };
  }, [query]);

  const {
    ip,
    isp,
    location: { lat, lng, city, region, timezone, postalCode },
  } = info;

  return (
    <>
      <div className="information">
        <div className="card">
          <p>IP Address</p>
          <h2>{ip}</h2>
        </div>
        <div className="card">
          <p>Location</p>
          <h2>{`${city}, ${region} ${postalCode}`}</h2>
        </div>
        <div className="card">
          <p>Timezone</p>
          <h2>{`UTC ${timezone}`}</h2>
        </div>
        <div className="card">
          <p>ISP</p>
          <h2>{isp}</h2>
        </div>
      </div>
      <div className="leaflet-container">
        <Map lat={lat} lng={lng} />
      </div>
    </>
  );
};

export default Information;
