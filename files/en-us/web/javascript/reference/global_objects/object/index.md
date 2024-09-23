---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
page-type: javascript-class
browser-compat: javascript.builtins.Object
---

{{JSRef}}

The **`Object`** type represents one of [JavaScript's data types](/en-US/docs/Web/JavaScript/Data_structures). It is used to store various keyed collections and more complex entities. Objects can be created using the {{jsxref("Object/Object", "Object()")}} constructor or the [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Description

Nearly all [objects](/en-US/docs/Web/JavaScript/Data_structures#objects) in JavaScript are instances of `Object`; a typical object inherits properties (including methods) from `Object.prototype`, although these properties may be shadowed (a.k.a. overridden). The only objects that don't inherit from `Object.prototype` are those with [`null` prototype](#null-prototype_objects), or descended from other `null` prototype objects.

Changes to the `Object.prototype` object are seen by **all** objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, `Object.prototype` is the only object in the core JavaScript language that has [immutable prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) — the prototype of `Object.prototype` is always `null` and not changeable.

### Object prototype properties

You should avoid calling any `Object.prototype` method directly from the instance, especially those that are not intended to be polymorphic (i.e. only its initial behavior makes sense and no descending object could override it in a meaningful way). All objects descending from `Object.prototype` may define a custom own property that has the same name, but with entirely different semantics from what you expect. Furthermore, these properties are not inherited by [`null`-prototype objects](#null-prototype_objects). All modern JavaScript utilities for working with objects are [static](#static_methods). More specifically:

- [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), and [`toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) exist to be polymorphic and you should expect the object to define its own implementation with sensible behaviors, so you can call them as instance methods. However, `valueOf()` and `toString()` are usually implicitly called through [type conversion](/en-US/docs/Web/JavaScript/Data_structures#type_coercion) and you don't need to call them yourself in your code.
- [`__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), and [`__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) are deprecated and should not be used. Use the static alternatives {{jsxref("Object.defineProperty()")}} and {{jsxref("Object.getOwnPropertyDescriptor()")}} instead.
- The [`__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property is deprecated and should not be used. The {{jsxref("Object.getPrototypeOf()")}} and {{jsxref("Object.setPrototypeOf()")}} alternatives are static methods.
- The [`propertyIsEnumerable()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) and [`hasOwnProperty()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) methods can be replaced with the {{jsxref("Object.getOwnPropertyDescriptor()")}} and {{jsxref("Object.hasOwn()")}} static methods, respectively.
- The [`isPrototypeOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) method can usually be replaced with [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof), if you are checking the `prototype` property of a constructor.

In case where a semantically equivalent static method doesn't exist, or if you really want to use the `Object.prototype` method, you should directly [`call()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) the `Object.prototype` method on your target object instead, to prevent the object from having an overriding property that produces unexpected results.

```js
const obj = {
  foo: 1,
  // You should not define such a method on your own object,
  // but you may not be able to prevent it from happening if
  // you are receiving the object from external input
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result
```

### Deleting a property from an object

There isn't any method in an Object itself to delete its own properties (such as {{jsxref("Map.prototype.delete()")}}). To do so, one must use the {{jsxref("Operators/delete", "delete")}} operator.

### null-prototype objects

Almost all objects in JavaScript ultimately inherit from `Object.prototype` (see [inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)). However, you may create `null`-prototype objects using [`Object.create(null)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) or the [object initializer syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) with `__proto__: null` (note: the `__proto__` key in object literals is different from the deprecated [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property). You can also change the prototype of an existing object to `null` by calling [`Object.setPrototypeOf(obj, null)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

An object with a `null` prototype can behave in unexpected ways, because it doesn't inherit any object methods from `Object.prototype`. This is especially true when debugging, since common object-property converting/detecting utility functions may generate errors, or lose information (especially if using silent error-traps that ignore errors).

For example, the lack of [`Object.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) often makes debugging intractable:

```js
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Other methods will fail as well.

```js
normalObj.valueOf(); // shows {}
nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"
```

We can add the `toString` method back to the null-prototype object by assigning it one:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Unlike normal objects, in which `toString()` is on the object's prototype, the `toString()` method here is an own property of `nullProtoObj`. This is because `nullProtoObj` has no (`null`) prototype.

You can also revert a null-prototype object back to an ordinary object using [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

In practice, objects with `null` prototype are usually used as a cheap substitute for [maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The presence of `Object.prototype` properties will cause some bugs:

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

Using a null-prototype object removes this hazard without introducing too much complexity to the `hasPerson` and `getAge` functions:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In such case, the addition of any method should be done cautiously, as they can be confused with the other key-value pairs stored as data.

Making your object not inherit from `Object.prototype` also prevents prototype pollution attacks. If a malicious script adds a property to `Object.prototype`, it will be accessible on every object in your program, except objects that have null prototype.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript also has built-in APIs that produce `null`-prototype objects, especially those that use objects as ad hoc key-value collections. For example:

- The return value of {{jsxref("Object.groupBy()")}}
- The `groups` and `indices.groups` properties of the result of {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (all `[Symbol.unscopables]` objects should have `null`-prototype)
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- Module namespace objects, obtained through [`import * as ns from "module";`](/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import) or [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import)

The term "`null`-prototype object" often also includes any object without `Object.prototype` in its prototype chain. Such objects can be created with [`extends null`](/en-US/docs/Web/JavaScript/Reference/Classes/extends#extending_null) when using classes.

### Object coercion

Many built-in operations that expect objects first coerce their arguments to objects. [The operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) can be summarized as follows:

- Objects are returned as-is.
- [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) throw a {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} primitives are wrapped into their corresponding object wrappers.

There are two ways to achieve nearly the same effect in JavaScript.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` does exactly the object coercion steps explained above to convert `x`.
- The {{jsxref("Object/Object", "Object()")}} function: `Object(x)` uses the same algorithm to convert `x`, except that `undefined` and `null` don't throw a {{jsxref("TypeError")}}, but return a plain object.

Places that use object coercion include:

- The `object` parameter of [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops.
- The `this` value of {{jsxref("Array")}} methods.
- Parameters of `Object` methods such as {{jsxref("Object.keys()")}}.
- Auto-boxing when a property is accessed on a primitive value, since primitives do not have properties.
- The [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value when calling a non-strict function. Primitives are boxed while `null` and `undefined` are replaced with the [global object](/en-US/docs/Glossary/Global_object).

Unlike [conversion to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion), the object coercion process itself is not observable in any way, since it doesn't invoke custom code like `toString` or `valueOf` methods.

## Constructor

- {{jsxref("Object/Object", "Object()")}}
  - : Turns the input into an object.

## Static methods

- {{jsxref("Object.assign()")}}
  - : Copies the values of all enumerable own properties from one or more source objects to a target object.
- {{jsxref("Object.create()")}}
  - : Creates a new object with the specified prototype object and properties.
- {{jsxref("Object.defineProperties()")}}
  - : Adds the named properties described by the given descriptors to an object.
- {{jsxref("Object.defineProperty()")}}
  - : Adds the named property described by a given descriptor to an object.
- {{jsxref("Object.entries()")}}
  - : Returns an array containing all of the `[key, value]` pairs of a given object's **own** enumerable string properties.
- {{jsxref("Object.freeze()")}}
  - : Freezes an object. Other code cannot delete or change its properties.
- {{jsxref("Object.fromEntries()")}}
  - : Returns a new object from an iterable of `[key, value]` pairs. (This is the reverse of {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Returns a property descriptor for a named property on an object.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Returns an object containing all own property descriptors for an object.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable and non-enumerable properties.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Returns an array of all symbol properties found directly upon a given object.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Returns the prototype (internal `[[Prototype]]` property) of the specified object.
- {{jsxref("Object.groupBy()")}}
  - : Groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.
- {{jsxref("Object.hasOwn()")}}
  - : Returns `true` if the specified object has the indicated property as its _own_ property, or `false` if the property is inherited or does not exist.
- {{jsxref("Object.is()")}}
  - : Compares if two values are the same value. Equates all `NaN` values (which differs from both `IsLooselyEqual` used by [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) and `IsStrictlyEqual` used by [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)).
- {{jsxref("Object.isExtensible()")}}
  - : Determines if extending of an object is allowed.
- {{jsxref("Object.isFrozen()")}}
  - : Determines if an object was frozen.
- {{jsxref("Object.isSealed()")}}
  - : Determines if an object is sealed.
- {{jsxref("Object.keys()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable string properties.
- {{jsxref("Object.preventExtensions()")}}
  - : Prevents any extensions of an object.
- {{jsxref("Object.seal()")}}
  - : Prevents other code from deleting properties of an object.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Sets the object's prototype (its internal `[[Prototype]]` property).
- {{jsxref("Object.values()")}}
  - : Returns an array containing the values that correspond to all of a given object's **own** enumerable string properties.

## Instance properties

These properties are defined on `Object.prototype` and shared by all `Object` instances.

- [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Points to the object which was used as prototype when the object was instantiated.
- {{jsxref("Object.prototype.constructor")}}
  - : The constructor function that created the instance object. For plain `Object` instances, the initial value is the {{jsxref("Object/Object", "Object")}} constructor. Instances of other constructors each inherit the `constructor` property from their respective `Constructor.prototype` object.

## Instance methods

- [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Associates a function with a property that, when accessed, executes that function and returns its return value.
- [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Associates a function with a property that, when set, executes that function which modifies the property.
- [`Object.prototype.__lookupGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Returns the function bound as a getter to the specified property.
- [`Object.prototype.__lookupSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Returns the function bound as a setter to the specified property.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Returns a boolean indicating whether the specified property is the object's [enumerable own](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) property.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Calls {{jsxref("Object/toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Returns a string representation of the object.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object.

## Examples

### Constructing empty objects

The following example creates empty objects using the `new` keyword with different arguments:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Using Object() constructor to turn primitives into an Object of their respective type

You can use the {{jsxref("Object/Object", "Object()")}} constructor to create an object wrapper of a primitive value.

The following examples create variables `o1` and `o2` which are objects storing {{jsxref("Boolean")}} and {{jsxref("BigInt")}} values:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Object prototypes

When altering the behavior of existing `Object.prototype` methods, consider injecting code by wrapping your extension before or after the existing logic. For example, this (untested) code will pre-conditionally execute custom logic before the built-in logic or someone else's extension is executed.

When modifying prototypes with hooks, pass `this` and the arguments (the call state) to the current behavior by calling `apply()` on the function. This pattern can be used for any prototype, such as `Node.prototype`, `Function.prototype`, etc.

```js
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, args);
  }
};
```

> [!WARNING]
> Modifying the `prototype` property of any built-in constructor is considered a bad practice and risks forward compatibility.

You can read more about prototypes in [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
