// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

// Input Format: N = 6
// Result:
// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * *

let input = 5;
let n = 1;

while(n <= input) {
   for(let i = 1; i <= n; i++) {
    process.stdout.write("*");
   }
   n++;
   process.stdout.write("\n");               
}
