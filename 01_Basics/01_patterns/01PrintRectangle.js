// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *


// Example 2:
// Input: N = 6
// Output:
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *


let n = 7;

for(let i = 1; i<=n ; i++) {
    for(let j = 1; j<=n ; j++) {
        process.stdout.write("*");
    }
    console.log("")
}