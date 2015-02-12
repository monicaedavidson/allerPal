var allergies = [
	{ value: "Milk"},
	{ value: "Eggs"},
	{ value: "Fish"},
	{ value: "Shellfish"},
	{ value: "Peanuts"},
	{ value: "Tree Nuts"},
	{ value: "Wheat"},
	{ value: "Gluten"},
	{ value: "Soy"}
];

$('#allergyInput').autocomplete({
  lookup: allergies
});
