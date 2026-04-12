---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
page-type: javascript-error
sidebar: jssidebar
---

The JavaScript exception "can't define property "x": "obj" is not extensible" occurs when an object is marked as non-extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. Objects can be made non-extensible by calling {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, or {{jsxref("Object.freeze()")}}.

## Message

```plain
TypeError: Cannot add property x, object is not extensible (V8-based)
TypeError: Cannot define property x, object is not extensible (V8-based)
TypeError: can't define property "x": Object is not extensible (Firefox)
TypeError: Attempting to define property on object that is not extensible. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

Usually, an object is extensible and new properties can be added to it. However, in this case the object isn't extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. You could have marked the object as non-extensible by calling {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, or {{jsxref("Object.freeze()")}}, or a library you are using could have done that for you.

## Examples

### Adding new properties to a non-extensible objects

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), attempting to add new properties to a non-extensible object via assignment throws a `TypeError`. In sloppy mode, the addition of the "x" property is silently ignored.

```js example-bad
"use strict";

const obj = {};
Object.preventExtensions(obj);

obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

In both [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) and sloppy mode, a call to {{jsxref("Object.defineProperty()")}} throws when adding a new property to a non-extensible object.

```js example-bad
const obj = {};
Object.preventExtensions(obj);

Object.defineProperty(obj, "x", { value: "foo" });
// TypeError: can't define property "x": Object is not extensible
```

### Non-extensible objects created by other means

The `Object.seal()` and `Object.freeze()` methods also create non-extensible objects—they just have additional restrictions on modifying existing properties as well.

```js example-bad
"use strict";

const obj = { y: "bar" };
Object.seal(obj);
obj.x = "foo";
// TypeError: can't define property "x": Object is not extensible
```

### Fixing the error

There are three ways to fix this error: you can remove the property addition entirely if you don't need it, you can copy the existing properties to a new extensible object, or you can add the property before making the object non-extensible.

```js example-good
"use strict";

const obj = {};
obj.x = "foo"; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## See also

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}
