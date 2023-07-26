import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Information from "./components/Information";

function App() {
  const [query, setQuery] = useState("");

  function handleSubmitForm(search) {
    setQuery(search);
  }

  return (
    <>
      <div className="top-part">
        <Header />
        <Form onSubmitForm={handleSubmitForm} />
        <Information query={query} />
      </div>
      <div className="bottom=part"></div>
    </>
  );
}

export default App;
