import { useEffect, useState, useCallback } from "react";

export default function useStays() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStays = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/data/stays.json");

      if (!res.ok) {
        throw new Error("Unable to fetch stays");
      }

      const data = await res.json();
      setStays(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStays();
  }, [loadStays]);

  return { stays, loading, error, retry: loadStays };
}
