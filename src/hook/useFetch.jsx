import { useState, useEffect } from "react";

export function useFetch(url, query) {
  const [fetchedData, setFetchedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getInfo() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `${url}&${query !== "" ? `ipAddress=${query}` : ""}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        if (data.messages) {
          throw new Error(data.messages);
        }

        setFetchedData(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getInfo();

    return function () {
      controller.abort();
    };
  }, [url, query]);

  return { fetchedData, isLoading, error };
}
