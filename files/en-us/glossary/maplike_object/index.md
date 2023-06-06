---
title: Map-like objects
slug: Glossary/Maplike_object
page-type: glossary-definition
---

**`Map`-like objects** (or "maplike objects") are objects that behave like a [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), in that they have the same properties, methods, and behaviour.
However they are not derived from `Map`, and unlike `Map` they support only specific types for the keys and values of each entry.

`Map`-like objects are ordered and can be iterated in the same sequence as they were added to the object, for example using [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) or [`forEach()`](#foreach) loops.
Just like `Map`, they also provide methods to get the number of entries, to check whether a particular key is present, and to get a particular value for a key.

The objects may be read-only, or read-writable:

- A read-only `Map`-like object has the property [`size`](#size), and the methods: [`entries()`](#entries), [`forEach()`](#foreach), [`get()`](#get), [`has()`](#has), [`keys()`](#keys), [`values()`](#values), and [`@@iterator`](#iterator).
- An object that is also writeable will additionally have the methods: [`clear()`](#clear), [`delete()`](#delete), and [`set()`](#set).

<!-- distinquish from iterable and setlike -->

## Instance properties

- `size`
  - : Returns the number of items in the `Map`-like object.
    See {{jsxref("Map.prototype.size")}} for details.

## Instance methods

- `entries()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[key, value]` for each entry in the `Map`-like object, in insertion order.
    See {{jsxref("Map.prototype.entries()")}} for details.
- `forEach()`
  - : Calls `callbackFn` once for every entry in the `Map`-like object, in insertion order.
    If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
    See {{jsxref("Map.prototype.forEach()")}} for details.
- `get()`
  - : Returns the value associated with the passed key, or `undefined` if there is none.
    See {{jsxref("Map.prototype.get()")}} for details.
- `has()`
  - : Returns a boolean indicating whether the `Map`-like object contains value for the specified key.
    See {{jsxref("Map.prototype.has()")}} for details.
- `keys()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys for each entry, in insertion order.
    See {{jsxref("Map.prototype.keys()")}} for details.
- `values()`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the values for each entry, in insertion order.
    See {{jsxref("Map.prototype.values()")}} for details.
- `@@iterator`
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[key, value]` for each entry, in insertion order.
    This allows a `Map`-like object to be consumed by almost any syntax that expects an iterator.
    See [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator) for details.

Writeable `Map`-like objects (only) also have these methods:

- `clear()`
  - : Removes all elements from the object.
    See {{jsxref("Map.prototype.clear()")}} for details.
- `delete()`
  - : Removes the entry for a specified key from the object.
    See {{jsxref("Map.prototype.delete()")}} for details.
- `set()`
  - : Adds or updates an entry in a object with a specified key and a value.
    See {{jsxref("Map.prototype.set()")}} for details.

## Supported objects

Readonly:

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}

## Specification IDL

The specification for a `Map`-like object will include the `maplike` keyword, followed by the key and value types in angle brackets.
If the object is also read-only, it will be prefixed by the `readonly` keyword (otherwise the object is readable and writable).

For example, the relevant part of the IDL definition for the readonly {{domxref("RTCStatsReport")}} looks like this:

```idl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

## See also

- [`Set`-like objects](/en-US/docs/Glossary/Setlike_object)

<section id="Quick_links">
 <ol>
  <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>{{ListSubpagesForSidebar("/en-us/docs/Glossary", 1)}}</li>
 </ol>
</section>
