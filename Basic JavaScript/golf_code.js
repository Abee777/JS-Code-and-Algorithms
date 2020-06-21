function golfScore(par, strokes) {
  // Only change code below this line

 if (strokes==1) {
    return "Hole-in-one!";
  } else if (strokes<par-1) {
    return "Eagle";
  } else if (strokes<par) {
    return "Birdie";
  } else if (strokes<par+1) {
    return "Par";
  } else if (strokes<par+2) {
    return "Bogey";
  } else if (strokes<par+3) {
    return "Double Bogey";
  } else if (strokes>=par+3) {
    return "Go Home!"
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5,2));


// Second solution (few months later):

function golfScore(par, strokes) {
  // Only change code below this line
  
  if (strokes==1){
    return "Hole-in-one!";
  } else if (strokes<= par-2){
    return "Eagle";
  } else if (strokes<= par-1){
    return "Birdie";
  } else if (strokes == par){
    return "Par";
  } else if (strokes > par && strokes<=par+1){
    return "Bogey";
  } else if (strokes > par+1 && strokes<=par+2){
    return "Double Bogey";
  } else if (strokes > par+2){
    return "Go Home!";
  }
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));