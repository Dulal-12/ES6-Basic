const lastItem = (input) => (typeof(input) === "string" ) ? input.split('').pop():input.pop();
console.log(lastItem("JavaScript is a great programming langauge."))
