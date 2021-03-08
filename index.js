const groupArrayElements = (arr, limit) => {
  const maxAmountOfNumbers = parseInt(Math.round(arr.length / limit));

  return arr.reduce((acc, item, index) => {
    if (!index || acc[acc.length - 1].length === maxAmountOfNumbers) {
      acc.push([]);
    }

    acc[acc.length - 1].push(item);

    return acc;
  }, []);
};

const result = groupArrayElements([1, 2, 3, 4, 5], 3);

console.log(result);
