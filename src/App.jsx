import { useState } from "react";
import { useFetch } from "./hook/useFetch";

import Header from "./components/Header";
import Form from "./components/Form";
import Information from "./components/Information";
import Map from "./components/Map";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const BASE_URL =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

function App() {
  const [query, setQuery] = useState("");

  const {
    fetchedData: information,
    isLoading,
    error,
  } = useFetch(BASE_URL, query);

  function handleSubmitForm(search) {
    setQuery(search);
  }

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
