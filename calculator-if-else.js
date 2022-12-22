// calculator program with if-else...
console.log("...........CALCULATOR PROGRAM..........");
const s1 = Number(prompt("Enter 1. number:"));
const islem = prompt("islem giriniz (+,-,*,/)");
const s2 = Number(prompt("Enter 2. number:"));
let sonuc = 0;
if (islem == "+") {
  sonuc = s1 + s2;
  console.log("işleminizin sonucu: " + sonuc);
} else if (islem == "-") {
  sonuc = s1 - s2;
  console.log("işleminizin sonucu: " + sonuc);
} else if (islem == "*") {
  sonuc = s1 * s2;
  console.log("işleminizin sonucu: " + sonuc);
} else if (islem == "/") {
  sonuc = s1 / s2;
  console.log("işleminizin sonucu: " + sonuc);
} else {
  console.log("hatalı bir işlem girdiniz");
}
