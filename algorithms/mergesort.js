function mergeSort(arr) {
  // split the array in two until it is singular

  // check if the array is one, then we are at the end of the tree branch, and ready to go back up. So we return.
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];

  //split the array in two, with the right holding the extra if uneven.
  for (let i=0; i < arr.length; i++) {
    if (i < arr.length/2) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }

  // continue splitting recursively, only returning when the length === 1 as defined above.
  // left sorted will execute first, pausing this function. This will repeat down the tree completing all left sorts, then it will go back up the tree sorting all the right sorts. Once the right is sorted then it will continue on to return the merged array, allowign the branch above to continue its code as well.
  const leftsorted = mergeSort(left);
  const rightsorted = mergeSort(right);

  // when all the sorting is complete, compare each array in the merge function, comparing each element and sorting the lesser to go into the array first.
  // this will eventally return the final array back, sorted.
  return merge(leftsorted, rightsorted);
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

console.log(mergeSort([1, 4, 3, 6, 45, -2, 2]));
