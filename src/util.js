export const numToString = (val) => {
  console.log(val);
  return Number(val)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
