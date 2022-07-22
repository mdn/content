---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "can't redefine non-configurable property" occurs when it was
attempted to redefine a property, but that property is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties).

## Message

```
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

It was attempted to redefine a property, but that property is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties). The
`configurable` attribute controls whether the property can be deleted from
the object and whether its attributes (other than `writable`) can be changed.
Usually, properties in an object created by an
[object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) are configurable. However, for example, when using
{{jsxref("Object.defineProperty()")}}, the property isn't configurable by default.

## Examples

### Non-configurable properties created by Object.defineProperty

The {{jsxref("Object.defineProperty()")}} creates non-configurable properties if you
haven't specified them as configurable.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: can't redefine non-configurable property "foo"
```

You will need to set the "foo" property to configurable, if you intend to redefine it
later in the code.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});
```

## See also

- [\[\[Configurable\]\]](/en-US/docs/Web/JavaScript/Data_structures#properties)
- {{jsxref("Object.defineProperty()")}}
