/* eslint-disable react/prop-types */
import { useState } from "react";
import arrow from "../assets/icon-arrow.svg";
// import GetInfo from "./GetInfo";

const Form = ({ onSubmitForm }) => {
  const [ip, setIp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitForm(ip);
    setIp("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search for an IP address or domain"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button type="submit">
        <img src={arrow} alt="Search" />
      </button>
    </form>
  );
};

export default Form;
