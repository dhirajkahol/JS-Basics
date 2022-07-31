// function myFunction(a, n) {
//   return a[n - 1];
// }

// myFunction("abc", 1);
// console.log(myFunction());

// function myFunction(a, b) {
//   if (b in a) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));

// function myFunction(a) {
//   return a.substring(0, a.length / 2);
// }
// console.log(myFunction("abcdefgh"));
// function myFunction(a, b) {
//   return a === b;
// }
// console.log(myFunction(2, 3));
// console.log(myFunction(3, 3));
// console.log(myFunction(1, "1"));
// function myFunction(a) {
//   return a.slice(a.length - 3);
// }
// console.log(myFunction("abcdefg"));
// function myFunction(a, b) {
//   if (a.includes(b)) {
//     return b + a;
//   } else {
//     return a + b;
//   }
// }
// console.log(myFunction("cheese", "cake"));
// console.log(myFunction(" think, therefore I am", "I"));
// function myFunction(a) {
//   return a.slice(0, -3);
// }

// console.log(myFunction("abcdefg"));
// function myFunction(a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e) ** f;
// }
// console.log(myFunction(6, 5, 4, 3, 2, 1));

// const text = "Mozilla";
// console.log(text.substring(2, 5));

// const text1 = "Javascript Tutorial";
// console.log(text1.substring(0, 10));
// function myFunc(a, b) {
//   return (a / 100) * b;
// }
// console.log(myFunc(10, 1));

// function myFunction(a, b) {
//   return (b / 100) * a;
// }
// console.log(myFunction(10, 1));

// let x = 10.4;
// console.log(Number.isInteger(x));
// console.log(x - Math.floor(x) === 0);

// function myFunction(a) {
//   return a % 2 === 0;
// }
// console.log(myFunction(-4));
// function myFunction(a) {
//   return String(a).split("").map(Number);

//   // return a.String.split("");

//   // const string = a + "";
//   // const strings = string.split("");
//   // return strings.map((digit) => Number(digit));
// }
// console.log(myFunction(193278));

// let str = "mozilla";
// console.log(str.split(""));

// console.log(str.substring(2, 5));
// // console.log(str.substr(2, 5));
// console.log(str.substring(str.length - 4));
// console.log(str.substring(0, 2));

// console.log(str.slice(2, 5));
// console.log(str.slice(0, -2));
// console.log(str.slice(str.length - 4));
// console.log(str.slice(3));

// console.log(str.replace("z", "t"));
// function myFunction(a) {
//   return Number(a.toFixed(2));
// }
// console.log(myFunction(1.12397));
// function myFunction(str) {
//   return str.replace(/[a-zA-Z]/g, function (x) {
//     return String.fromCharCode(x.charCodeAt(0) + 1);
//   });
// }

// console.log(myFunction("bgddrd"));

// function myFunction1(str) {
//   const arr = [...str];
//   const correctedArray = arr.map((e) =>
//     String.fromCharCode(e.charCodeAt() + 1)
//   );
//   return correctedArray.join("");
// }

// console.log(myFunction1("bgddrd"));
// function myF(a, b) {
//   let str = a.concat(b.split("").reverse().join("")).replaceAll("%", "");
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(myF("java", "tpi%rcs"));

// function myFunction(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return myFunction(++n);
//     }
//   }
//   return n;
// }
// console.log(myFunction(2000));

// function myFunction1(a) {
//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return num > 1;
//   }
//   let n = a;
//   while (!isPrime(n)) n++;
//   return n;
// }
// console.log(myFunction1(2000));
// function myFunction(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }
// console.log(myFunction(1, 23));
// 
function myF(a, b) {
  if (a < b) return a / b : return a * b;
  }
}
console.log(myF(2, 0.5));
