---
title: Property (JavaScript)
slug: Glossary/Property/JavaScript
page-type: glossary-definition
---

{{GlossarySidebar}}

A **JavaScript property** is a member of an [object](/en-US/docs/Web/JavaScript/Data_structures#objects) that associates a key with a value. A JavaScript object is a data structure that stores a collection of properties.

A property consists of the following parts:

- A _name_ (also called a _key_), which is either a [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or a [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- A _value_, which can be any JavaScript value. A property that has a function as its value may also be called a [method](/en-US/docs/Glossary/Method).
- Some _attributes_, which specify how the property can be read and written. A property may have the `configurable`, `enumerable`, and `writable` attributes.

[Accessor properties](/en-US/docs/Web/JavaScript/Data_structures#accessor_property) do not have an actual "value". The value is represented indirectly through a pair of functions, one (the getter) invoked when reading the value and one (the setter) invoked when setting the value. However, accessor properties behave like regular data properties on the surface, because the getter and setter functions are invoked automatically and are typically transparent to JavaScript code.

The property's value (including the getter and setter) and its attributes are stored in a data record called the _property descriptor_. Many methods, such as {{jsxref("Object.getOwnPropertyDescriptor()")}} and {{jsxref("Object.defineProperty()")}}, work with property descriptors.

The term _property_ itself does not correspond to any JavaScript value — it's an abstract concept. For example, in the following code:

```js
const obj = {
  a: 1,
  b() {},
};
```

The object `obj` has two properties. The first one has `"a"` as the key and `1` as the value. The second one has `"b"` as the key and a function as the value (using the [method syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)). The `"a"` – `1`, `"b"` – `function` associations are the properties of the object.

In the context of [classes](/en-US/docs/Web/JavaScript/Reference/Classes), properties can be divided into _instance properties_, which are owned by each instance, and _static properties_, which are owned by the class and hold data common to all instances. In the context of [inheritance](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), properties can also be divided into _own properties_, which are owned by the object itself, and _inherited properties_, which are owned by objects in the prototype chain of the object.

For more information about reading and writing properties, see [working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

## See also

- [Property (programming)](<https://en.wikipedia.org/wiki/Property_(programming)>) on Wikipedia
- [Introduction to object-oriented JavaScript](/en-US/docs/Learn/JavaScript/Objects)
- [Object properties](/en-US/docs/Web/JavaScript/Data_structures#properties)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
