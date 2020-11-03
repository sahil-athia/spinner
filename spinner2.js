const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let offset = 0;
for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`)
  }, offset )
  offset += 200
}