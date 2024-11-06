{
  const countWordOccurrences = (sentence: string, word: string): number => {
    // const result: number = sentence.search(word);
    // console.log(result);
    // return result;
    let sentenArr: string[] = sentence.split(" ");
    let findWord: string[] = sentenArr.filter((item: string) => {
      return item.toLowerCase().includes(word.toLowerCase());
    });

    console.log(findWord.length);
    return findWord.length;
  };

  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
