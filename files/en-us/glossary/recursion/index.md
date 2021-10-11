---
title: Recursion
slug: Glossary/Recursion
tags:
  - CodingScripting
  - Glossary
---
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

## Examples

### Recursive function calls itself until condition met

The following Python code defines a function that takes a number, prints it, and then calls itself again with the number's value -1. It keeps going until the number is equal to 0, in which case it stops.

```js
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

## See also

- {{Interwiki("wikipedia", "Recursion (computer science)")}} on Wikipedia
- [More details about recursion in JavaScript](/en-US/docs/Web/JavaScript/Guide/Functions#recursion)
