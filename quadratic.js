function quadra(a, b, c) {
let equation = a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
document.write("<p>" + equation + "</p>");
document.write("<p>По теореме Виета:</p>");
let vietaAdd = -b / a;
if (Number.isInteger(vietaAdd)) {
document.write("x<sub>1</sub> + x<sub>2</sub> = " + -b + "/" + a + " = " + vietaAdd + "<br>");
}
else {
document.write("x<sub>1</sub> + x<sub>2</sub> = " + -b + "/" + a + " = " + vietaAdd + " ≈ " + Math.round(vietaAdd) + "<br>");
}
let vietaMultiply = c / a;
if (Number.isInteger(vietaMultiply)) {
document.write("x<sub>1</sub> * x<sub>2</sub> = " + c + "/" + a + " = " + vietaMultiply + "<br>");
}
else {
document.write("x<sub>1</sub>* x<sub>2</sub> = " + c + "/" + a + " = " + vietaMultiply + " ≈ " + Math.round(vietaMultiply) + "<br>");
}
document.write("<p>Решение уравнения:</p>")
let discrim = b*b - 4 * a * c;
document.write("D = b<sup>2</sup> - 4ac = " + discrim + "<br>");
if (discrim > 0) {
document.write("Два корня:" + "<br>");
let x1 = (-b + Math.sqrt(discrim)) / (2 * a);
let x2 = (-b - Math.sqrt(discrim)) / 2 * a;
if (Number.isInteger(x1)) {
document.write("x<sub>1</sub> = (-b + √D)/(2a) = " + x1 + "<br>");
}
else {
document.write("x<sub>1</sub> = (-b + √D)/(2a) = " + -b + Math.sqrt(discrim) + "/" + 2 * a + " = " + x1 + " ≈ " + Math.round(x1) + "<br>");
}
if (Number.isInteger(x2)) {
document.write("x<sub>2</sub> = (-b - √D)/(2a) = " + x2 + "<br>");
}
else {
document.write("x<sub>2</sub> = (-b - √D)/(2a) = " + -b - Math.sqrt(discrim) + "/" + 2 * a + " = " + x1 + " ≈ " + Math.round(x2) + "<br>");
}
return;
}
else if (discrim == 0) {
document.write("Один корень:<br>");
let x = -b / (2 * a);
if (Number.isInteger(x)) {
document.write("x<sub>1</sub> = (-b)/(2a) = " + x + "<br>");
}
else {
document.write("x<sub>1</sub> = (-b)/(2a) = " + -b + "/" + 2 * a + " = " + x + " ≈ " + Math.round(x) + "<br>");
}
return;
}
document.write("x = пустое множество<br><br>");
}
quadra(Number(prompt("a?")),Number(prompt("b?")),Number(prompt("c?")));
