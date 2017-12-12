var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients: COMPLETE

while(ingredients.length){
  var tempIng = ingredients.shift();
  console.log(tempIng)
}

// Write a for loop that prints out the contents of ingredients: COMPLETE

for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards: COMPLETE

while(ingredients.length){
  var count = ingredients.pop();
  console.log(count)
}
