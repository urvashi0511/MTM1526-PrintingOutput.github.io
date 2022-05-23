let a= 3;
let b= 5;
let c= null;

let result ='var a=' + a + ';\n';
result += 'var b=' + b + ';\n';
result += 'var c;\n';
result += '--------\n';
result += 'a + b = ' +  (a + b) + '\n';

result += 'a - b = ' + (a - b) + '\n';

result += 'a * b = ' + (a * b) + '\n';
result += 'a / b = ' + (a / b) + '\n';
result += 'a % b = ' + (a % b) + '\n';
result += '(a += b): ' + (a += b) + '\n';
result += '(a -= b): ' + (a -= b) + '\n';
result += '(a *= b ): '+ (a *= b) + '\n';
result += '(a /= b ): ' + (a /= b) + '\n';
result += '(a == b ): ' +(a == b) + '\n';
result += '(a != b ): ' + (a != b) + '\n';
result += '(a > b ): ' + (a > b) + '\n';
result += '(a < b ): ' + (a < b) + '\n';
result += '(!a && !c ): ' + (!a && !c) + '\n';
result += '(!a || !c ): ' + (!a || !c) + '\n';

alert(result);


