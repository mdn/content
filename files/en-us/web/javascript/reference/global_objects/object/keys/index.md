---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.keys
---
{{JSRef}}

The **`Object.keys()`** method returns
an array of a given object's own enumerable property **names**, iterated
in the same order that a normal loop would.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Syntax

```js
Object.keys(obj)
```

### Parameters

- `obj`
  - : The object of which the enumerable's own properties are to be returned.

### Return value

An array of strings that represent all the enumerable properties of the given object.

## Description

`Object.keys()` returns an array whose elements are strings corresponding to
the enumerable properties found directly upon `object`. The ordering of the
properties is the same as that given by looping over the properties of the object
manually.

## Examples

### Using Object.keys

```js
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

If you want _all_ properties—including non-enumerables—see
{{jsxref("Object.getOwnPropertyNames()")}}.

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will
cause a {{jsxref("TypeError")}}.

From ES2015 onwards, a non-object argument will be coerced to an object.

```js
// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]
```

## Polyfill

To add compatible `Object.keys` support in older environments that do not
natively support it, copy the following snippet:

```js
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
```

Please note that the above code includes non-enumerable keys in IE7 (and maybe IE8), when passing in an object from a different window.

For a simple Browser Polyfill, see [Javascript \- Object.keys Browser Compatibility](https://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Object.keys` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability
  and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
