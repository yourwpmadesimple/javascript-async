export const tempToF = (kelvin) => {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
};
