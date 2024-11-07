{
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    let resArr: boolean[] = [];
    keys.forEach((item) => {
      if (Object.hasOwn(obj, item)) {
        resArr.push(true);
      } else {
        resArr.push(false);
      }
    });
    let num = 0;
    resArr.forEach((item) => {
      if (item) num++;
    });
    if (num == keys.length) {
      return true;
    } else {
      return false;
    }
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
