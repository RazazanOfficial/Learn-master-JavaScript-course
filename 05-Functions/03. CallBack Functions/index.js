function showCallFunc(fn) {
  const num = 10;
  fn(num);
}
showCallFunc(function (num) {
  console.log(num);
});
