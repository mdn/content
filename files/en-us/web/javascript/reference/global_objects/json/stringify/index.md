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

The **`JSON.stringify()`** method converts a JavaScript object
or value to a JSON string, optionally replacing values if a replacer function is
specified or optionally including only the specified properties if a replacer array is
specified.

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
  - : A function that alters the behavior of the stringification process, or an array of
    strings or numbers naming properties of `value` that should be included in the output. If `replacer` is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or not provided,
    all properties of the object are included in the resulting JSON string.
- `space` {{optional_inline}}

  - : A {{JSxRef("String")}} or {{JSxRef("Number")}} object that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.

    If this is a `Number`, it indicates the number of space characters to
    use as white space for indenting purposes; this number is capped at 10 (if it is greater, the value is just
    `10`). Values less than 1 indicate that no space should be used.

    If this is a `String`, the string (or the first 10 characters of the
    string, if it's longer than that) is used as white space.

    If this parameter is not provided (or is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)), no white space is used.

### Return value

A JSON string representing the given value, or undefined.

### Exceptions

- Throws a {{JSxRef("TypeError")}} ("cyclic object value") exception when a circular
  reference is found.
- Throws a {{JSxRef("TypeError")}} ("BigInt value can't be serialized in JSON") when
  trying to stringify a {{jsxref("BigInt")}} value.

## Description

`JSON.stringify()` converts a value to JSON notation representing it:

- If the value has a [`toJSON()`](#tojson_behavior) method, it's
  responsible to define what data will be serialized.
- {{JSxRef("Boolean")}}, {{JSxRef("Number")}}, and {{JSxRef("String")}} objects are
  converted to the corresponding primitive values during stringification, in accord with
  the traditional conversion semantics.
- {{JSxRef("undefined")}}, {{JSxRef("Function")}}s, and {{JSxRef("Symbol")}}s are not
  valid JSON values. If any such values are encountered during conversion they are
  either omitted (when found in an object) or changed to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) (when found
  in an array). `JSON.stringify()` can return `undefined` when
  passing in "pure" values like `JSON.stringify(() => {})` or
  `JSON.stringify(undefined)`.
- All {{JSxRef("Symbol")}}-keyed properties will be completely ignored, even when
  using the `replacer` function.
- The instances of {{JSxRef("Date")}} implement the `toJSON()` function by
  returning a string (the same as `date.toISOString()`). Thus, they are
  treated as strings.
- The numbers {{JSxRef("Infinity")}} and {{JSxRef("NaN")}}, as well as the value
  [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), are all considered `null`.
- All the other {{JSxRef("Object")}} instances (including {{JSxRef("Map")}},
  {{JSxRef("Set")}}, {{JSxRef("WeakMap")}}, and {{JSxRef("WeakSet")}}) will have only
  their enumerable properties serialized.
  - Enumerable properties are visited using the same algorithm as [`Object.keys`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), which has a well-defined order and is stable across implementations. For example, `JSON.stringify` on the same object will always produce the same string, and `JSON.parse(JSON.stringify(obj))` would produce an object with the same key ordering as the original (assuming the object is completely JSON-serializable).

## Examples

### Using JSON.stringify

```js
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function() {}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify(Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }));
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({x: 2n});
// TypeError: BigInt value can't be serialized in JSON
```

### The replacer parameter

The `replacer` parameter can be either a function or an array.

**As a function**, it takes two parameters: the _key_ and the
_value_ being stringified. The object in which the key was found is provided as
the `replacer`'s `this` parameter.

Initially, the `replacer` function is called with an empty string
as key representing the object being stringified. It is then called for each property on
the object or array being stringified.

It should return the value that should be added to the JSON string, as follows:

- If you return a {{JSxRef("Number")}}, {{JSxRef("String")}}, {{JSxRef("Boolean")}},
  or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), the stringified version of that value is used as the property's
  value.
- If you return a {{JSxRef("Function")}}, {{JSxRef("Symbol")}}, or
  {{JSxRef("undefined")}}, the property is not included in the output.
- If you return any other object, the object is recursively stringified, calling the
  `replacer` function on each property.

> **Note:** You cannot use the `replacer` function
> to remove values from an array. If you return `undefined` or a function
> then `null` is used instead.

> **Note:** If you wish the `replacer` to
> distinguish an initial object from a key with an empty string property (since both
> would give the empty string as key and potentially an object as value), you will have
> to keep track of the iteration count (if it is beyond the first iteration, it is a
> genuine empty string key).

#### Example replacer, as a function

```js
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

const foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

#### Example _replacer_, as an array

If `replacer` is an array, the array's values indicate the names
of the properties in the object that should be included in the resulting JSON string.

```js
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### The space argument

The `space` argument may be used to control spacing in the final string.

- **If it is a number**, successive levels in the stringification will
  each be indented by this many space characters (up to 10).
- **If it is a string**, successive levels will be indented by this
  string (or the first ten characters of it).

```js
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
```

Using a tab character mimics standard pretty-print appearance:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### toJSON() behavior

If an object being stringified has a property named `toJSON` whose value is
a function, then the `toJSON()` method customizes JSON stringification
behavior: instead of the object being serialized, the value returned by the
`toJSON()` method when called will be serialized.
`JSON.stringify()` calls `toJSON` with one parameter:

- if this object is a property value, the property name
- if it is in an array, the index in the array, as a string
- an empty string if `JSON.stringify()` was directly called on this object

For example:

```js
const obj = {
  data: 'data',

  toJSON(key) {
    return key ? `Now I am a nested object under key '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj }); // Shorthand property names (ES2015).
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([ obj ]);
// '["Now I am a nested object under key '0'"]'
```

### Issue with JSON.stringify() when serializing circular references

Note that since the [JSON format](https://www.json.org/) doesn't support
object references (although an [IETF draft exists](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)),
a {{JSxRef("TypeError")}} will be thrown if one attempts to encode an
object with circular references.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

To serialize circular references you can use a library that supports them (e.g. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)
by Douglas Crockford) or implement a solution by yourself, which will require finding
and replacing (or removing) the cyclic references by serializable values.

### Issue with plain JSON.stringify for use as JavaScript

Historically, JSON was not a completely strict subset of JavaScript. The literal code
points U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR could appear literally in
string literals and property names in JSON text. But they could not appear literally in
similar context in JavaScript text, only using Unicode escapes as `\u2028` and
`\u2029`. This recently changed: now both code points may appear literally in
strings in JSON and JavaScript both.

Therefore, if compatibility with older JavaScript engines is required, it is perilous
to directly substitute the string returned by `JSON.stringify` into a
JavaScript string to be passed to `eval` or `new Function` or as
part of a [JSONP](https://en.wikipedia.org/wiki/JSONP) URL, and the following
utility can be used:

```js
function jsFriendlyJSONStringify (s) {
  return JSON.stringify(s)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

const s = {
  a: String.fromCharCode(0x2028),
  b: String.fromCharCode(0x2029),
};

try {
  eval('(' + JSON.stringify(s) + ')');
} catch (e) {
  console.log(e); // "SyntaxError: unterminated string literal"
}

// No need for a catch
eval('(' + jsFriendlyJSONStringify(s) + ')');

// console.log in Firefox unescapes the Unicode if
//   logged to console, so we use alert
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

```js
const a = JSON.stringify({ foo: "bar", baz: "quux" })
//'{"foo":"bar","baz":"quux"}'
const b = JSON.stringify({ baz: "quux", foo: "bar" })
//'{"baz":"quux","foo":"bar"}'
console.log(a !== b) // true

// some memoization functions use JSON.stringify to serialize arguments,
// which may cause a cache miss when encountering the same object like above
```

### Example of using JSON.stringify() with localStorage

In a case where you want to store an object created by your user and allowing it to be
restored even after the browser has been closed, the following example is a model for
the applicability of `JSON.stringify()`:

```js
// Creating an example of JSON
const session = {
  'screens': [],
  'state': true
};
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem('session', JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
const restoredSession = JSON.parse(localStorage.getItem('session'));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

### Well-formed JSON.stringify()

Engines implementing the [well-formed JSON.stringify specification](https://github.com/tc39/proposal-well-formed-stringify)
will stringify lone surrogates, any code point from
U+D800 to U+DFFF, using Unicode escape sequences rather than literally. Before this
change `JSON.stringify` would output lone surrogates if the input contained
any lone surrogates; such strings could not be encoded in valid UTF-8 or UTF-16:

```js
JSON.stringify("\uD800"); // '"�"'
```

But with this change `JSON.stringify` represents lone surrogates using JSON
escape sequences that _can_ be encoded in valid UTF-8 or UTF-16:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

This change should be backwards-compatible as long as you pass the result of
`JSON.stringify` to APIs such as `JSON.parse` that will accept any
valid JSON text, because they will treat Unicode escapes of lone surrogates as identical
to the lone surrogates themselves. _Only_ if you are directly interpreting the
result of `JSON.stringify` do you need to carefully handle
`JSON.stringify`'s two possible encodings of these code points.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `JSON.stringify` behavior (symbol and well-formed unicode) in `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{JSxRef("JSON.parse()")}}
