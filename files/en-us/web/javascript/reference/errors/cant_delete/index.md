---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "property is non-configurable and can't be deleted" occurs
when it was attempted to delete a property, but that property is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties).

## Message

```
TypeError: Cannot delete property 'x' of #<Object> (V8-based)
TypeError: property "x" is non-configurable and can't be deleted (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Error type

{{jsxref("TypeError")}} in strict mode only.

## What went wrong?

It was attempted to delete a property, but that property is [non-configurable](/en-US/docs/Web/JavaScript/Data_structures#properties). The
`configurable` attribute controls whether the property can be deleted from
the object and whether its attributes (other than `writable`) can be changed.

This error happens only in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode). In
non-strict code, the operation returns `false`.

## Examples

### Attempting to delete non-configurable properties

Non-configurable properties are not super common, but they can be created using
{{jsxref("Object.defineProperty()")}} or {{jsxref("Object.freeze()")}}.

```js example-bad
'use strict';
const obj = Object.freeze({name: 'Elsa', score: 157});
delete obj.score;  // TypeError
```

```js example-bad
'use strict';
const obj = {};
Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
delete obj.foo;  // TypeError
```

```js example-bad
'use strict';
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
```

There are also a few non-configurable properties built into JavaScript. Maybe you tried
to delete a mathematical constant.

```js example-bad
'use strict';
delete Math.PI;  // TypeError
```

## See also

- [delete operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
