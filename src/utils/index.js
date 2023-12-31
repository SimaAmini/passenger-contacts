export const sortByKey = (list, key) => {
  return list.sort((a, b) => (a[key] < b[key] ? 1 : -1));
};
