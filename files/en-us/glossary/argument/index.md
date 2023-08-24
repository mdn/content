---
title: Argument
slug: Glossary/Argument
page-type: glossary-definition
---

{{GlossarySidebar}}

An **argument** is a {{glossary("value")}} ({{Glossary("primitive")}} or {{Glossary("object")}}) passed as input to a {{Glossary("function")}}.

The argument order within the function call should be the same as the {{Glossary("parameter","parameters")}} order in the function definition.

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
