---
title: Logical nullish assignment (??=)
slug: Web/JavaScript/Reference/Operators/Logical_nullish_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_nullish_assignment
---
{{jsSidebar("Operators")}}

The logical nullish assignment (`x ??= y`) operator only assigns if
`x` is {{Glossary("nullish")}} (`null` or `undefined`).

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

## Syntax

```js
expr1 ??= expr2
```

## Description

### Short-circuit evaluation

The [nullish coalescing](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) operator
is evaluated left to right, it is tested for possible short-circuit evaluation using the following rule:

`(some expression that is neither null nor undefined) ?? expr` is
short-circuit evaluated to the left-hand side expression if the left-hand side proves to
be neither `null` nor `undefined`.

Short circuit means that the `expr` part above is **not
evaluated**, hence any side effects of doing so do not take effect (e.g., if
`expr` is a function call, the calling never takes place).

Logical nullish assignment short-circuits as well meaning that `x ??= y` is
equivalent to:

```js
x ?? (x = y);
```

And not equivalent to the following which would always perform an assignment:

```js example-bad
x = x ?? y;
```

## Examples

### Using logical nullish assignment

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- {{Glossary("Nullish")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
