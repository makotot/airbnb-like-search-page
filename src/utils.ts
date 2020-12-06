export const filterFalsyFromObject = (obj) => {
  return Object.entries(obj).reduce((a, [k, v]) => {
    if (v) {
      a[k] = v;
      return a;
    }
    return a;
  }, {});
};
