export const getData = async (count) => {
  const data = await fetch("./data.json")
    .then((response) => response.json())
    .then((json) => json.casinos.slice(0, count));
  return data;
};

getData();
