---
title: Argument
slug: Glossary/Argument
page-type: glossary-definition
---

{{GlossarySidebar}}

An **argument** is a {{glossary("value")}} ({{Glossary("primitive")}} or {{Glossary("object")}}) passed as input to a {{Glossary("function")}}.

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

The argument order within the function call should be the same as the {{Glossary("parameter","parameters")}} order in the function definition.

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // passing two arguments

// This function takes a single value, so the second argument passed is ignored
function example(parameter) {
  console.log(parameter); // Output = foo
}
```

## See also

- [Difference between parameter and argument](/en-US/docs/Glossary/Parameter#parameters_versus_arguments)
- The {{jsxref("Functions/arguments","arguments")}} object in {{glossary("JavaScript")}}
