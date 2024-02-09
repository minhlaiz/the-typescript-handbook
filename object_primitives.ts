function printName(obj: { first: string; last?: string }) {
    console.log(`${obj}`) // --> this is called template strings
    console.log("---dash---")
    console.log(obj)
    console.log("---dash---")
    console.log(String(obj))
    console.log("---dash---")
    console.log(Object.prototype.toString.call(obj))
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });