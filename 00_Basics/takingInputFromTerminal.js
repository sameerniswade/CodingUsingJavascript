let n;

process.stdin.on('data', (data) => {
  console.log("data", data.toString())
  console.log("type", typeof data)
})

// process.stdin.on('end', () => {
//    console.log(n)
// })