import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Information from "./components/Information";

import { useFetch } from "./components/useFetch";
import Map from "./components/Map";

const API_KEY = "at_wdjJOZwCrhbjXHDL1zxGjirWXB8Kd";

function App() {
  const [query, setQuery] = useState("");

  const { info, isLoading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
  );

  // console.log(typeof info, isLoading, error);/

  function handleSubmitForm(search) {
    setQuery(search);
  }

  // console.log(query);

  return (
    <>
      <div className="top-part">
        <Header />
        <Form onSubmitForm={handleSubmitForm} />
        <Information info={info} />
      </div>
      <div className="bottom-part">
        <Map lat={info?.location?.lat} lng={info?.location?.lng} />
      </div>
    </>
  );
}

export default App;
