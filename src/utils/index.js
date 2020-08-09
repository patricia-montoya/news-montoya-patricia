export const dateFormat = (toConvert = '') => {
  let date = toConvert !== '' ? new Date(toConvert) : new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${year}-${month}-${day}`;
};

export const timestampToDate = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes.substr(
    -2
  )}:${seconds.substr(-2)}`;
};
