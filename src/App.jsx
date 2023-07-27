import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Information from "./components/Information";
import Map from "./components/Map";
import GetInfo from "./components/GetInfo";

const API_KEY = "at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

function App() {
  const [query, setQuery] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmitForm(search) {
    console.log(search);
    setQuery(search);
  }

  useEffect(() => {
    async function getCurrentLocationInfo() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
        );

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();
        setQuery(data);

        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCurrentLocationInfo();
  }, []);

  console.log(query);

  return (
    <>
      <div className="top-part">
        <Header />
        <Form onSubmitForm={handleSubmitForm} />
        {Object.keys(query).length !== 0 ? <Information query={query} /> : {}}
        {/* <Information query={query} /> */}
      </div>
      <div className="bottom-part">
        {/* <div className="leaflet-container"> */}
        {/* <Map lat={info.lat} lng={info.lng} /> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
