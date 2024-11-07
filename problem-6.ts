{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    obj: Profile,
    partialObj: Partial<Profile>
  ): Profile => {
    const allObj: Profile = { ...obj, ...partialObj };
    return allObj;
  };
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 20 }));
}
