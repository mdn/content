---
title: Truthy
slug: Glossary/Truthy
page-type: glossary-definition
---

{{GlossarySidebar}}

In {{Glossary("JavaScript")}}, a **truthy** value is a value that is considered `true` when encountered in a {{Glossary("Boolean")}} context. All values are truthy unless they are defined as {{Glossary("Falsy", "falsy")}}. That is, all values are _truthy_ except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

{{Glossary("JavaScript")}} uses {{Glossary("Type_Coercion", "type coercion")}} in Boolean contexts.

Examples of _truthy_ values in JavaScript (which will be coerced to `true` in boolean contexts, and thus execute the `if` block):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### The logical AND operator, &&

If the first operand is truthy, the [logical AND operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the second operand:

```js
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```

## See also

- {{Glossary("Falsy")}}
- {{Glossary("Type_Coercion", "Type coercion")}}
- {{Glossary("Boolean")}}
- [Boolean coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
