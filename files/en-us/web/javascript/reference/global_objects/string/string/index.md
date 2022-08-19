---
title: String() constructor
slug: Web/JavaScript/Reference/Global_Objects/String/String
tags:
  - Constructor
  - JavaScript
  - Reference
  - String
browser-compat: javascript.builtins.String.String
---
{{JSRef}}

The **`String`** constructor is used to create a new
{{jsxref("String")}} object. When called instead as a function, it performs type
conversion to a {{Glossary("string", "primitive string")}}, which is usually more
useful.

## Syntax

```js
new String(thing)
String(thing)
```

> **Note:** `String()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

- `thing`
  - : Anything to be converted to a string.

### Return value

When `String` is called as a constructor (with `new`), it creates a {{jsxref("String")}} object, which is **not** a primitive.

When `String` is called as a function, it coerces the parameter to a string primitive.

> **Warning:** You should rarely find yourself using `String` as a constructor.

## Examples

### String constructor and String function

String function and String constructor produce different results:

```js
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world");     // b === "Hello world" is true
a instanceof String;         // is true
b instanceof String;         // is false
typeof a // "object"
typeof b // "string"
```

Here, the function produces a string (the {{Glossary("primitive")}} type) as promised.
However, the constructor produces an instance of the type String (an object wrapper) and
that's why you rarely want to use the String constructor at all.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text formatting in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Text_formatting)
