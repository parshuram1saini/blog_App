import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // console.log("use effect run ");
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from the server ");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false);
        setError(null);
      })

      .catch((err) => {
        setError(err.message);
        setIspending(false);
      });
  }, []);

  return { data, ispending, error };
};

export default useFetch;
