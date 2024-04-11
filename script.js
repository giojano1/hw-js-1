let age = Number(prompt(`თქვენი ასაკი:`));
let movieType = prompt(`ფილმის ტიპი (Regular & 3D):`);
let dayTime = prompt(`დრო(Morning & Evening):`);
let ticketPrice;

switch (true) {
  case age <= 10:
    ticketPrice = 5;
    break;
  case age > 10 && age <= 65:
    ticketPrice = 15;
    break;
  case age > 65:
    ticketPrice = 10;
    break;
  default:
}
switch (movieType) {
  case "3D":
    ticketPrice += 5;
    break;
}
switch (dayTime) {
  case "Evening":
    ticketPrice += 5;
    break;
}
console.log(`ბილეთის ფასი თქვენთვის არის : ${ticketPrice}ლარი`);
