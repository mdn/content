---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - hasOwnProperty
browser-compat: javascript.builtins.Object.hasOwnProperty
---
{{JSRef}}

The **`hasOwnProperty()`** method returns a boolean indicating whether the
object has the specified property as its own property (as opposed to inheriting
it).

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

> **Note:** {{jsxref("Object.hasOwn()")}} is recommended over
> `hasOwnProperty()`, in browsers where it is supported.

## Syntax

```js
hasOwnProperty(prop)
```

### Parameters

- _prop_
  - : The {{jsxref("String")}} name or {{Glossary("Symbol")}} of
    the property to test.

### Return value

Returns `true` if the object has the specified property as own property; `false`
otherwise.

## Description

The **`hasOwnProperty()`** method returns `true` if the specified property is a
direct property of the object — even if the value is `null` or `undefined`. The
method returns `false` if the property is inherited, or has not been declared at
all. Unlike the {{jsxref("Operators/in", "in")}} operator, this
method does not check for the specified property in the object's prototype
chain.

The method can be called on _most_ JavaScript objects, because most objects
descend from {{jsxref("Object")}}, and hence inherit its methods. For
example {{jsxref("Array")}} is an {{jsxref("Object")}}, so you can
use `hasOwnProperty()` method to check whether an index exists:

```js
let fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
fruits.hasOwnProperty(3);   // true ('Orange')
fruits.hasOwnProperty(4);   // false - not defined
```

The method will not be available in objects where it is reimplemented, or on
objects created using `Object.create(null)` (as these don't inherit from
`Object.prototype`). Examples for these cases are given below.

## Examples

### Using hasOwnProperty to test for an own property's existence

The following code shows how to determine whether the `example` object contains a property named `prop`.

```js
let example = {};
example.hasOwnProperty('prop');   // false

example.prop = 'exists';
example.hasOwnProperty('prop');   // true - 'prop' has been defined

example.prop = null;
example.hasOwnProperty('prop');   // true - own property exists with value of null

example.prop = undefined;
example.hasOwnProperty('prop');   // true - own property exists with value of undefined
```

### Direct vs. inherited properties

The following example differentiates between direct properties and properties inherited through the prototype chain:

```js
let example = {};
example.prop = 'exists';

// `hasOwnProperty` will only return true for direct properties:
example.hasOwnProperty('prop');             // returns true
example.hasOwnProperty('toString');         // returns false
example.hasOwnProperty('hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true
```

### Iterating over the properties of an object

The following example shows how to iterate over the enumerable properties of an
object without executing on inherited properties.

```js
let buz = {
  fog: 'stack'
};

for (let name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
```

Note that the {{jsxref("Statements/for...in", "for...in")}} loop
only iterates enumerable items: the absence of non-enumerable properties emitted
from the loop does not imply that `hasOwnProperty` itself is confined strictly
to enumerable items (as with
{{jsxref("Object.getOwnPropertyNames()")}}).

### Using hasOwnProperty as a property name

JavaScript does not protect the property name `hasOwnProperty`; an object that
has a property with this name may return incorrect results:

```js
let foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // reimplementation always returns false
```

The recommended way to overcome this problem is to instead use
{{jsxref("Object.hasOwn()")}} (in browsers that support it). Other
alternatives include using an _external_ `hasOwnProperty`:

```js
let foo = { bar: 'Here be dragons' };

// Use Object.hasOwn() method - recommended
Object.hasOwn(foo, "bar");  // true
  
// Use the hasOwnProperty property from the Object prototype
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true
```

Note that in the first two cases there are no newly created objects.

### Objects created with Object.create(null)

Objects created using
{{jsxref("Object.create()","Object.create(null)")}} do not
inherit from `Object.prototype`, making `hasOwnProperty()` inaccessible.

```js
let foo = Object.create(null);
foo.prop = 'exists';
foo.hasOwnProperty("prop");  // Uncaught TypeError: foo.hasOwnProperty is not a function
```

The solutions in this case are the same as for the previous section: use
{{jsxref("Object.hasOwn()")}} by preference, otherwise use an
external object's `hasOwnProperty()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.hasOwn()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
