---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.getPrototypeOf
---
{{JSRef}}

The **`Object.getPrototypeOf()`** method returns the prototype
(i.e. the value of the internal `[[Prototype]]` property) of the specified
object.

{{EmbedInteractiveExample("pages/js/object-getprototypeof.html")}}

## Syntax

```js
Object.getPrototypeOf(obj)
```

### Parameters

- `obj`
  - : The object whose prototype is to be returned.

### Return value

The prototype of the given object. If there are no inherited properties,
{{jsxref("null")}} is returned.

## Examples

### Using getPrototypeOf

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Non-object coercion

In ES5, it will throw a {{jsxref("TypeError")}} exception if the _obj_
parameter isn't an object. In ES2015, the parameter will be coerced to an
{{jsxref("Object")}}.

```js
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Opera-specific notes

Even though older Opera versions don't support `Object.getPrototypeOf()`
yet, Opera supports the non-standard {{jsxref("Object.proto", "__proto__")}} property
since Opera 10.50.

## See also

- A polyfill of `Object.getPrototypeOf` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
- John Resig's post on [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Reflect.getPrototypeOf()")}}
