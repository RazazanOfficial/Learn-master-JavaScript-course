let favActorFirstName = "Tom";
let favActorLastName = "Elis";
let fullName = favActorFirstName + " " + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = `My favorite actor is ${fullName.toUpperCase()} I love him.`;
message += ` his best tv show is Lucifer`;

console.table({
  favActorFirstName,
  favActorLastName,
  fullName,
  uppercase,
  message,
});
