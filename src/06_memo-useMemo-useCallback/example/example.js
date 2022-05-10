function itemize(text) {
  const letters = text
    .split("")
    .filter((l) => l !== " ")
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1,
      };
    }, {});
  // return letters;
  // return Object.entries(letters);
  return Object.entries(letters).sort((a, b) => b[1] - a[1]);
}

console.log(itemize("la vida es vella how "));
