import { useState, useEffect, useCallback, useRef } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const abortControllerRef = useRef(null);

  const fetchData = useCallback(async () => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    try {
      setLoading(true);
      setError("");

      const res = await fetch(url, {
        signal: abortControllerRef.current.signal
      });

      if (!res.ok) {
        throw new Error("Server error. Please try again.");
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchData();
    }

    // Cleanup
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, fetchData]);

  return { data, loading, error, retry: fetchData };
};
