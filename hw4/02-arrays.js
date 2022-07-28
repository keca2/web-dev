let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  var length = result.length;
  var found = false;
  for (var index = 0; index < length && !found; index++)
  {
    if(result[index] === item)
    {
      result.splice(index, 1);
      found = true;
    }
  }
  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  if(index > result.length - 1 || index < 0){
    return null;
  }
  var val = result[index]
  result.splice(index, 1);
  return val;
};

const printItems = () => {
  var numbers = result.toString();
  numbers = numbers.replace(/,/g, ", ")
  return numbers;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);

console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
