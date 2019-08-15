// menu items
let breakfast = 	[
{
	name:"French Toast",
	description: "French Toast with blueberries",
	price: 7
},
{
	name:"Beans on Toast",
	description: "Beans on Toast with beans",
	price: 6
},
{
	name:"Eggs Benedict",
	description: "Eggs Benedict and Hollandaise Sauce",
	price: 9.5
},
{
	name:"Pancakes",
	description: "Stack of pancakes with maple syrup and banana",
	price: 8
},
{
	name:"Eggs",
	description: "Two eggs any style with any side",
	price: 9
},
{
	name:"5-Cheese Omelet",
	description: "Omelet made with 5 cheeses and any side",
	price: 10
}
];
let lunch = 	[
{
	name:"Chips",
	description: "Crispy chips with a side of aioli",
	price: 4
},
{
	name:"Wedges",
	description: "Crispy wedges with a side of BBQ sauce",
	price: 4.5
},
{
	name:"Tacos",
	description: "Fresh chicken or beef tacos with your choice of toppings",
	price: 6
},
{
	name:"Nachos",
	description: "Nachos with mince and beans and stuff",
	price: 8.5
},
{
	name:"Sandwich",
	description: "Sandwich with your choice of 3 fillings",
	price: 7
},
{
	name:"Stew",
	description: "Fresh stew made by Grandma",
	price: 8
}
];
let dinner = 	[
{
	name:"Chips",
	description: "Crispy chips with a side of aioli",
	price: 4
},
{
	name:"Wedges",
	description: "Crispy wedges with a side of BBQ sauce",
	price: 4.5
},
{
	name:"Tacos",
	description: "Fresh chicken or beef tacos with your choice of toppings",
	price: 6
},
{
	name:"Beef Burger",
	description: "Succulent beef pattie topped with fresh lettuce and bacon",
	price: 11
},
{
	name:"Chicken Burger",
	description: "Juicy chicken breast with lettuce and camembert",
	price: 12
},
{
	name:"Ribeye Steak",
	description: "Succulent ribeye steak with garlic butter",
	price: 24
},
{
	name:"Salmon",
	description: "Fresh King Salmon fron Nelson",
	price: 21
}
];

var output = document.getElementById("menu-output");
var brek = document.getElementById("brek");
var lun = document.getElementById("lunch");
var din = document.getElementById("din");
var btn = "";


function listMenu(menu) {
	let menuList = [];
	if (btn === "brek") {
		menuList.push("<h1>Breakfast</h1>");
	}else if (btn === "lun") {
		menuList.push("<h1>Lunch</h1>");
	}else if (btn === "din") {
		menuList.push("<h1>Dinner</h1>");
	}
	for (let i=0; i<menu.length; i++) {
		menuList.push("<div><h2>" + menu[i].name + "</h2><p>" + menu[i].description + "</p><p>$" + menu[i].price + "</p></div>");
	}
	menuList = menuList.join("");
	output.innerHTML = menuList;
}

brek.addEventListener("click",function(){
	btn = "brek";
	output.className = "fullsize"
	listMenu(breakfast);
});
lun.addEventListener("click",function(){
	btn = "lun";
	output.className = "fullsize"
	listMenu(lunch);
});
din.addEventListener("click",function(){
	btn = "din";
	output.className = "fullsize"
	listMenu(dinner);
});

// show hidden nav
var outputTop = document.querySelector('#menu-output').getBoundingClientRect().top
window.onscroll = function() {
	var currentY = window.pageYOffset;
	if (outputTop < currentY) {
    document.getElementsByClassName("hidden-nav").style.display = "block";
  } else {
    document.getElementsByClassName("hidden-nav").style.display = "none";
  }




var thresh = window.pageYOffset;
var currentScrollPos = window.pageYOffset;
  if (thresh > currentScrollPos) {
    document.getElementsByClassName("hidden-nav").style.display = "block";
  } else {
    document.getElementsByClassName("hidden-nav").style.display = "none";
  }
}