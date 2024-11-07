{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const myPeraLoar: string = word.trim().toLowerCase();
    let totalMatch: number = 0;
    let sentenArr: string[] = sentence.split(" ");
    let regexWord = new RegExp(`\\b${myPeraLoar}\\b`, "g");
    sentenArr.forEach((item) => {
      if (item.match(regexWord)) {
        totalMatch++;
      }
    });
    console.log(totalMatch);
    return totalMatch;
  };

  countWordOccurrences("I love typescript", "typescript");
}
