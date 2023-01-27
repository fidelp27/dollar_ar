const getDollar = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_TOKEN_BCRA,
    },
  });
  const dollar_values = await response.json();
  return dollar_values;
};

export default getDollar;
