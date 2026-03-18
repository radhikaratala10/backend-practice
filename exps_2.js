const express = require("express");

const app = express();

const users=[
  {id:1,name:"radhika"},
  {id:2,name:"sneha"},
  {id:3,name:"priya"}
]


const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" }
];


const orders = [
  { id: 1, product: "Grocery", quantity: 2 },
  { id: 2, product: "Phone", quantity: 5 },
  { id: 3, product: "Tv", quantity: 3 }
];


const games = [
  { id: 1, name: "Chess" },
  { id: 2, name: "Football" },
  { id: 3, name: "Basketball" }
]

const seasons =[
  { id: 1, name: "Spring" },
  { id: 2, name: "Summer" },
  { id: 3, name: "Autumn" },
  { id: 4, name: "Winter" }
]


app.get("/", (req, res) => {
  res.end("<h1>Hello from radhika</h1>");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});


app.get("/api/products", (req, res) => {
  res.json(products);
});


app.get("/api/orders", (req, res) => {
  res.json(orders);
});


app.get("/api/games", (req, res) => {
  res.json(games);
} );


app.get("/api/seasons", (req, res) => {
  res.json(seasons);
} );

app.listen(4000, () => {
  console.log("Server running on port 4000");
});