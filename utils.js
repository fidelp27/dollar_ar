const getDollar = async (url) => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer ' + import.meta.env.VITE_TOKEN_BCRA
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const response = await fetch(url, requestOptions);
  const dollar_values = await response.json();
  return dollar_values;
};

export default getDollar;
