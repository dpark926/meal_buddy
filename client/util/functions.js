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

export const currentWeek = () => {
  const currentDate = new Date();
  const todaysDate = currentDate.getDate();
  const todaysDay = currentDate.getDay(); //[0, 1, 2, 3, 4, 5, 6]
  const todaysMonth = currentDate.getMonth() + 1;
  const todaysYear = currentDate.getFullYear();

  let thisWeek = [];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  for (let i = 0; i < 7; i++) {
    if (todaysDay === i) {
      thisWeek = days.map((d, idx) => {
        return {
          day: days[idx],
          month: todaysMonth,
          date: todaysDate - todaysDay + idx,
          year: todaysYear,
          breakfast: "",
          lunch: "",
          dinner: ""
        };
      });
    }
  }

  return thisWeek;
};
