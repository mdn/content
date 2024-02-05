---
title: Parameter
slug: Glossary/Parameter
page-type: glossary-definition
---

{{GlossarySidebar}}

A parameter is a named variable passed into a {{Glossary("function")}}. Parameter variables are used to import {{Glossary("argument","arguments")}} into functions.

For example:

```js
function example(parameter) {
  console.log(parameter); // Output = foo
}

const argument = "foo";

example(argument);
```

There are two kinds of parameters:

- input parameters
  - : the most common kind; they pass values into functions. Depending on the programming language, input parameters can be passed in several ways (e.g., call-by-value, call-by-address, call-by-reference).
- output/return parameters
  - : primarily return multiple values from a function, but are not recommended since they cause confusion

### Parameters versus arguments

Note the difference between _parameters_ and _arguments_:

- Function parameters are the names listed in the function's definition.
- Function {{Glossary("argument","arguments")}} are the real values passed to the function.
- Parameters are initialized to the values of the arguments supplied.

## See also

- [Difference between _parameter_ and _argument_](https://en.wikipedia.org/wiki/Parameter_%28computer_programming%29#Parameters_and_arguments) on Wikipedia
- [Function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
