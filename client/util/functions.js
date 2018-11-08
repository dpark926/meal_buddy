export const autoComplete = (array, searchItem) => {
  let newArray = [];

  newArray = array.filter((obj, idx) => {
    return (
      obj.name.slice(0, searchItem.length).toLowerCase() ===
        searchItem.toLowerCase() &&
      !newArray.includes(obj.name) &&
      searchItem.length !== 0
    );
  });

  return newArray;
};
