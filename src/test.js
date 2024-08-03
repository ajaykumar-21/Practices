// const name = {
//   fname: "Ajay",
//   lname: "kumar",
//   printFullName: function () {
//     console.log(this.fname + " " + this.lname + "!");
//   },
// };

// const printFullName = function (hometown, state) {
//   console.log(
//     this.fname + " " + this.lname + " " + hometown + " " + state + "!"
//   );
// };

// printFullName.call(name);

// let name2 = {
//   fname: "Vijay",
//   lname: "singh",
// };
// let res = printFullName.bind(name2, "Etawah", "Uttar Pradesh");
// console.log(res)
// res();
// printFullName.apply(name2, ["Etawah", "Uttar Pradesh"]);

// const printFullName = function () {
//   let innerFunction = () => {
//     console.log(this.fname + " " + this.lname + "!");
//   };
//   innerFunction();
// };

// name.printFullName();

// function add(a, b, c, ...others) {
//   console.log(others);
//   const restParam = others.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   return a + b + c + restParam;
// }

// console.log(add(1, 2, 3, 4, 5, 6, 7));

// const student = {
//   name: "Ajay",
//   age: 29,
//   hobbies: ["cricket", "cooking"],
// };

// const { ...rest } = student;
// console.log(rest);

// const newStudent = {
//   ...student,
//   age: 24,
// };

// console.log(newStudent);

// const userObj = {
//   name: "ajay",
//   age: 24,
// };

// function userInfo(obj) {
//   return function (key) {
//     return function (x) {
//       return obj[key] + x;
//     };
//   };
// }

// console.log(userInfo(userObj)("name")(7)); // Output: "ajay"
// console.log(userInfo(userObj)("age")(5)); // Output: 24

function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 1000);
  });
}

// fetchdata()
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

async function getData() {
  try {
    const data = await fetchdata();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

getData();
