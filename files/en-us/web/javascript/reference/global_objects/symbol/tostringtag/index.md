---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Reference
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.toStringTag
---
{{JSRef}}

The **`Symbol.toStringTag`** well-known symbol is a string valued property that is used in the creation of the default string description of an object. It is accessed internally by the {{jsxref("Object.prototype.toString()")}} method.

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## Examples

### Default tags

```js
Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
```

### Built-in toStringTag symbols

```js
Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### Custom classes default to object tag

When creating your own class, JavaScript defaults to the "Object" tag:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

### Custom tag with toStringTag

Now, with the help of `toStringTag`, you are able to set your own custom tag:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag available on all DOM prototype objects

Due to a [WebIDL spec change](https://github.com/whatwg/webidl/pull/357) in mid-2020, browsers are adding a `Symbol.toStringTag` property to all DOM prototype objects. For example, to access the `Symbol.toStringTag` property on {{domxref("HTMLButtonElement")}}:

```js
const test = document.createElement('button');
test.toString(); // Returns [object HTMLButtonElement]
test[Symbol.toStringTag];  // Returns HTMLButtonElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.toStringTag` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
