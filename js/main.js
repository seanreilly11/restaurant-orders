// menu items
const breakfast = 	[
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
const lunch = 	[
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
const dinner = 	[
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

const allMenuItems = 	[
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
},
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
var menuoutput = document.getElementById("menu-output");
var cartoutput = document.getElementById("cart-output");
var brek = document.getElementById("brek");
var lun = document.getElementById("lunch");
var din = document.getElementById("din");
var brekkie = document.getElementById("brekkie");
var lunchie = document.getElementById("lunchie");
var dinnie = document.getElementById("dinnie");
var btn = "";
var items = [];
var cart = [];
var totalPrice = 0;


// event listeners for buttons to print right menu
brek.addEventListener("click",function(){
	btn = "brek";
	menuoutput.className = "fullsize"
	listMenu(breakfast);
});
lun.addEventListener("click",function(){
	btn = "lun";
	menuoutput.className = "fullsize"
	listMenu(lunch);
});
din.addEventListener("click",function(){
	btn = "din";
	menuoutput.className = "fullsize"
	listMenu(dinner);
});
brekkie.addEventListener("click",function(){
	btn = "brek";
	menuoutput.className = "fullsize"
	listMenu(breakfast);
});
lunchie.addEventListener("click",function(){
	btn = "lun";
	menuoutput.className = "fullsize"
	listMenu(lunch);
});
dinnie.addEventListener("click",function(){
	btn = "din";
	menuoutput.className = "fullsize"
	listMenu(dinner);
});

// print menu function
function listMenu(menu) {
	document.getElementById("hidden-nav").style.opacity = "1";
	var menuList = [];
	if (btn === "brek") {
		menuList.push("<h1>Breakfast</h1>");
	}else if (btn === "lun") {
		menuList.push("<h1>Lunch</h1>");
	}else if (btn === "din") {
		menuList.push("<h1>Dinner</h1>");
	}
	for (let i=0; i<menu.length; i++) {
		menuList.push("<div class='menu-js'><h2>" + menu[i].name + "</h2><div class='menu-item-center'><p>" + menu[i].description + "</p><p>$" + menu[i].price + "</p></div><button class='addToCartBtn'>Add To Cart</button></div>");
	}
	menuList = menuList.join("");
	$("#menu-output-wrapper").show();
	menuoutput.innerHTML = menuList;

	$(".addToCartBtn").click(function(e) {
		items.push(e.target.parentNode.children['0'].innerText);
		listCart(items);
	});

	// show hidden nav
	var outputTop = document.querySelector('#scrollTrig').getBoundingClientRect().top
	window.onscroll = function() {
		var currentY = window.pageYOffset;
		if (outputTop < currentY) {
			document.getElementById("hidden-nav").style.opacity = "1";
			document.getElementById("hidden-nav").classList.add("animationClassIn");
			document.getElementById("hidden-nav").classList.remove("animationClassOut");
		} else {
			document.getElementById("hidden-nav").style.opacity = "0";
			document.getElementById("hidden-nav").classList.remove("animationClassIn");
			document.getElementById("hidden-nav").classList.add("animationClassOut");
		}
	}	
}

// print menu function
function listCart(items) {
	document.getElementById("cart-output").style.right = "0";
	var cartList = [];
	cartList.push("<div class='cart-top'><h2>Cart</h2><h2 id='closeBtn' class='closeCartBtn'>X</h2></div>");
	for (var i = 0; i < items.length; i++) {
		var thisItem = allMenuItems.find(x => x.name === items[i]);
		cartList.push("<div class='cart-js'><div class='cart-item'><h3>" + thisItem.name + "</h3><p>$" + thisItem.price + "</p></div><button class='deleteItemBtn'>Delete</button></div>");
	}
	for (var i = items.length-1; i < items.length; i++) {
		var thisItem = allMenuItems.find(x => x.name === items[i]);
		totalPrice += thisItem.price;
	}
	cartList.push("<div class='orderNowBtnSec'><button class='orderNowBtn'>Order Now</button><h2>"+ totalPrice +"</h2></div>");
	cartList = cartList.join("");
	cartoutput.innerHTML = cartList;

	// close cart pop up
	var closeBtn = document.getElementById("closeBtn");
	closeBtn.addEventListener("click",function(){
		document.getElementById("cart-output").style.right = "-300px";
	});

	// delete item button
	$(".deleteItemBtn").click(function(e) {
		var deletedItem = e.target.parentNode.children[0];
		// var index = cartList.indexOf(deletedItem);
		// if (index > -1) {
		//   cartList.splice(index, 1);
		// }
		// console.log(index);
		
		console.log(deletedItem);
		// deletedItem.classList.add("deleteMe");
	});
}