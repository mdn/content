---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{JSSidebar("Errors")}}

The JavaScript exception "is not a non-null object" occurs when an object is expected
somewhere and wasn't provided. {{jsxref("null")}} is not an object and won't work.

## Message

```js
TypeError: Invalid descriptor for property {x} (Edge)
TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

An object is expected somewhere and wasn't provided. {{jsxref("null")}} is not an
object and won't work. You must provide a proper object in the given situation.

## Examples

### Property descriptor expected

When methods like {{jsxref("Object.create()")}} or
{{jsxref("Object.defineProperty()")}} and {{jsxref("Object.defineProperties()")}} are
used, the optional descriptor parameter expects a property descriptor object. Providing
no object (like just a number), will throw an error:

```js example-bad
Object.defineProperty({}, 'key', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'key', null);
// TypeError: null is not a non-null object
```

A valid property descriptor object might look like this:

```js example-good
Object.defineProperty({}, 'key', { value: 'foo', writable: false });
```

### `WeakMap` and `WeakSet` objects require object keys

{{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} objects store object keys. You can't
use other types as keys.

```js example-bad
var ws = new WeakSet();
ws.add('foo');
// TypeError: "foo" is not a non-null object
```

Use objects instead:

```js example-good
ws.add({foo: 'bar'});
ws.add(window);
```

## See also

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}
