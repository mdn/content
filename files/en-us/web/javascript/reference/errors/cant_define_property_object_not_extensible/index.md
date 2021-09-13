---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "can't define property "x": "obj" is not extensible" occurs
when {{jsxref("Object.preventExtensions()")}} marked an object as no longer extensible,
so that it will never have properties beyond the ones it had at the time it was marked
as non-extensible.

## Message

```js
TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

Usually, an object is extensible and new properties can be added to it. However, in
this case {{jsxref("Object.preventExtensions()")}} marked an object as no longer
extensible, so that it will never have properties beyond the ones it had at the time it
was marked as non-extensible.

## Examples

### Adding new properties to a non-extensible objects

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode),
attempting to add new properties to a non-extensible object throws a
`TypeError`. In sloppy mode, the addition of the "x" property is silently
ignored.

```js example-bad
'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
```

In both, [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) and
sloppy mode, a call to {{jsxref("Object.defineProperty()")}} throws when adding a new
property to a non-extensible object.

```js example-bad
var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
```

To fix this error, you will either need to remove the call to
{{jsxref("Object.preventExtensions()")}} entirely, or move it to a position so that the
property is added earlier and only later the object is marked as non-extensible. Of
course you can also remove the property that was attempted to be added, if you don't
need it.

```js example-good
'use strict';

var obj = {};
obj.x = 'foo'; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## See also

- {{jsxref("Object.preventExtensions()")}}
