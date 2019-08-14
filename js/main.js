// var request = new XMLHttpRequest();
// request.open("GET", "text.json");
// request.onload = function(){
// 	var data = JSON.parse(request.responseText);
// 	console.log(request.responseText);
// };
// request.send();
let txt = '{"name":"Chips", "age":30, "city":"New York"}'
let text = 	[
	{
		name:"Chips",
		description: "Crispy chips with a side of aioli",
		price: 4.00
	},
	{
		name:"Wedges",
		description: "Crispy wedges with a side of BBQ sauce",
		price: 4.50
	},
	{
		name:"Tacos",
		description: "Fresh chicken or beef tacos with your choice of toppings",
		price: 6.00
	},
	{
		name:"Beef Burger",
		description: "Succulent beef pattie topped with fresh lettuce and bacon",
		price: 11.00
	},
	{
		name:"Chicken Burger",
		description: "Juicy chicken breast with lettuce and camembert",
		price: 12.00
	},
	{
		name:"Ribeye Steak",
		description: "Succulent ribeye steak with garlic butter",
		price: 24.00
	},
	{
		name:"Salmon",
		description: "Fresh King Salmon fron Nelson",
		price: 21.00
	}
];

var output = document.getElementById("menu-output");
// var divs = document.getElementByTagName("div");
function listMenu(menu) {
  let menuList = [];
  for (let i=0; i<menu.length; i++) {
  	menuList.push("<div><h2>" + menu[i].name + "</h2><p>" + menu[i].description + "</p><p>$" + menu[i].price + "</p></div>");
  }
  menuList = menuList.join("");
  output.innerHTML = menuList;
}
listMenu(text);

// divs.className += "out";