---
title: Nullish coalescing assignment (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
page-type: javascript-operator
browser-compat: javascript.operators.nullish_coalescing_assignment
---

{{jsSidebar("Operators")}}

The **nullish coalescing assignment (`??=`)** operator, also known as the **logical nullish assignment** operator, only assigns if `x` is {{Glossary("nullish")}} (`null` or `undefined`).

{{EmbedInteractiveExample("pages/js/expressions-logical-nullish-assignment.html")}}

## Syntax

```js-nolint
x ??= y
```

## Description

Nullish coalescing assignment [_short-circuits_](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), meaning that `x ??= y` is equivalent to:

```js
x ?? (x = y);
```

No assignment is performed if the left-hand side is not nullish, due to short-circuiting of the [nullish coalescing](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) operator. For example, the following does not throw an error, despite `x` being `const`:

```js
const x = 1;
x ??= 2;
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

x.value ??= 2;
```

In fact, if `x` is not nullish, `y` is not evaluated at all.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Examples

### Using nullish coalescing assignment

You can use the nullish coalescing assignment operator to apply default values to object properties. Compared to using destructuring and [default values](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value), `??=` also applies the default value if the property has value `null`.

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

- [The nullish coalescing operator (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
