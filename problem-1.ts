{
  const sumArray = (arrNum: number[]): number => {
    let sum: number = 0;
    arrNum.forEach((item) => {
      sum = sum + item;
    });
    console.log(sum);
    return sum;
  };
  sumArray([1, 2, 3, 4, 5]);
}
