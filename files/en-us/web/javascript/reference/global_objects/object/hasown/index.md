---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
tags:
  - JavaScript
  - Method
  - Object
  - hasOwn
browser-compat: javascript.builtins.Object.hasOwn
---
{{JSRef}}

The **`Object.hasOwn()`** static method returns `true` if the specified object
has the indicated property as its _own_ property. If the property is inherited,
or does not exist, the method returns `false`.

> **Note:** `Object.hasOwn()` is intended as a replacement for
> {{jsxref("Object.hasOwnProperty()")}}.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Syntax

```js
Object.hasOwn(instance,prop)
```

### Parameters

- _instance_
  - : The JavaScript object instance to test.
- _prop_
  - : The {{jsxref("String")}} name or {{Glossary("Symbol")}} of
    the property to test.

### Return value

`true` if the specified object has directly defined the specified property.
Otherwise `false`

## Description

The **`Object.hasOwn()`** method returns `true` if the specified property is a
direct property of the object — even if the property value is `null` or
`undefined`. The method returns `false` if the property is inherited, or has not
been declared at all.

It is recommended over {{jsxref("Object.hasOwnProperty()")}} because
it works for objects created using `Object.create(null)` and with objects that
have overridden the inherited `hasOwnProperty()` method. While it is possible to
workaround these problems by calling `Object.prototype.hasOwnProperty()` on an
external object, `Object.hasOwn()` is more intuitive.

## Examples

### Using hasOwn to test for a property's existence

The following example shows how to test whether an object directly defines
('owns') a particular property:

```js
let object1 = {};
object1.prop = 'exists';

// Normal way to use the method
if (Object.hasOwn(object1, 'prop')) {
  // true - 'prop' is defined
}
  
// Own property values can be null or undefined
object1.prop_value_null = null;
Object.hasOwn(object1, 'prop_value_null');  // true
object1.prop_value_undefined = undefined;
Object.hasOwn(object1, 'prop_value_undefined');  // true
  
// Inherited and undeclared properties return false
Object.hasOwn(object1,'toString');  // false
Object.hasOwn(object1,'prop_not_defined');  // false
```

### Iterating over the properties of an object

The following example shows how to iterate over the enumerable properties of an
object without executing on inherited properties.

```js
let buz = {
  fog: 'stack'
};

for (let name in buz) {
  if (Object.hasOwn(buz, name)) {
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
from the loop does not imply that `hasOwn` itself is confined strictly to
enumerable items (as with
{{jsxref("Object.getOwnPropertyNames()")}}).

### Checking if an Array index exists

The elements of an {{jsxref("Array")}} are defined as direct properties, so
you can use `hasOwn()` method to check whether a particular index exists:

```js
let fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
Object.hasOwn(fruits, 3);   // true ('Orange')
Object.hasOwn(fruits, 4);   // false - not defined
    
```

### Problematic cases for hasOwnProperty

This section demonstrate that `hasOwn()` is immune to the problems that affect
`hasOwnProperty`. Firstly, it can be used with objects that have reimplemented
`hasOwnProperty()`:

```js
let foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'The dragons be out of office'
};

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar); //true - remplementation of hasOwnProperty() does not affect Object
}
```

It can also be used to test objects created using
{{jsxref("Object.create()","Object.create(null)")}}. These do
not inherit from `Object.prototype`, and so `hasOwnProperty()` is inaccessible.

```js
let foo = Object.create(null);
foo.prop = 'exists';
if (Object.hasOwn(foo, 'prop')) {
  console.log(foo.prop); //true - works irrespective of how the object is created.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.hasOwnProperty()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)