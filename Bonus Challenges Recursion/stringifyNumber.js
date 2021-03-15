// Write a function called  stringifyNumbers  which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// let obj = {
//   num: 1,
//   test: ["string", "c", 5, {val: 3, text: "str"}],
//   data: {
//       val: 4,
//       info: {
//           isRight: true,
//           random: 66
//       }
//   }
// }

// stringifyNumbers(obj)

// {
//   num: "1",
//   test: ["string", "c", "5", {val: "3", text: "str"}],
//   data: {
//       val: "4",
//       info: {
//           isRight: true,
//           random: "66"
//       }
//   }
// }

function stringifyNumbers(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            obj[key] = stringifyNumbers(obj[key])
        } else {
            obj[key] = obj[key].toString();
        }
    }
    return obj;
}

let obj = {
  num: 1,
  test: ["string", "c", 5, {val: 3, text: "str"}],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj))
