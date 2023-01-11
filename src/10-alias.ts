(()=>{
  //Alias
  type UserID = string | number; // PascalCase
  let userId: UserID;

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'// PascalCase
  let shirtSize: Sizes;

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()} ${size}`);
    }
  }
  greeting(111, 'M')
})()
