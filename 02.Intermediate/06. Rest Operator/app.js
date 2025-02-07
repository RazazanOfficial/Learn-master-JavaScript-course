const unlimFuncParameters = (a, b, ...anotherParams) => {
  console.log(a);
  console.log(b);
  console.log([anotherParams]);
};
unlimFuncParameters("hello", "hi", ["salam", "hello there"]);
