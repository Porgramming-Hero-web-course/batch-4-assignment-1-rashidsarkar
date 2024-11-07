{
  const removeDuplicates = (arrNum: number[]): number[] => {
    let resArr: number[] = [];
    arrNum.forEach((item: number) => {
      if (!resArr.includes(item)) {
        resArr.push(item);
      }
    });
    console.log(resArr);
    return resArr;
  };
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
