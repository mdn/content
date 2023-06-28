---
title: Logical OR assignment (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
page-type: javascript-operator
browser-compat: javascript.operators.logical_or_assignment
---

{{jsSidebar("Operators")}}

The **logical OR assignment (`x ||= y`)** operator only assigns if `x` is {{Glossary("falsy")}}.

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntax

```js-nolint
x ||= y
```

## Description

Logical OR assignment [_short-circuits_](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), meaning that `x ||= y` is equivalent to:

```js
x || (x = y);
```

No assignment is performed if the left-hand side is not falsy, due to short-circuiting of the [logical OR](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) operator. For example, the following does not throw an error, despite `x` being `const`:

```js
const x = 1;
x ||= 2;
```

Neither would the following trigger the setter:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ||= 2;
```

In fact, if `x` is truthy, `y` is not evaluated at all.

```js
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Examples

### Setting default content

If the "lyrics" element is empty, display a default value:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Here the short-circuit is especially beneficial, since the element will not be updated unnecessarily and won't cause unwanted side-effects such as additional parsing or rendering work, or loss of focus, etc.

Note: Pay attention to the value returned by the API you're checking against. If an empty string is returned (a {{Glossary("falsy")}} value), `||=` must be used, so that "No lyrics." is displayed instead of a blank space. However, if the API returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or
{{jsxref("undefined")}} in case of blank content, [`??=`](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) should be used instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Logical OR (||)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [The nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitwise OR assignment (`|=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
