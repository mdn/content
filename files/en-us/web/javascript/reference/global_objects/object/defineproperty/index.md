---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.defineProperty
---

{{JSRef}}

The **`Object.defineProperty()`** static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## Syntax

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Parameters

- `obj`
  - : The object on which to define the property.
- `prop`
  - : A string or {{jsxref("Symbol")}} specifying the key of the property to be defined or modified.
- `descriptor`
  - : The descriptor for the property being defined or modified.

### Return value

The object that was passed to the function, with the specified property added or modified.

## Description

`Object.defineProperty()` allows a precise addition to or modification of a property on an object. Normal property addition through [assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) creates properties which show up during property enumeration ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}}, etc.), whose values may be changed and which may be {{jsxref("Operators/delete", "deleted", "", 1)}}. This method allows these extra details to be changed from their defaults. By default, properties added using `Object.defineProperty()` are not writable, not enumerable, and not configurable. In addition, `Object.defineProperty()` uses the [`[[DefineOwnProperty]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) internal method, instead of [`[[Set]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), so it does not invoke [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set), even when the property is already present.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. A **data descriptor** is a property with a value that may or may not be writable. An **accessor descriptor** is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

Both data and accessor descriptors are objects. They share the following optional keys (please note: the **defaults** mentioned here are in the case of defining properties using `Object.defineProperty()`):

- `configurable`

  - : when this is set to `false`,

    - the type of this property cannot be changed between data property and accessor property, and
    - the property may not be deleted, and
    - other attributes of its descriptor cannot be changed (however, if it's a data descriptor with `writable: true`, the `value` can be changed, and `writable` can be changed to `false`).

    **Defaults to `false`.**

- `enumerable`
  - : `true` if and only if this property shows up during enumeration of the properties on the corresponding object. **Defaults to `false`.**

A **data descriptor** also has the following optional keys:

- `value`
  - : The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). **Defaults to {{jsxref("undefined")}}.**
- `writable`
  - : `true` if the value associated with the property may be changed with an [assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators). **Defaults to `false`.**

An **accessor descriptor** also has the following optional keys:

- `get`
  - : A function which serves as a getter for the property, or {{jsxref("undefined")}} if there is no getter. When the property is accessed, this function is called without arguments and with `this` set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. **Defaults to {{jsxref("undefined")}}.**
- `set`
  - : A function which serves as a setter for the property, or {{jsxref("undefined")}} if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with `this` set to the object through which the property is assigned. **Defaults to {{jsxref("undefined")}}.**

If a descriptor doesn't have any of the `value`, `writable`, `get`, and `set` keys, it is treated as a data descriptor. If a descriptor has both \[`value` or `writable`] and \[`get` or `set`] keys, an exception is thrown.

These attributes are not necessarily the descriptor's own properties. Inherited properties will be considered as well. In order to ensure these defaults are preserved, you might freeze existing objects in the descriptor object's prototype chain upfront, specify all options explicitly, or point to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) with {{jsxref("Object.create", "Object.create(null)")}}.

```js
const obj = {};
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null);
descriptor.value = "static";

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, "key", descriptor);

// 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Recycling same object
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// and
Object.defineProperty(obj, "key", withValue("static"));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

When the property already exists, `Object.defineProperty()` attempts to modify the property according to the values in the descriptor and the property's current configuration.

If the old descriptor had its `configurable` attribute set to `false`, the property is said to be _non-configurable_. It is not possible to change any attribute of a non-configurable accessor property, and it is not possible to switch between data and accessor property types. For data properties with `writable: true`, it is possible to modify the value and change the `writable` attribute from `true` to `false`. A {{jsxref("TypeError")}} is thrown when attempts are made to change non-configurable property attributes (except `value` and `writable`, if permitted), except when defining a value same as the original value on a data property.

When the current property is configurable, defining an attribute to `undefined` effectively deletes it. For example, if `o.k` is an accessor property, `Object.defineProperty(o, "k", { set: undefined })` will remove the setter, making `k` only have a getter and become readonly. If an attribute is absent from the new descriptor, the old descriptor attribute's value is kept (it won't be implicitly re-defined to `undefined`). It is possible to toggle between data and accessor property by giving a descriptor of a different "flavor". For example, if the new descriptor is a data descriptor (with `value` or `writable`), the original descriptor's `get` and `set` attributes will both be dropped.

## Examples

### Creating a property

When the property specified doesn't exist in the object, `Object.defineProperty()` creates a new property as described. Fields may be omitted from the descriptor and default values for those fields are inputted.

```js
const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors
```

### Modifying a property

When modifying an existing property, the current property configuration determines if the operator succeeds, does nothing, or throws a {{jsxref("TypeError")}}.

#### Writable attribute

When the `writable` property attribute is `false`, the property is said to be "non-writable". It cannot be reassigned. Trying to write to a non-writable property doesn't change it and results in an error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

```js
const o = {}; // Creates a new object

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // 37; the assignment didn't work

// strict mode
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
})();
```

#### Enumerable attribute

The `enumerable` property attribute defines whether the property is considered by {{jsxref("Object.assign()")}} or the [spread](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) operator. For non-{{jsxref("Global_Objects/Symbol", "Symbol")}} properties, it also defines whether it shows up in a {{jsxref("Statements/for...in", "for...in")}} loop and {{jsxref("Object.keys()")}} or not. For more information, see [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// Logs 'a' and 'd' (always in that order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Configurable attribute

The `configurable` attribute controls whether the property can be deleted from the object and whether its attributes (other than `value` and `writable`) can be changed.

This example illustrates a non-configurable accessor property.

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // throws a TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // throws a TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", {
  value: 12,
}); // throws a TypeError
// ('value' can be changed when 'configurable' is false, but only when the property is a writable data property)

console.log(o.a); // 1
delete o.a; // Nothing happens; throws an error in strict mode
console.log(o.a); // 1
```

If the `configurable` attribute of `o.a` had been `true`, none of the errors would be thrown and the property would be deleted at the end.

This example illustrates a non-configurable but writable data property. The property's `value` can still be changed, and `writable` can still be toggled from `true` to `false`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Even when configurable is false, because the object is writable, we may still replace the value
console.log(o.b); // 1
o.b = 2; // We can change the value with assignment operators as well
console.log(o.b); // 2
// Toggle the property's writability
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: because the property is neither writable nor configurable, it cannot be modified
// At this point, there's no way to further modify 'b'
// or restore its writability
```

This example illustrates a configurable but non-writable data property. The property's `value` may still be replaced with `defineProperty` (but not with assignment operators), and `writable` may be toggled.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // We can replace the value with defineProperty
console.log(o.b); // 1
o.b = 2; // throws TypeError in strict mode: cannot change a non-writable property's value with assignment
```

This example illustrates a non-configurable and non-writable data property. There's no way to update any attribute of the property, including its `value`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: the property cannot be modified because it is neither writable nor configurable.
```

### Adding properties and default values

It is important to consider the way default values of attributes are applied. There is often a difference between using [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to assign a value and using `Object.defineProperty()`, as shown in the example below.

```js
const o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// On the other hand,
Object.defineProperty(o, "a", { value: 1 });
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Custom setters and getters

The example below shows how to implement a self-archiving object. When `temperature` property is set, the `archive` array gets a log entry.

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

In this example, a getter always returns the same value.

```js
const pattern = {
  get() {
    return "I always return this string, whatever you have assigned";
  },
  set() {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
```

### Inheritance of properties

If an accessor property is inherited, its `get` and `set` methods will be called when the property is accessed and modified on descendant objects. If these methods use a variable to store the value, this value will be shared by all objects.

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

This can be fixed by storing the value in another property. In `get` and `set` methods, `this` points to the object which is used to access or modify the property.

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

Unlike accessor properties, data properties are always set on the object itself, not on a prototype. However, if a non-writable data property is inherited, it is still prevented from being modified on the object.

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
