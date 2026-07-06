import { useEffect, useState } from "react";

function UseCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates);
      })
      .catch((err) => console.error(err));
  }, [currency]);

  return data;
}

export default UseCurrencyinfo;