---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "is not a non-null object" occurs when an object is expected
somewhere and wasn't provided. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is not an object and won't work.

## Message

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

An object is expected somewhere and wasn't provided. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is not an
object and won't work. You must provide a proper object in the given situation.

## Examples

### Property descriptor expected

When methods like {{jsxref("Object.create()")}} or
{{jsxref("Object.defineProperty()")}} and {{jsxref("Object.defineProperties()")}} are
used, the optional descriptor parameter expects a property descriptor object. Providing
no object (like just a number), will throw an error:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

A valid property descriptor object might look like this:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## See also

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
