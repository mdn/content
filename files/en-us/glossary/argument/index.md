---
title: Argument
slug: Glossary/Argument
page-type: glossary-definition
---

{{GlossarySidebar}}

**Arguments** are {{glossary("value", "values")}} ({{Glossary("primitive")}} or {{Glossary("object")}}) passed as input to a {{Glossary("function")}}. Do not confuse arguments with {{Glossary("parameter","parameters")}}, which are the names used in the function definition to refer to the arguments.

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

The argument order within the function call should be the same as the parameters order in the function definition.

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
- {{jsxref("Functions/arguments", "arguments")}} JavaScript object
- Related glossary terms:
  - {{Glossary("Function")}}
  - {{Glossary("Parameter")}}
  - {{glossary("JavaScript")}}
