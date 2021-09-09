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

### Parameters

- `thing`
  - : Anything to be converted to a string.

## Examples

### String constructor and String function

String function and String constructor produce different results:

```js
typeof String('Hello world'); // string
typeof new String('Hello world'); // object
```

Here, the function produces a string (the {{Glossary("primitive")}} type) as promised.
However, the constructor produces an instance of the type String (an object wrapper) and
that's why you rarely want to use the String constructor at all.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text formatting in the
  JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Text_formatting)
