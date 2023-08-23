---
title: Argument
slug: Glossary/Argument
page-type: glossary-definition
---

{{GlossarySidebar}}

An **argument** is a {{glossary("value")}} ({{Glossary("primitive")}} or {{Glossary("object")}}) passed as input to a {{Glossary("function")}}.

The argument order within the function call should be the same order as the {{Glossary("parameter","parameters")}} in the function. When there are more arguments in a function call then parameters in the function definition, the extra arguments are ignored.

For example:

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // passing two arguments

// This function takes a single value, so second argument passed is ignored
function example(parameter) {
  console.log(parameter); // Output = foo
}
```

## See also

- {{Glossary("parameter", "Difference between parameter and argument")}}
- The {{jsxref("Functions/arguments","arguments")}} object in {{glossary("JavaScript")}}
