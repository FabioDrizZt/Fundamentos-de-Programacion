// Operadores de comparación

// ==: Igualdad
console.log(5 == 5); // true
console.log(5 == 6); // false
console.log(5 == "5"); // true

// ===: Igualdad con tipos
console.log(5 === 5); // true
console.log(5 === 6); // false
console.log(5 === "5"); // false

// !=: Diferencia
console.log(5 != 5); // false
console.log(5 != 6); // true
console.log(5 != "5"); // false

// !==: Diferencia con tipos
console.log(5 !== 5); // false
console.log(5 !== 6); // true
console.log(5 !== "5"); // true

// >: Mayor que
console.log(5 > 5); // false
console.log(6 > 5); // true
console.log("b" > "a"); // true
console.log("bb" > "ba"); // true
console.log("ba" > "bb"); // false
console.log("manzana" > "mango"); // true

// >=: Mayor o igual que
console.log(5 >= 5); // true
console.log(6 >= 5); // true
console.log("b" >= "a"); // true
console.log("bb" >= "ba"); // true
console.log("ba" >= "bb"); // false
console.log("manzana" >= "mango"); // true

// <: Menor que
console.log(5 < 5); // false
console.log(6 < 5); // false
console.log("b" < "a"); // false
console.log("bb" < "ba"); // false
console.log("ba" < "bb"); // true
console.log("manzana" < "mango"); // false

// <=: Menor o igual que
console.log(5 <= 5); // true
console.log(6 <= 5); // false
console.log("b" <= "a"); // false
console.log("bb" <= "ba"); // false
