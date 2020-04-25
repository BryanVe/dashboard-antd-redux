const getDate = (dateFormat) => {
  const fullDate = dateFormat.toISOString().split("T");
  const date = fullDate[0].split("-");
  const time = fullDate[1].split(".")[0].split(":");
  const year = date[0];
  const month = date[1];
  const day = date[2];
  const hour = time[0] - 5;
  const minutes = time[1];

  return `${day}/${month}/${year} ${hour}:${minutes}`;
};

module.exports = getDate;