// find the center point, sort the array in terms of left and right
// repeat for the left and right side

function binarySearch(arr, element) {

  // initialise start as 0
  let start = 0;
  // initialise end as end of array
  let end = arr.length - 1;
  // set midpoint as the half way index between start and end. Floor to make it the lesser of the 2 every time.
  let midPoint = Math.floor((start + end) / 2);

  // semi recursive
  // check that the midpoint value is not the element youre checking for
  // check that we havent gone beyond the end.
  while (arr[midPoint] !== element && start < end) {
    // if the one we're looking for is < than the element, then search the elements to the left (by changing the end value, which will be implemented in the next while iteration)
    if (element < arr[midPoint]) {
      // it wasnt the midpoint itself, so look for something to the left.
      end = midPoint - 1;
    }
    else {
      start = midPoint + 1;
    }
    // either the start or the end has been changed, so now find the new midpoint.
    midPoint = Math.floor( (start + end) / 2);
  }

  // check if you found the element, else return -1
  return (arr[midPoint] === element) ? midPoint : -1;
}
