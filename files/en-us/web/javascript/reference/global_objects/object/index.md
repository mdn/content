---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Class
  - JavaScript
  - Object
browser-compat: javascript.builtins.Object
---
{{JSRef}}

The **`Object`** type represents one of [JavaScript's data types](/en-US/docs/Web/JavaScript/Data_structures). It is used to store various keyed collections and more complex entities. Objects can be created using the {{jsxref("Object/Object", "Object()")}} constructor or the [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Description

Nearly all objects in JavaScript are instances of {{jsxref("Object")}}; a typical object inherits properties (including methods) from `Object.prototype`, although these properties may be shadowed (a.k.a. overridden). However, an `Object` may be deliberately created for which this is not true (e.g. by {{jsxref("Object.create", "Object.create(null)")}}), or it may be altered so that this is no longer true (e.g. with {{jsxref("Object.setPrototypeOf")}}).

Changes to the `Object` prototype object are seen by **all** objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

The `Object` constructor's behavior depends on the input's type.

- If the value is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or {{jsxref("undefined")}}, it will create and return an empty object.
- If the value is an object already, it will return the value.
- Otherwise, it will return an object of a Type that corresponds to the given value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

See also the [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Deleting a property from an object

There isn't any method in an Object itself to delete its own properties (such as {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). To do so, one must use the [delete operator](/en-US/docs/Web/JavaScript/Reference/Operators/delete).

## Constructor

- {{jsxref("Object/Object", "Object()")}}
  - : Turns the input into an object.

## Static methods

- {{jsxref("Object.assign","Object.assign()")}}
  - : Copies the values of all enumerable own properties from one or more source objects to a target object.
- {{jsxref("Object.create","Object.create()")}}
  - : Creates a new object with the specified prototype object and properties.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : Adds the named property described by a given descriptor to an object.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : Adds the named properties described by the given descriptors to an object.
- {{jsxref("Object.entries","Object.entries()")}}
  - : Returns an array containing all of the `[key, value]` pairs of a given object's **own** enumerable string properties.
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : Freezes an object. Other code cannot delete or change its properties.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : Returns a new object from an iterable of `[key, value]` pairs. (This is the reverse of {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : Returns a property descriptor for a named property on an object.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : Returns an object containing all own property descriptors for an object.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable and non-enumerable properties.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : Returns an array of all symbol properties found directly upon a given object.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : Returns the prototype (internal `[[Prototype]]` property) of the specified object.
- {{jsxref("Object.is","Object.is()")}}
  - : Compares if two values are the same value. Equates all `NaN` values (which differs from both `IsLooselyEqual` used by [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) and `IsStrictlyEqual` used by [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)).
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : Determines if extending of an object is allowed.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : Determines if an object was frozen.
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : Determines if an object is sealed.
- {{jsxref("Object.keys","Object.keys()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable string properties.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : Prevents any extensions of an object.
- {{jsxref("Object.seal","Object.seal()")}}
  - : Prevents other code from deleting properties of an object.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : Sets the object's prototype (its internal `[[Prototype]]` property).
- {{jsxref("Object.values","Object.values()")}}
  - : Returns an array containing the values that correspond to all of a given object's **own** enumerable string properties.

## Instance properties

- {{jsxref("Object.prototype.constructor")}}
  - : Specifies the function that creates an object's prototype.
- [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{Deprecated_Inline}}
  - : Points to the object which was used as prototype when the object was instantiated.

## Instance methods

- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
  - : Associates a function with a property that, when accessed, executes that function and returns its return value.
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
  - : Associates a function with a property that, when set, executes that function which modifies the property.
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
  - : Returns the function associated with the specified property by the [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) method.
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
  - : Returns the function associated with the specified property by the [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) method.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Returns a boolean indicating if the internal [ECMAScript \[\[Enumerable\]\] attribute](/en-US/docs/Web/JavaScript/Data_structures#properties) is set.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Calls {{jsxref("Object.toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Returns a string representation of the object.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object.

## Examples

### Constructing empty objects

The following examples store an empty `Object` object in `o`:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Using Object to create Boolean objects

The following examples store {{jsxref("Boolean")}} objects in `o`:

```js
// equivalent to const o = new Boolean(true)
const o = new Object(true);
```

```js
// equivalent to const o = new Boolean(false)
const o = new Object(Boolean());
```

### Object prototypes

When altering the behavior of existing `Object.prototype` methods, consider injecting code by wrapping your extension before or after the existing logic. For example, this (untested) code will pre-conditionally execute custom logic before the built-in logic or someone else's extension is executed.

When modifying prototypes with hooks, pass `this` and the arguments (the call state) to the current behavior by calling `apply()` on the function. This pattern can be used for any prototype, such as `Node.prototype`, `Function.prototype`, etc.

```js
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, '-prop-value')) {
    return this['-prop-value'];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, args);
  }
}
```

> **Warning:** Modifying the `prototype` property of any built-in constructor is considered a bad practice and risks forward compatibility.

You can read more about prototypes in [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
