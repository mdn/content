---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Method
  - Objects
  - Reference
  - stringify
  - Polyfill
browser-compat: javascript.builtins.JSON.stringify
---

{{JSRef}}

The **`JSON.stringify()`** method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## Syntax

```js
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Parameters

- `value`
  - : The value to convert to a JSON string.
- `replacer` {{optional_inline}}
  - : A function that alters the behavior of the stringification process, or an array of strings or numbers naming properties of `value` that should be included in the output. If `replacer` is an array, all elements that are not strings or numbers (can be either primitives or wrapper objects), including {{jsxref("Symbol")}} values, are completely ignored. If `replacer` is anything other than a function or an array (e.g. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or not provided), all properties of the object are included in the resulting JSON string.
- `space` {{optional_inline}}

  - : A string or number that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.

    If this is a number, it indicates the number of space characters to be used as indentation, clamped to 10 (that is, any number greater than `10` is treated as if it were `10`). Values less than 1 indicate that no space should be used.

    If this is a string, the string (or the first 10 characters of the string, if it's longer than that) is inserted before every nested object or array.

    If `space` is anything other than a string or number (can be either a primitive or a wrapper object) — for example, is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or not provided — no white space is used.

### Return value

A JSON string representing the given value, or undefined.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Thrown if one of the following is true:
    - `value` contains a circular reference.
    - A {{jsxref("BigInt")}} value is encountered.

## Description

`JSON.stringify()` converts a value to JSON notation representing it:

- {{JSxRef("Boolean")}}, {{JSxRef("Number")}}, {{JSxRef("String")}}, and {{jsxref("BigInt")}} (obtainable via [`Object()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) objects are converted to the corresponding primitive values during stringification, in accordance with the traditional conversion semantics. {{jsxref("Symbol")}} objects (obtainable via [`Object()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) are treated as plain objects.
- Attempting to serialize {{jsxref("BigInt")}} values will throw. However, if the BigInt has a `toJSON()` method (through monkeypatching: `BigInt.prototype.toJSON = ...`), that method can provide the serialization result. This constraint ensures that a proper serialization (and, very likely, its accompanying deserialization) behavior is always explicitly provided by the user.
- {{JSxRef("undefined")}}, {{JSxRef("Function")}}, and {{JSxRef("Symbol")}} values are not valid JSON values. If any such values are encountered during conversion, they are either omitted (when found in an object) or changed to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) (when found in an array). `JSON.stringify()` can return `undefined` when passing in "pure" values like `JSON.stringify(() => {})` or `JSON.stringify(undefined)`.
- The numbers {{JSxRef("Infinity")}} and {{JSxRef("NaN")}}, as well as the value [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), are all considered `null`. (But unlike the values in the previous point, they would never be omitted.)
- Arrays are serialized as arrays (enclosed by square brackets). Only array indices between 0 and `length - 1` (inclusive) are serialized; other properties are ignored.
- For other objects:

  - All {{JSxRef("Symbol")}}-keyed properties will be completely ignored, even when using the [`replacer`](#the_replacer_parameter) parameter.

  - If the value has a `toJSON()` method, it's responsible to define what data will be serialized. Instead of the object being serialized, the value returned by the `toJSON()` method when called will be serialized. `JSON.stringify()` calls `toJSON` with one parameter, the `key`, which has the same semantic as the `key` parameter of the [`replacer`](#the_replacer_parameter) function:

    - if this object is a property value, the property name
    - if it is in an array, the index in the array, as a string
    - if `JSON.stringify()` was directly called on this object, an empty string

    {{JSxRef("Date")}} objects implement the [`toJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) method which returns a string (the same as [`date.toISOString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)). Thus, they will be stringified as strings.

  - Only [enumerable own properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) are visited. This means {{JSxRef("Map")}}, {{JSxRef("Set")}}, etc. will become `"{}"`. You can use the [`replacer`](#the_replacer_parameter) parameter to serialize them to something more useful.

    Properties are visited using the same algorithm as [`Object.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), which has a well-defined order and is stable across implementations. For example, `JSON.stringify` on the same object will always produce the same string, and `JSON.parse(JSON.stringify(obj))` would produce an object with the same key ordering as the original (assuming the object is completely JSON-serializable).

### The replacer parameter

The `replacer` parameter can be either a function or an array.

As an array, its elements indicate the names of the properties in the object that should be included in the resulting JSON string. Only string and number values are taken into account; symbol keys are ignored.

As a function, it takes two parameters: the `key` and the `value` being stringified. The object in which the key was found is provided as the `replacer`'s `this` context.

The `replacer` function is called for the initial object being stringified as well, in which case the `key` is an empty string (`""`). It is then called for each property on the object or array being stringified. Array indices will be provided in its string form as `key`. The current property value will be replaced with the `replacer`'s return value for stringification. This means:

- If you return a {{JSxRef("Number")}}, {{JSxRef("String")}}, {{JSxRef("Boolean")}}, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), the stringified version of that value is used as the property's value.
- If you return a {{JSxRef("Function")}}, {{JSxRef("Symbol")}}, or {{JSxRef("undefined")}}, the property is not included in the output.
- If you return any other object, the object is recursively stringified, calling the `replacer` function on each property.

> **Note:** When parsing JSON generated with `replacer` functions, you would likely want to use the [`reviver`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) parameter to perform the reverse operation.

Typically, array elements' index would never shift (even when the element is an invalid value like a function, it will become `null` instead of omitted). Using the `replacer` function allows you to control the order of the array elements by returning a different array.

### The space argument

The `space` argument may be used to control spacing in the final string.

- If it is a number, successive levels in the stringification will each be indented by this many space characters.
- If it is a string, successive levels will be indented by this string.

Each level of indentation will never be longer than 10. Number values of `space` are clamped to 10, and string values are truncated to 10 characters.

## Examples

### Using JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  })
);
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Using a function as replacer

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

If you wish the `replacer` to distinguish an initial object from a key with an empty string property (since both would give the empty string as key and potentially an object as value), you will have to keep track of the iteration count (if it is beyond the first iteration, it is a genuine empty string key).

```js
function makeReplacer() {
  let isInitial = true;

  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Omit all properties with name "" (except the initial object)
      return undefined;
    }
    return value;
  };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Using an array as replacer

```js
const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### Using the space parameter

Indent the output with one space:

```js
console.log(JSON.stringify({ a: 2 }, null, " "));
/*
{
 "a": 2
}
*/
```

Using a tab character mimics standard pretty-print appearance:

<!-- markdownlint-disable MD010 -->
```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```
<!-- markdownlint-enable MD010 -->

### toJSON() behavior

Defining `toJSON()` for an object allows overriding its serialization behavior.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Now I am a nested object under key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([obj]);
// '["Now I am a nested object under key '0'"]'
```

### Issue with serializing circular references

Since the [JSON format](https://www.json.org/) doesn't support object references (although an [IETF draft exists](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), a {{JSxRef("TypeError")}} will be thrown if one attempts to encode an object with circular references.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

To serialize circular references, you can use a library that supports them (e.g. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) by Douglas Crockford) or implement a solution yourself, which will require finding and replacing (or removing) the cyclic references by serializable values.

If you are using `JSON.stringify()` to deep-copy an object, you may instead want to use [`structuredClone()`](/en-US/docs/Web/API/structuredClone), which supports circular references. JavaScript engine APIs for binary serialization, such as [`v8.serialize()`](https://nodejs.org/api/v8.html#v8serializevalue), also support circular references.

### Using JSON.stringify() with localStorage

In a case where you want to store an object created by your user and allow it to be restored even after the browser has been closed, the following example is a model for the applicability of `JSON.stringify()`:

```js
// Creating an example of JSON
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

### Well-formed JSON.stringify()

Engines implementing the [well-formed JSON.stringify specification](https://github.com/tc39/proposal-well-formed-stringify) will stringify lone surrogates (any code point from U+D800 to U+DFFF) using Unicode escape sequences rather than literally (outputting lone surrogates). Before this change, such strings could not be encoded in valid UTF-8 or UTF-16:

```js
JSON.stringify("\uD800"); // '"�"'
```

But with this change `JSON.stringify()` represents lone surrogates using JSON escape sequences that _can_ be encoded in valid UTF-8 or UTF-16:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

This change should be backwards-compatible as long as you pass the result of `JSON.stringify()` to APIs such as `JSON.parse()` that will accept any valid JSON text, because they will treat Unicode escapes of lone surrogates as identical to the lone surrogates themselves. _Only_ if you are directly interpreting the result of `JSON.stringify()` do you need to carefully handle `JSON.stringify()`'s two possible encodings of these code points.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `JSON.stringify` behavior (symbol and well-formed unicode) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{JSxRef("JSON.parse()")}}
