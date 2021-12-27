import { useState, useEffect } from "react";

export const useFetch = (service) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        try {
          const response = await service();
          setData(response);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 3000);
    })();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
