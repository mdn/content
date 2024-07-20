---
title: "TypeError: can't set prototype of this object"
slug: Web/JavaScript/Reference/Errors/Cant_set_prototype
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "can't set prototype of this object" occurs when attempting to set the prototype of an object, but the object's prototype is frozen, either by being a built-in immutable prototype object, or by being [non-extensible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible).

## Message

```plain
TypeError: Immutable prototype object 'Object.prototype' cannot have their prototype set (V8-based)
TypeError: #<Object> is not extensible (V8-based)
TypeError: can't set prototype of this object (Firefox)
TypeError: Cannot set prototype of immutable prototype object (Safari)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

You are using one of the prototype-mutating methods—most notably, {{jsxref("Object.setPrototypeOf()")}}—on an object whose prototype is immutable. Some built-in objects have immutable prototypes, such as `Object.prototype` and {{domxref("window")}}, for security reasons. User objects can also prevent prototype changes by using {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, or {{jsxref("Object.freeze()")}}.

## Examples

### Changing the prototype of a built-in object

A selected few built-in objects have immutable prototypes. For example, you cannot change the prototype of `Object.prototype`:

```js example-bad
Object.setPrototypeOf(Object.prototype, {});
```

This prevents you from being able to arbitrarily change the behavior of all objects in the system. The prototype of `Object.prototype` is always `null`. However, other built-in prototype objects, such as `Function.prototype` and `Array.prototype`, are not protected by default in this regard.

### Changing the prototype of a non-extensible object

If you make an object non-extensible, you cannot change its prototype either:

```js example-bad
const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
// TypeError: can't set prototype of this object
```

## See also

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.preventExtensions()")}}
