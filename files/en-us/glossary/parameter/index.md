---
title: Parameter
slug: Glossary/Parameter
page-type: glossary-definition
---

{{GlossarySidebar}}

**Parameters** are named variables passed into a {{Glossary("function")}}. They are used to reference the {{Glossary("argument", "arguments")}} passed into the function.

For example:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // passing two arguments

// This function takes two values
function example(parameter1, parameter2) {
  console.log(parameter1); // Output = "Web"
  console.log(parameter2); // Output = "Development"
}
```

There are two kinds of parameters:

- input parameters
  - : the most common kind; they pass values into functions. Depending on the programming language, input parameters can be passed in several ways (e.g., call-by-value, call-by-address, call-by-reference).
- output/return parameters
  - : primarily return multiple values from a function, but are not recommended since they cause confusion

## See also

- [Difference between parameter and argument](/en-US/docs/Glossary/Parameter#parameters_versus_arguments)
- [Function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)
- Glossary
  - {{Glossary("Function")}}
  - {{Glossary("Argument")}}
