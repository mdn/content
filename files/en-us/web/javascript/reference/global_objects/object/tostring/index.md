---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
object.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Syntax

```js
toString()
```

### Parameters

By default `toString()` takes no parameters. However, objects that inherit from `Object` may override it with their own implementations that do take parameters. For example, the [`Number.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) and [`BigInt.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) methods take an optional `radix` parameter.

### Return value

A string representing the object.

## Description

An object's `toString()` method is most commonly invoked when that object undergoes:

- explicit {{Glossary("type conversion")}} to a string (for example, `{{jsxref("String/String", "String")}}(myObject)`)
- implicit {{Glossary("type coercion")}} into a string (for example, `myObject + "hello world"`)

> **Note:** This assumes the object does not have a custom implementation of {{jsxref("Symbol.toPrimitive")}}. If it does, that method will take priority and be called instead of `toString()`.

While not as common, the method can be invoked directly (for example, `myObject.toString()`).

This method is inherited by every object descended from `Object`, but can be overridden by descendant objects (for example, {{jsxref("Number.prototype.toString()")}}). To use the base `Object.prototype.toString()` with an object that has it overridden (or to invoke it on `null` or `undefined`), you need to call {{jsxref("Function.prototype.call()")}} or {{jsxref("Function.prototype.apply()")}} on it, passing the object you want to inspect as the first parameter (called `thisArg`).

```js
const arr = [1, 2, 3];

arr.toString() // "1,2,3"
Object.prototype.toString.call(arr) // "[object Array]"
```

`Object.prototype.toString()` returns `"[object Type]"`, where `Type` is the object type. If the object has a [`Symbol.toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property whose value is a string, that value will be used as the `Type`. Many built-in objects, including [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [`Symbol`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), have a `Symbol.toStringTag`. Some objects predating ES6 do not have `Symbol.toStringTag`, but have a special tag nonetheless. They include (the tag is the same as the type name given below):

- [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Function`](/en-US/docs/Web/JavaScript/Reference/Functions) (anything whose [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) returns `"function"`)
- [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

The [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object returns `"[object Arguments]"`. Everything else, including user-defined classes, unless with a custom `Symbol.toStringTag`, will return `"[object Object]"`.

`Object.prototype.toString()` invoked on [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and {{jsxref("undefined")}} returns `[object Null]` and `[object Undefined]`, respectively.

## Examples

### Overriding the default toString method

You can create a function to be called in place of the default `toString()`
method. The `toString()` function you create must return a primitive. If it
returns an object and the method is called implicitly (i.e. during type
conversion or coercion), then its result will be ignored and the value of a
related method, `{{jsxref("Object/valueOf", "valueOf()")}}`, will be used
instead, or a `TypeError` will be thrown if none of these methods return a
primitive.

The following code defines the `Dog` object type and creates
`theDog`, an object of type `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

const theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
```

If you call the `toString()` method on this custom object, it returns the
default value inherited from {{jsxref("Object")}}:

```js
theDog.toString(); // returns [object Object]
```

The following code creates and assigns `dogToString()` to override the
default `toString()` method. This function generates a string containing the
`name`, `breed`, `color`, and `sex` of the
object.

```js
Dog.prototype.toString = function dogToString() {
  return 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
}
```

Or, using {{jsxref("Template_literals", "template strings", "", 1)}}:

```js
Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
```

With the preceding code in place, any time `toString()` is used in a `Dog`
context, JavaScript automatically calls the `dogToString()` function, which
returns the following string:

```js
"Dog Gabby is a female chocolate Lab"
```

### Using toString() to detect object class

`toString()` can be used with every object and (by default) allows you to
get its class.

```js
const toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
// Math has its Symbol.toStringTag
toString.call(Math);        // [object Math]

toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
```

Using `toString()` in this way is unreliable; objects can change the
behavior of `Object.prototype.toString()` by defining a
{{jsxref("Symbol.toStringTag")}} property, leading to unexpected results. For example:

```js
const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.prototype.toString` with `Symbol.toStringTag` support in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
- {{jsxref("Symbol.toStringTag")}}
