const friends = ["Tom Hanks", "Tom", "Tom Solaiman"];

const friendsLength = friends.map((friend) => friend.length);
// console.log(friendsLength);
const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 3000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const productNames = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);
// products.map((product) => console.log(product));
// console.log(productNames);
products.forEach((product) => console.log(product));
// console.log(productPrices);
