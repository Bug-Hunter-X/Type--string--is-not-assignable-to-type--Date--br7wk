function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}.`
}

let message = greet("John", new Date());
console.log(message); 