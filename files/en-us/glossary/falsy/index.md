---
title: Falsy
slug: Glossary/Falsy
page-type: glossary-definition
---

{{GlossarySidebar}}

A **falsy** (sometimes written **falsey**) value is a value that is considered false when encountered in a {{Glossary("Boolean")}} context.

{{Glossary("JavaScript")}} uses {{Glossary("Type_Conversion", "type conversion")}} to coerce any value to a Boolean in contexts that require it, such as {{Glossary("Conditional", "conditionals")}} and {{Glossary("Loop", "loops")}}.

The following table provides a complete list of JavaScript falsy values:

| Value                       | Type      | Description                                                                                                                                         |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null      | The keyword [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) — the absence of any value.                                               |
| {{Glossary("undefined")}}   | Undefined | [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value.                                                 |
| `false`                     | Boolean   | The keyword [`false`](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                         |
| {{Glossary("NaN")}}         | Number    | [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) — not a number.                                                                    |
| `0`                         | Number    | The {{jsxref("Number")}} zero, also including `0.0`, `0x0`, etc.                                                                                    |
| `-0`                        | Number    | The {{jsxref("Number")}} negative zero, also including `-0.0`, `-0x0`, etc.                                                                         |
| `0n`                        | BigInt    | The {{jsxref("BigInt")}} zero, also including `0x0n`, etc. Note that there is no {{jsxref("BigInt")}} negative zero — the negation of `0n` is `0n`. |
| `""`                        | String    | Empty [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value, also including `''` and ` `` `.                                   |
| {{domxref("document.all")}} | Object    | The only falsy object in JavaScript is the built-in {{domxref("document.all")}}.                                                                    |

The values `null` and `undefined` are also [nullish](/en-US/docs/Glossary/Nullish).

## Examples

Examples of _falsy_ values in JavaScript (which are coerced to false in Boolean contexts, and thus _bypass_ the `if` block):

```js
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
```

### The logical AND operator, &&

If the first object is falsy, it returns that object:

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## See also

- Related glossary terms:
  - {{Glossary("Truthy")}}
  - {{Glossary("Type_coercion", "Coercion")}}
  - {{Glossary("Boolean")}}
- [Boolean coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
