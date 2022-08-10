---
title: Recursion
slug: Glossary/Recursion
tags:
  - CodingScripting
  - Glossary
---
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

## Examples

### Recursive function calls itself until condition met

The following Python code defines a function that takes a number, prints it, and then calls itself again with the number's value -1. It keeps going until the number is equal to 0, in which case it stops.

```py
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

The output will look like this:

10
9
8
7
6
5
4
3
2
1

### Recursion is limited by stack size

The following code defines a function that returns the maximum size of the call stack available in the JavaScript runtime in which the code is run.

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### Common usage examples

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
```

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

```js
const reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## See also

- [Recursion (computer science)](https://en.wikipedia.org/wiki/Recursion_(computer_science)) on Wikipedia
- [More details about recursion in JavaScript](/en-US/docs/Web/JavaScript/Guide/Functions#recursion)
