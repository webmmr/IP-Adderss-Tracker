/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Loader from "./Loader";
import GetInfo from "./GetInfo";
import ErrorMessage from "./ErrorMessage";

const API_KEY = "at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

const Information = ({ query }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(query);

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
        console.log(info);
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

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  if (!isLoading && !error)
    return (
      <div className="information">
        <div className="card">
          <p>IP Address</p>
          <h2>{info.ip}</h2>
        </div>
        <div className="card">
          <p>Location</p>
          <h2>{`${info.location.city}, ${info.location.region} ${info.location.postalCode}`}</h2>
        </div>
        <div className="card">
          <p>Timezone</p>
          <h2>{`UTC ${info.location.timezone}`}</h2>
        </div>
        <div className="card">
          <p>ISP</p>
          <h2>{info.isp}</h2>
        </div>
      </div>
    );
};

export default Information;
