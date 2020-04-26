
const padStart = (number) => {
  return number.toString().padStart(2, '0')
}

const getDate = (dt) => {
  const date = [padStart(dt.getDate()), padStart(dt.getMonth() + 1), dt.getFullYear()].join('/')
  const time = [padStart(dt.getHours()), padStart(dt.getMinutes())].join(':')
  const fullDate = [date, time].join(' ')
  return fullDate;
};

module.exports = getDate;