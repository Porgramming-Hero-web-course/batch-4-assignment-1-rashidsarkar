{
  const countWordOccurrences = (sentence: string, word: string): number => {
    let sentenArr: string[] = sentence.split(" ");
    let findWord: string[] = sentenArr.filter((item: string) => {
      return item.toLowerCase().includes(word.toLowerCase().trim());
    });

    console.log(findWord.length);
    return findWord.length;
  };

  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
