function quickSort(arr){
  // return the array when you get down to the last element. This allows the algorithm to begin working back up the tree.
  if (arr.length <= 1) {
      return arr;
  }
  // need to split the array, otherwise it will mutate
  let array = [...arr]
  // partition the array
  // pick a pivot of the array.
  // shift removes the first object in arr and puts it into the pivot object.
  let center = array.shift();
  let centerarr = [center];
  let leftarr = [];
  let rightarr = [];
  // sort the rest of the ray either above or below it.
  while (array.length) {
    // remove each element of the array and sort it into either left or right.
    let current = array.shift();
    if (current < center) {
      leftarr.push(current);
    }
    else if (current >= center) {
      rightarr.push(current);
    }
  }
    // quicksort left side to go further down the tree.
    // this will stop the rest of the function from happening until all left sorts have completed, then the right sorts will begin from the bottom up.
    const left = quickSort(leftarr);
    // quicksort right side
    const right = quickSort(rightarr);

    // join the arrays together
    let total = left.concat(centerarr, right);
    return total;
}


console.log(quickSort([12,6,3,7,13,8]));
