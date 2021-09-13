---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
browser-compat: javascript.builtins.Object.defineProperty
---
{{JSRef}}

The static method **`Object.defineProperty()`** defines a new
property directly on an object, or modifies an existing property on an object, and
returns the object.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## Syntax

```js
Object.defineProperty(obj, prop, descriptor)
```

### Parameters

- `obj`
  - : The object on which to define the property.
- `prop`
  - : The name or {{jsxref("Symbol")}} of the property to be defined or modified.
- `descriptor`
  - : The descriptor for the property being defined or modified.

### Return value

The object that was passed to the function.

## Description

This method allows a precise addition to or modification of a property on an object.
Normal property addition through assignment creates properties which show up during
property enumeration ({{jsxref("Statements/for...in", "for...in")}} loop or
{{jsxref("Object.keys")}} method), whose values may be changed, and which may be
{{jsxref("Operators/delete", "deleted", "", 1)}}. This method allows these extra details
to be changed from their defaults. By default, values added using
`Object.defineProperty()` are immutable and not enumerable.

Property descriptors present in objects come in two main flavors: data descriptors and
accessor descriptors. A **data descriptor** is a property that has a
value, which may or may not be writable. An **accessor descriptor** is a
property described by a getter-setter pair of functions. A descriptor must be one of
these two flavors; it cannot be both.

Both data and accessor descriptors are objects. They share the following optional keys
(please note: the **defaults** mentioned here are in the case of defining
properties using `Object.defineProperty()`):

- `configurable`
  - : `true` if the type of this property descriptor may be changed and if the
    property may be deleted from the corresponding object.
    **Defaults to `false`.**
- `enumerable`
  - : `true` if and only if this property shows up during enumeration of the
    properties on the corresponding object.
    **Defaults to `false`.**

A **data descriptor** also has the following optional keys:

- `value`
  - : The value associated with the property. Can be any valid JavaScript value (number,
    object, function, etc).
    **Defaults to {{jsxref("undefined")}}.**
- `writable`
  - : `true` if the value associated with the property may be changed with an
    {{jsxref("Operators#assignment_operators", "assignment operator", "", 1)}}.
    **Defaults to `false`.**

An **accessor descriptor** also has the following optional keys:

- `get`
  - : A function which serves as a getter for the property, or {{jsxref("undefined")}} if
    there is no getter. When the property is accessed, this function is called without
    arguments and with `this` set to the object through which the property is
    accessed (this may not be the object on which the property is defined due to
    inheritance). The return value will be used as the value of the property.
    **Defaults to {{jsxref("undefined")}}.**
- `set`
  - : A function which serves as a setter for the property, or {{jsxref("undefined")}} if
    there is no setter. When the property is assigned, this function is called with one
    argument (the value being assigned to the property) and with `this` set to
    the object through which the property is assigned.
    **Defaults to {{jsxref("undefined")}}.**

If a descriptor has neither of `value`, `writable`,
`get` and `set` keys, it is treated as a data descriptor. If a
descriptor has both \[`value` or `writable`] and \[`get`
or `set`] keys, an exception is thrown.

Bear in mind that these attributes are not necessarily the descriptor's own properties.
Inherited properties will be considered as well. In order to ensure these defaults are
preserved, you might freeze the {{jsxref("Object")}} upfront, specify all
options explicitly, or point to {{jsxref("null")}} with {{jsxref("Object.create",
  "Object.create(null)")}}.

```js
// using __proto__
var obj = {};
var descriptor = Object.create(null); // no inherited properties
descriptor.value = 'static';

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, 'key', descriptor);

// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// recycling same object
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: value
    }
  );

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// ... and ...
Object.defineProperty(obj, 'key', withValue('static'));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

## Examples

### Creating a property

When the property specified doesn't exist in the object,
`Object.defineProperty()` creates a new property as described. Fields may be
omitted from the descriptor, and default values for those fields are inputted.

```js
var o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors
```

### Modifying a property

When the property already exists, `Object.defineProperty()` attempts to
modify the property according to the values in the descriptor and the object's current
configuration. If the old descriptor had its `configurable` attribute set to
`false` the property is said to be “non-configurable”. It is not possible to
change any attribute of a non-configurable accessor property. For data properties which are configurable, it is
possible to modify the value if the property is writable, and it is possible to change the
`writable` attribute from `true` to `false`. It is not
possible to switch between data and accessor property types when the property is
non-configurable.

A {{jsxref("TypeError")}} is thrown when attempts are made to change non-configurable
property attributes (except `value` and `writable`, if permitted)
unless the current and new values are the same.

#### Writable attribute

When the `writable` property attribute is set to `false`, the
property is said to be “non-writable”. It cannot be reassigned.

```js
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
}());
```

As seen in the example, trying to write into the non-writable property doesn't change
it but doesn't throw an error either.

#### Enumerable attribute

The `enumerable` property attribute defines whether the property is picked
by {{jsxref("Object.assign()")}} or [spread
](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)operator. For non-{{jsxref("Global_Objects/Symbol")}} properties it also defines whether it shows
up in a {{jsxref("Statements/for...in", "for...in")}} loop and
{{jsxref("Object.keys()")}} or not.

```js
var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
         // when creating a property by setting it
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
```

#### Configurable attribute

The `configurable` attribute controls at the same time whether the property
can be deleted from the object and whether its attributes (other than `value`
and `writable`) can be changed.

```js
var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError // ('value' can be changed when 'configurable' is false but not in this case due to 'get' accessor)

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
```

If the `configurable` attribute of `o.a` had been
`true`, none of the errors would be thrown and the property would be deleted
at the end.

### Adding properties and default values

It is important to consider the way default values of attributes are applied. There is
often a difference between using dot notation to assign a value and using
`Object.defineProperty()`, as shown in the example below.

```js
var o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

// On the other hand,
Object.defineProperty(o, 'a', { value: 1 });
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});
```

### Custom Setters and Getters

The example below shows how to implement a self-archiving object. When
`temperature` property is set, the `archive` array gets a log
entry.

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!');
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

In this example, a getter always returns the same value.

```js
var pattern = {
    get() {
        return 'I always return this string, ' +
               'whatever you have assigned';
    },
    set() {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
```

### Inheritance of properties

If an accessor property is inherited, its `get` and `set` methods
will be called when the property is accessed and modified on descendant objects. If
these methods use a variable to store the value, this value will be shared by all
objects.

```js
function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

This can be fixed by storing the value in another property. In `get` and
`set` methods, `this` points to the object which is used to access
or modify the property.

```js
function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
```

Unlike accessor properties, value properties are always set on the object itself, not
on a prototype. However, if a non-writable value property is inherited, it still
prevents from modifying the property on the object.

```js
function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Redefining the `length` property of an `Array` object

It is possible to redefine the {{jsxref("Array.length", "length")}} property of arrays,
subject to the usual redefinition restrictions. (The {{jsxref("Array.length",
  "length")}} property is initially non-configurable, non-enumerable, and writable. Thus
on an unaltered array, it's possible to change the {{jsxref("Array.length", "length")}}
property's value or to make it non-writable. It is not allowed to change its
enumerability or configurability, or if it is non-writable to change its value or
writability.) However, not all browsers permit this redefinition.

Firefox 4 through 22 will throw a {{jsxref("TypeError")}} on any attempt whatsoever
(whether permitted or not) to redefine the {{jsxref("Array.length", "length")}} property
of an array.

Versions of Chrome which implement `Object.defineProperty()` in some
circumstances ignore a length value different from the array's current
{{jsxref("Array.length", "length")}} property. In some circumstances changing
writability seems to silently not work (and not throw an exception). Also, relatedly,
some array-mutating methods like {{jsxref("Array.prototype.push")}} don't respect a
non-writable length.

Versions of Safari which implement `Object.defineProperty()` ignore a
`length` value different from the array's current {{jsxref("Array.length",
  "length")}} property, and attempts to change writability execute without error but do
not actually change the property's writability.

Only Internet Explorer 9 and later, and Firefox 23 and later, appear to fully and
correctly implement redefinition of the {{jsxref("Array.length", "length")}} property of
arrays. For now, don't rely on redefining the {{jsxref("Array.length", "length")}}
property of an array to either work, or to work in a particular manner. And even when
you _can_ rely on it, [there's
really no good reason to do so](https://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/).

### Internet Explorer 8 specific notes

Internet Explorer 8 implemented a `Object.defineProperty()` method that
could [only be used
on DOM objects](https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx). A few things need to be noted:

- Trying to use `Object.defineProperty()` on native objects throws an
  error.
- Property attributes must be set to some values. The `configurable`,
  `enumerable` and `writable` attributes should all be set to
  `true` for data descriptor and `true` for
  `configurable`, `false` for `enumerable` for accessor
  descriptor.(?) Any attempt to provide other value(?) will result in an error being
  thrown.
- Reconfiguring a property requires first deleting the property. If the property isn't
  deleted, it stays as it was before the reconfiguration attempt.

### Chrome 37 (and below) specific notes

Chrome 37 (and below) has a [bug](https://bugs.chromium.org/p/v8/issues/detail?id=3448) where an
attempt to define a "prototype" property, on a function, with
`writable: false` doesn't work as expected.

## See also

- [Enumerability and
  ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
