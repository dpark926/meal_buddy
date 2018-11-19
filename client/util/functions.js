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

  // for (let i = 0; i < array.length; i++) {
  //   let category = array[i];
  //   for (let j = 0; j < category.list.length; j++) {
  //     let ingredient = category.list[j];
  //
  //     if (
  //       ingredient.slice(0, searchItem.length).toLowerCase() ===
  //         searchItem.toLowerCase() &&
  //       !newArray.includes(ingredient.name) &&
  //       searchItem.length !== 0
  //     ) {
  //       newArray.push(ingredient);
  //     }
  //   }
  // }

  return newArray;
};
