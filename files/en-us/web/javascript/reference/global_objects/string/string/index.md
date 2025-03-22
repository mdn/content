---
title: String() constructor
slug: Web/JavaScript/Reference/Global_Objects/String/String
page-type: javascript-constructor
browser-compat: javascript.builtins.String.String
---

{{JSRef}}

The **`String()`** constructor creates {{jsxref("String")}} objects. When called as a function, it returns primitive values of type String.

## Syntax

```js-nolint
new String(thing)
String(thing)
```

> **Note:** `String()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

- `thing`
  - : Anything to be converted to a string.

### Return value

When `String()` is called as a function (without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new)), it returns `value` [coerced to a string primitive](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Specially, [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) values are converted to `"Symbol(description)"`, where `description` is the [description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) of the Symbol, instead of throwing.

When `String()` is called as a constructor (with `new`), it coerces `value` to a string primitive (without special symbol handling) and returns a wrapping {{jsxref("String")}} object, which is **not** a primitive.

> [!WARNING]
> You should rarely find yourself using `String` as a constructor.

## Examples

### String constructor and String function

String function and String constructor produce different results:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"
```

Here, the function produces a string (the {{Glossary("primitive")}} type) as promised.
However, the constructor produces an instance of the type String (an object wrapper) and
that's why you rarely want to use the String constructor at all.

### Using String() to stringify a symbol

`String()` is the only case where a symbol can be converted to a string without throwing, because it's very explicit.

```js example-bad
const sym = Symbol("example");
`${sym}`; // TypeError: Cannot convert a Symbol value to a string
"" + sym; // TypeError: Cannot convert a Symbol value to a string
"".concat(sym); // TypeError: Cannot convert a Symbol value to a string
```

```js example-good
const sym = Symbol("example");
String(sym); // "Symbol(example)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Numbers and strings](/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings) guide
