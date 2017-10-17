export const normalizedDate = (sistemdate) => {
  const date = new Date(sistemdate).toLocaleDateString();
  const time = new Date(sistemdate).toLocaleTimeString().slice(3,-3);
  return ` ${date} - ${time}`;
};
