var sum = 0; 
process.argv.slice(2).forEach((val, index) => sum += Number(val));
console.log(sum);


/*
var result = 0

for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)
*/