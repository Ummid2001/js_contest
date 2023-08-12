let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  const result=arr.filter((element)=>element.profession=="developer")
  console.log("Developers are", result)
}

function addData() {
  const element={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(element)
  console.log("After adding an employee",arr)
}

function removeAdmin() {
  arr = arr.filter(item => item.profession !== 'admin');

console.log(arr);
}

function concatenateArray() {

  let arr1 = [
    { id: 4, name: 'anand', age: 18, profession: 'intern' },
    { id: 5, name: 'vikash', age: 20, profession: 'intern' },
    { id: 6, name: 'amit', age: 19, profession: 'inter' },
  ];
  let concatenatedArray = [...arr, ...arr1];

console.log(concatenatedArray);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
