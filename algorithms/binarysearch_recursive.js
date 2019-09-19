// find the center point, sort the array in terms of left and right
// repeat for the left and right side

function recursiveBinarySearch(arr, element, midPoint=Math.floor((arr.length - 1) / 2), start=0, end=arr.length-1) {
  console.log({arr, element, midPoint, start, end});
  // if the midpoint equals the element, then we have found the index of the element
  if (arr[midPoint] === element) {
    return midPoint; // base case
  }

  if (start >= end) {
    return -1; // base case
  }

  if (element > arr[midPoint]) {
    start = midPoint + 1;
  }
  else {
    end = midPoint - 1;
  }

  midPoint = Math.floor((start + end) / 2);

  return recursiveBinarySearch(arr, element, midPoint, start, end);
}

  // check if you found the element, else return -1
  return (arr[midPoint] === element) ? midPoint : -1;
}
