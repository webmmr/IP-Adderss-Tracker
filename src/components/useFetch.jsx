import { useState, useEffect } from "react";

export function useFetch(url) {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getInfo() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${url}`);

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setInfo(data);
        setError("");
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getInfo();
  }, [url]);

  console.log(info);

  return { info, isLoading, error };
}
