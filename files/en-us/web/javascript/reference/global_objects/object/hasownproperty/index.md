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

## Syntax

```js
hasOwnProperty(prop)
```

### Parameters

- _prop_
  - : The {{jsxref("String")}} name or {{Glossary("Symbol")}} of
    the property to test.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the object has the
specified property as own property.

## Description

All descendants of {{jsxref("Object")}} inherit the `hasOwnProperty`
method. This method can be used to determine whether an object has the specified
property as a direct property of that object; unlike the
{{jsxref("Operators/in", "in")}} operator, this method does not
check for a property in the object's prototype chain. If an
{{jsxref("Object")}} is an {{jsxref("Array")}}, `hasOwnProperty`
method can check whether an index exists.

## Note

`hasOwnProperty` returns true even if the value of the property is `null` or
`undefined`.

```js
o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne');   // returns true
o.propTwo = undefined;
o.hasOwnProperty('propTwo');   // returns true
```

## Examples

### Using hasOwnProperty to test for a property's existence

The following example determines whether the `o` object contains a property
named `prop`:

```js
o = new Object();
o.hasOwnProperty('prop');   // returns false
o.prop = 'exists';
o.hasOwnProperty('prop');   // returns true
```

### Direct vs. inherited properties

The following example differentiates between direct properties and properties
inherited through the prototype chain:

```js
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false
```

### Iterating over the properties of an object

The following example shows how to iterate over the properties of an object
without executing on inherited properties. Note that the
{{jsxref("Statements/for...in",
  "for...in")}} loop is already
only iterating enumerable items, so one should not assume based on the lack of
non-enumerable properties shown in the loop that `hasOwnProperty` itself is
confined strictly to enumerable items (as with
{{jsxref("Object.getOwnPropertyNames()")}}).

```js
var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
```

### Using hasOwnProperty as a property name

JavaScript does not protect the property name `hasOwnProperty`; thus, if the
possibility exists that an object might have a property with this name, it is
necessary to use an _external_ `hasOwnProperty` to get correct results:

```js
var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property
// from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

Note that in the last case there are no newly created objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
