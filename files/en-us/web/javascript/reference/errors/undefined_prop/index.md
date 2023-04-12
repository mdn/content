---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript warning "reference to undefined property" occurs when a script attempted
to access an object property which doesn't exist.

## Message

```
ReferenceError: reference to undefined property "x" (Firefox)
```

## Error type

(Firefox only) {{jsxref("ReferenceError")}} warning which is reported only if
`javascript.options.strict` preference is set to `true`.

## What went wrong?

The script attempted to access an object property which doesn't exist. There are two
ways to access properties; see the [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) reference page to learn more about them.

## Examples

### Invalid cases

In this case, the property `bar` is an undefined property, so a
`ReferenceError` will occur.

```js example-bad
const foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### Valid cases

To avoid the error, you need to either add a definition for `bar` to the
object or check for the existence of the `bar` property before trying to
access it; ways to do that include using the {{jsxref("Operators/in", "in")}} operator,
or the {{jsxref("Object.hasOwn()")}} method, like this:

```js example-good
const foo = {};

// Define the bar property

foo.bar = "moon";
console.log(foo.bar); // "moon"

// Test to be sure bar exists before accessing it

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar);
}
```

## See also

- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
