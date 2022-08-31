---
title: Falsy
slug: Glossary/Falsy
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
A **falsy** (sometimes written **falsey**) value is a value that is considered false when encountered in a {{Glossary("Boolean")}} context.

{{Glossary("JavaScript")}} uses {{Glossary("Type_Conversion", "type conversion")}} to coerce any value to a Boolean in contexts that require it, such as {{Glossary("Conditional", "conditionals")}} and {{Glossary("Loop", "loops")}}.

The following table provides a complete list of JavaScript falsy values:

| Value                                | Description                                                                                                                                                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                              | The keyword [`false`](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards).                                                                                                                 |
| `0`                                  | The {{jsxref("Number")}} zero (so, also `0.0`, etc., and `0x0`).                                                                                                                                                                 |
| `-0`                                 | The {{jsxref("Number")}} negative zero (so, also `-0.0`, etc., and `-0x0`).                                                                                                                                                      |
| `0n`                                 | The {{jsxref("BigInt")}} zero (so, also `0x0n`). Note that there is no {{jsxref("BigInt")}} negative zero — the negation of `0n` is `0n`.                                                                                |
| `""`, `''`, ` `` `                   | Empty [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value.                                                                                                                                                        |
| {{Glossary("null")}}         | [null](/en-US/docs/Web/JavaScript/Reference/Operators/null) — the absence of any value.                                                                                                                                             |
| {{Glossary("undefined")}}     | [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value.                                                                                                                                        |
| {{Glossary("NaN")}}             | [NaN](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) — not a number.                                                                                                                                                           |
| {{domxref("document.all")}} | Objects are falsy if and only if they have the [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot. That slot only exists in {{domxref("document.all")}} and cannot be set using JavaScript. |

## Examples

Examples of _falsy_ values in JavaScript (which are coerced to false in Boolean contexts, and thus _bypass_ the `if` block):

```js
if (false) {}
if (null) {}
if (undefined) {}
if (0) {}
if (-0) {}
if (0n) {}
if (NaN) {}
if ("") {}
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

- {{Glossary("Truthy")}}
- {{Glossary("Type_coercion", "Coercion")}}
- {{Glossary("Boolean")}}
