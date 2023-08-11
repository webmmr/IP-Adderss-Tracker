import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Information from "./components/Information";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import Map from "./components/Map";
import { useFetch } from "./components/useFetch";

const API_KEY = "at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

function App() {
  const [query, setQuery] = useState("");

  const {
    fetchedData: information,
    isLoading,
    error,
  } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
  );

  function handleSubmitForm(search) {
    setQuery(search);
  }

  console.log(query);

  return (
    <>
      <div className="top-part">
        <Header />
        <Form onSubmitForm={handleSubmitForm} />
        <div>
          {isLoading && <Loader />}
          {!isLoading && !error && <Information information={information} />}
          {error && <ErrorMessage message={error} />}
        </div>
      </div>
      <div className="bottom-part">
        <Map
          lat={information?.location?.lat}
          lng={information?.location?.lng}
        />
      </div>
    </>
  );
}

export default App;
