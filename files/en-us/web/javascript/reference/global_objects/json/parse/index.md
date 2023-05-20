---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
page-type: javascript-static-method
browser-compat: javascript.builtins.JSON.parse
---

{{JSRef}}

The **`JSON.parse()`** static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional _reviver_ function can be provided to perform a transformation on the resulting object before it is returned.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameters

- `text`
  - : The string to parse as JSON. See the {{jsxref("JSON")}} object for a description of JSON syntax.
- `reviver` {{optional_inline}}
  - : If a function, this prescribes how each value originally produced by parsing is transformed before being returned. Non-callable values are ignored. The function is called with the following arguments:
    - `key`
      - : The key associated with the value.
    - `value`
      - : The value produced by parsing.

### Return value

The {{jsxref("Object")}}, {{jsxref("Array")}}, string, number, boolean, or `null` value corresponding to the given JSON `text`.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if the string to parse is not valid JSON.

## Description

`JSON.parse()` parses a JSON string according to the [JSON grammar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar), then evaluates the string as if it's a JavaScript expression. The only instance where a piece of JSON text represents a different value from the same JavaScript expression is when dealing with the `"__proto__"` key — see [Object literal syntax vs. JSON](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### The reviver parameter

If a `reviver` is specified, the value computed by parsing is _transformed_ before being returned. Specifically, the computed value and all its properties (in a [depth-first](https://en.wikipedia.org/wiki/Depth-first_search) fashion, beginning with the most nested properties and proceeding to the original value itself) are individually run through the `reviver`.

The `reviver` is called with the object containing the property being processed as `this`, and two arguments: `key` and `value`, representing the property name as a string (even for arrays) and the property value. If the `reviver` function returns {{jsxref("undefined")}} (or returns no value — for example, if execution falls off the end of the function), the property is deleted from the object. Otherwise, the property is redefined to be the return value. If the `reviver` only transforms some values and not others, be certain to return all untransformed values as-is — otherwise, they will be deleted from the resulting object.

Similar to the `replacer` parameter of {{jsxref("JSON.stringify()")}}, `reviver` will be last called on the root object with an empty string as the `key` and the root object as the `value`. For JSON text parsing to primitive values, `reviver` will be called once.

Note that `reviver` is run after the value is parsed. So, for example, numbers in JSON text will have already been converted to JavaScript numbers, and may lose precision in the process. To transfer large numbers without loss of precision, serialize them as strings, and revive them to [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), or other appropriate arbitrary precision formats.

## Examples

### Using JSON.parse()

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Using the reviver parameter

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // return value * 2 for numbers
      : value, // return everything else unchanged
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### Using reviver when paired with the replacer of JSON.stringify()

In order for a value to properly round-trip (that is, it gets deserialized to the same original object), the serialization process must preserve the type information. For example, you can use the `replacer` parameter of {{jsxref("JSON.stringify()")}} for this purpose:

```js
// Maps are normally serialized as objects with no properties.
// We can use the replacer to specify the entries to be serialized.
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  key === "" ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```

Because JSON has no syntax space for annotating type metadata, in order to revive values that are not plain objects, you have to consider one of the following:

- Serialize the entire object to a string and prefix it with a type tag.
- "Guess" based on the structure of the data (for example, an array of two-member arrays)
- If the shape of the payload is fixed, based on the property name (for example, all properties called `registry` hold `Map` objects).

### JSON.parse() does not allow trailing commas

```js example-bad
// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
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
