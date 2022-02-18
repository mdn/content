---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
tags:
  - ECMAScript 5
  - JSON
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.JSON.parse
---
{{JSRef}}

The **`JSON.parse()`** method parses a
JSON string, constructing the JavaScript value or object described by the string. An
optional **reviver** function can be provided to perform a transformation
on the resulting object before it is returned.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameters

- `text`
  - : The string to parse as JSON. See the {{jsxref("JSON")}} object for a description of
    JSON syntax.
- `reviver` {{optional_inline}}
  - : If a function, this prescribes how the value originally produced by parsing is
    transformed, before being returned.

### Return value

The {{jsxref("Object")}}, {{jsxref("Array")}}, string, number, boolean, or null value
corresponding to the given JSON `text`.

### Exceptions

Throws a {{jsxref("SyntaxError")}} exception if the string to parse is not valid JSON.

## Examples

### Using JSON.parse()

```js
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

### Using the reviver parameter

If a `reviver` is specified, the value computed by parsing is
_transformed_ before being returned. Specifically, the computed value and all its
properties (beginning with the most nested properties and proceeding to the original
value itself) are individually run through the `reviver`. Then it
is called, with the object containing the property being processed as `this`,
and with the property name as a string, and the property value as arguments. If the
`reviver` function returns {{jsxref("undefined")}} (or returns no
value, for example, if execution falls off the end of the function), the property is
deleted from the object. Otherwise, the property is redefined to be the return value.

If the `reviver` only transforms some values and not others, be
certain to return all untransformed values as-is, otherwise, they will be deleted from
the resulting object.

```js
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value;     // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### JSON.parse() does not allow trailing commas

```js example-bad
// both will throw a SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
```

### JSON.parse() does not allow single quotes

```js example-bad
// will throw a SyntaxError
JSON.parse("{'foo': 1}");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON.stringify()")}}
