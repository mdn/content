---
title: Logical OR assignment (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or_assignment
---
{{jsSidebar("Operators")}}

The logical OR assignment (`x ||= y`) operator only assigns if
`x` is {{Glossary("falsy")}}.

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntax

```js
expr1 ||= expr2
```

## Description

### Short-circuit evaluation

The [logical OR](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
operator works like this:

```js
x || y;
// returns x when x is truthy
// returns y when x is not truthy
```

The logical OR operator short-circuits: the second operand is only evaluated if the
first operand doesn't already determine the result.

Logical OR assignment short-circuits as well, meaning it only performs an assignment if
the logical operation would evaluate the right-hand side. In other words,
`x ||= y` is equivalent to:

```js
x || (x = y);
```

And not equivalent to the following which would always perform an assignment:

```js example-bad
x = x || y;
```

Note that this behavior is different to mathematical and bitwise assignment operators.

## Examples

### Setting default content

If the "lyrics" element is empty, display a default value:

```js
document.getElementById('lyrics').textContent ||= 'No lyrics.'
```

Here the short-circuit is especially beneficial, since the element will not be updated
unnecessarily and won't cause unwanted side-effects such as additional parsing or
rendering work, or loss of focus, etc.

Note: Pay attention to the value returned by the API you're checking against. If an
empty string is returned (a {{Glossary("falsy")}} value), `||=` must be used,
otherwise you want to use the `??=` operator (for [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or
{{jsxref("undefined")}} return values).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Logical OR (||)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [The nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Bitwise OR assignment (`|=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
