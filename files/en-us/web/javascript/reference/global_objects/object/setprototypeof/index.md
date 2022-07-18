---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Prototype
browser-compat: javascript.builtins.Object.setPrototypeOf
---
{{JSRef}}

The **`Object.setPrototypeOf()`** method sets the prototype
(i.e., the internal `[[Prototype]]` property) of a specified object to
another object or {{jsxref("null")}}.

> **Warning:** Changing the `[[Prototype]]` of an object is, by
> the nature of [how modern JavaScript engines optimize property accesses](https://mathiasbynens.be/notes/prototypes),
> currently a very slow operation
> in every browser and JavaScript engine. In addition, the effects of altering
> inheritance are subtle and far-flung, and are not limited to the time spent in the
> `Object.setPrototypeOf(...)` statement, but may extend to
> **_any_** code that has access to any object whose
> `[[Prototype]]` has been altered.
>
> Because this feature is a part of the language, it is still the burden on engine
> developers to implement that feature performantly (ideally). Until engine developers
> address this issue, if you are concerned about performance, you should avoid setting
> the `[[Prototype]]` of an object. Instead, create a new object with the
> desired `[[Prototype]]` using {{jsxref("Object.create()")}}.

## Syntax

```js
Object.setPrototypeOf(obj, prototype)
```

### Parameters

- `obj`
  - : The object which is to have its prototype set.
- `prototype`
  - : The object's new prototype (an object or {{jsxref("null")}}).

### Return value

The specified object.

## Description

Throws a {{jsxref("TypeError")}} exception if the object whose
`[[Prototype]]` is to be modified is non-extensible according to
{{jsxref("Object.isExtensible()")}}. Does nothing if the `prototype`
parameter isn't an object or {{jsxref("null")}} (i.e., number, string, boolean, or
{{jsxref("undefined")}}). Otherwise, this method changes the `[[Prototype]]`
of `obj` to the new value.

`Object.setPrototypeOf()` is in the ECMAScript 2015 specification. It is
generally considered the proper way to set the prototype of an object, vs. the more
controversial {{jsxref("Object.prototype.__proto__")}} property.

## Appending Prototype Chains

A combination of `Object.getPrototypeOf()` and {{jsxref("Object.proto",
  "Object.prototype.__proto__")}} permits appending a whole prototype chain to a new
prototype object:

```js
/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function(["@arg"(s)], "@function_body") to that chain.
* Returns the function.
*
**/

Object.appendChain = function(oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError('Object.appendChain - Not enough arguments');
  }
  if (typeof oProto !== 'object' && typeof oProto !== 'string') {
    throw new TypeError('second argument to Object.appendChain must be an object or a string');
  }

  const oNewProto = oProto,
      oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (const o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}
```

### Usage

#### First example: Appending a chain to a prototype

```js
function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

const oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
```

#### Second example: Transforming a primitive value into an instance of its constructor and append its chain to a prototype

```js
function MySymbol() {
  this.isSymbol = 'yes';
}

const nPrime = 17;

console.log(typeof nPrime); // 'number'

const oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
```

#### Third example: Appending a chain to the Function.prototype object and appending a new function to that chain

```js
function Person(sName) {
  this.identity = sName;
}

const george = Object.appendChain(new Person('George'),
                                'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
```

## Examples

### Using Object.setPrototypeOf

```js
const dict = Object.setPrototypeOf({}, null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.__proto__")}}
