---
title: Set-like objects
slug: Glossary/Setlike_object
page-type: glossary-definition
---

**`Set`-like objects** (or "setlike objects") are objects that behave like a [`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), in that they have the same properties, methods, and behaviour.
However they are not derived from `Set`, and unlike `Set` they support only specific types for the values of each entry.

`Set`-like objects are ordered and can be iterated in the same sequence as they were added to the object, for example using [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) or [`forEach()`](#foreach) loops.
Just like `Set`, they also provide a method to check whether a particular value is present.

The objects may be read-only, or read-writable:

- A read-only `Set`-like object has the property [`size`](#size), and the methods: [`entries()`](#entries), [`forEach()`](#foreach), [`has()`](#has), [`keys()`](#keys), [`values()`](#values), and [`@@iterator`](#iterator).
- An object that is also writeable will additionally have the methods: [`clear()`](#clear), [`delete()`](#delete), and [`add()`](#add).

## Instance properties

- `size`
  - : Returns the number of items in the `Set`-like object.
      See {{jsxref("Set.prototype.size")}} for details.

## Instance methods

- `entries()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[value, value]` for each entry, in insertion order.
    See {{jsxref("Set.prototype.entries()")}} for details.
- `forEach()`
  - : Calls `callbackFn` once for each entry in the `Set`-like object, in insertion order.
    If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
    See {{jsxref("Set.prototype.forEach()")}} for details.
- `has()`
  - : Returns a boolean indicating whether the `Set`-like object contains the specified value.
    See {{jsxref("Set.prototype.has()")}} for details.
- `keys()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys for each entry, in insertion order.
    Note that this is effectively an alias of [`values()`](#values).
    See {{jsxref("Set.prototype.keys()")}} for details.
- `values()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the values for each entry, in insertion order.
    See {{jsxref("Set.prototype.values()")}} for details.
- `@@iterator`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[value, value]` for each entry, in insertion order.
    This allows a `Set`-like object to be consumed by almost any syntax that expects an iterator.
    See [`Set.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) for details.

Writeable `Set`-like objects (only) also have these methods:

- `clear()`
  - : Removes all entries from the object.
    See {{jsxref("Set.prototype.clear()")}} for details.
- `delete()`
  - : Removes the specified value from the object.
    See {{jsxref("Set.prototype.delete()")}} for details.
- `add()`
  - : Adds the specified value to the `Set`-like object.
    If the value already exists in the object the operation is ignored.
    See {{jsxref("Set.prototype.add()")}} for details.

## Supported objects

Readonly:

- {{domxref("GPUSupportedFeatures")}}
- {{domxref("XRAnchorSet")}}

Readable and writeable:

- {{domxref("CustomStateSet")}}
- {{domxref("FontFaceSet")}}
- {{domxref("Highlight")}}

## Specification IDL

The specification for a `Set`-like object will include the `setlike` keyword, followed by the type of the value in angle brackets.
If the object is also read-only, it will be prefixed by the `readonly` keyword (otherwise the object is readable and writable).

For example, the relevant part of the IDL definition for the readonly {{domxref("GPUSupportedFeatures")}} looks like this:

```idl
interface GPUSupportedFeatures {
    readonly setlike<DOMString>;
};
```

## See also

- [`Map`-like object](/en-US/docs/Glossary/Maplike_object)

<section id="Quick_links">
 <ol>
  <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
 </ol>
</section>
