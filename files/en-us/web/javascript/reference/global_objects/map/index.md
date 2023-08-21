---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
page-type: javascript-class
browser-compat: javascript.builtins.Map
---

{{JSRef}}

The **`Map`** object holds key-value pairs and remembers the original insertion
order of the keys. Any value (both objects and
{{glossary("Primitive", "primitive values")}}) may be used as
either a key or a value.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Description

`Map` objects are collections of key-value pairs. A key in the `Map` **may only occur once**; it is unique in the `Map`'s collection. A `Map` object is iterated by key-value pairs — a {{jsxref("Statements/for...of", "for...of")}} loop returns a 2-member array of `[key, value]` for each iteration. Iteration happens in _insertion order_, which corresponds to the order in which each key-value pair was first inserted into the map by the [`set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) method (that is, there wasn't a key with the same value already in the map when `set()` was called).

The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

### Key equality

Value equality is based on the [SameValueZero](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) algorithm. (It used to use [SameValue](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is), which treated `0` and `-0` as different. Check [browser compatibility](#browser_compatibility).) This means {{jsxref("NaN")}} is considered the same as `NaN` (even though `NaN !== NaN`) and all other values are considered equal according to the semantics of the `===` operator.

### Objects vs. Maps

{{jsxref("Object")}} is similar to `Map`—both let you set keys to
values, retrieve those values, delete keys, and detect whether something is
stored at a key. For this reason (and because there were no built-in
alternatives), `Object` has been used as `Map` historically.

However, there are important differences that make `Map` preferable in some
cases:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Accidental Keys</th>
      <td>
        A <code>Map</code> does not contain any keys by default. It only
        contains what is explicitly put into it.
      </td>
      <td>
        <p>
          An <code>Object</code> has a prototype, so it contains default keys
          that could collide with your own keys if you're not careful.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This can be bypassed by using
            {{jsxref("Object.create", "Object.create(null)")}},
            but this is seldom done.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Security</th>
      <td>
        A <code>Map</code> is safe to use with user-provided keys and values.
      </td>
      <td>
        <p>
          Setting user-provided key-value pairs on an <code>Object</code> may allow
          an attacker to override the object's prototype, which can lead to
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            object injection attacks
          </a>. Like the accidental keys issue, this can also be mitigated by using
          a <code>null</code>-prototype object.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Key Types</th>
      <td>
        A <code>Map</code>'s keys can be any value (including functions,
        objects, or any primitive).
      </td>
      <td>
        The keys of an <code>Object</code> must be either a
        {{jsxref("String")}} or a {{jsxref("Symbol")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Key Order</th>
      <td>
        <p>
          The keys in <code>Map</code> are ordered in a simple, straightforward
          way: A <code>Map</code> object iterates entries, keys, and values in
          the order of entry insertion.
        </p>
      </td>
      <td>
        <p>
          Although the keys of an ordinary <code>Object</code> are ordered now,
          this was not always the case, and the order is complex. As a result,
          it's best not to rely on property order.
        </p>
        <p>
          The order was first defined for own properties only in ECMAScript
          2015; ECMAScript 2020 defines order for inherited properties as well.
          But note that no single mechanism
          iterates
          <strong>all</strong> of an object's properties; the various mechanisms
          each include different subsets of properties.
          ({{jsxref("Statements/for...in",
          "for-in")}}
          includes only enumerable string-keyed properties;
          {{jsxref("Object.keys")}} includes only own, enumerable,
          string-keyed properties;
          {{jsxref("Object.getOwnPropertyNames")}} includes own,
          string-keyed properties even if non-enumerable;
          {{jsxref("Object.getOwnPropertySymbols")}} does the same
          for just <code>Symbol</code>-keyed properties, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Size</p></th>
      <td>
        The number of items in a <code>Map</code> is easily retrieved from its
        {{jsxref("Map.prototype.size", "size")}} property.
      </td>
      <td>
        Determining the number of items in an <code>Object</code> is more roundabout and less efficient. A common way to do it is through the {{jsxref("Array/length", "length")}} of the array returned from {{jsxref("Object.keys()")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        A <code>Map</code> is an
        <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterable</a
        >, so it can be directly iterated.
      </td>
      <td>
        <p>
          <code>Object</code> does not implement an <a
            href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >iteration protocol</a
          >, and so objects are not directly iterable using the JavaScript
          <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >
          statement (by default).
        </p>
        <div class="notecard note">
          <p><strong>Note:</strong></p>
          <ul>
            <li>
              An object can implement the iteration protocol, or you can get an
              iterable for an object using <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > or <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              The
              <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              statement allows you to iterate over the
              <em>enumerable</em> properties of an object.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Performance</th>
      <td>
        <p>
          Performs better in scenarios involving frequent additions and removals
          of key-value pairs.
        </p>
      </td>
      <td>
        <p>
          Not optimized for frequent additions and removals of key-value pairs.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialization and parsing</th>
      <td>
        <p>No native support for serialization or parsing.</p>
        <p>
          (But you can build your own serialization and parsing support for
          <code>Map</code> by using {{jsxref("JSON.stringify()")}}
          with its <em>replacer</em> argument, and by using
          {{jsxref("JSON.parse()")}} with its
          <em>reviver</em> argument. See the Stack Overflow question
          <a href="https://stackoverflow.com/q/29085197/"
            >How do you JSON.stringify an ES6 Map?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Native support for serialization from {{jsxref("Object")}} to
          JSON, using {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native support for parsing from JSON to {{jsxref("Object")}},
          using {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Setting object properties

Setting Object properties works for Map objects as well, and can cause
considerable confusion.

Therefore, this appears to work in a way:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

But that way of setting a property does not interact with the Map data
structure. It uses the feature of the generic object. The value of 'bla' is not
stored in the Map for queries. Other operations on the data fail:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

The correct usage for storing data in the Map is through the `set(key, value)`
method.

```js example-good
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

### Map-like browser APIs

**Browser `Map`-like objects** (or "maplike objects") are [Web API](/en-US/docs/Web/API) interfaces that behave in many ways like a `Map`.

Just like `Map`, entries can be iterated in the same order that they were added to the object.
`Map`-like objects and `Map` also have properties and methods that share the same name and behavior.
However unlike `Map` they only allow specific predefined types for the keys and values of each entry.

The allowed types are set in the specification IDL definition.
For example, {{domxref("RTCStatsReport")}} is a `Map`-like object that must use strings for keys and objects for values.
This is defined in the specification IDL below:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map`-like objects are either read-only or read-writable (see the `readonly` keyword in the IDL above).

- Read-only `Map`-like objects have the property [`size`](#map.prototype.size), and the methods: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values), and [`@@iterator`](#map.prototypeiterator).
- Writeable `Map`-like objects additionally have the methods: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete), and [`set()`](#map.prototype.set).

The methods and properties have the same behavior as the equivalent entities in `Map`, except for the restriction on the types of the keys and values.

The following are examples of read-only `Map`-like browser objects:

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}

## Constructor

- {{jsxref("Map/Map", "Map()")}}
  - : Creates a new `Map` object.

## Static properties

- {{jsxref("Map/@@species", "Map[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Static methods

- {{jsxref("Map.groupBy()")}} {{Experimental_Inline}}
  - : Groups the elements of a given iterable using the values returned by a provided callback function. The final returned `Map` uses the unique values from the test function as keys, which can be used to get the array of elements in each group.

## Instance properties

These properties are defined on `Map.prototype` and shared by all `Map` instances.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Map` instances, the initial value is the {{jsxref("Map/Map", "Map")}} constructor.
- {{jsxref("Map.prototype.size")}}
  - : Returns the number of key/value pairs in the `Map` object.
- `Map.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Map"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Map.prototype.clear()")}}
  - : Removes all key-value pairs from the `Map` object.
- {{jsxref("Map.prototype.delete()")}}
  - : Returns `true` if an element in the `Map` object existed and has been
    removed, or `false` if the element does not exist. `map.has(key)`
    will return `false` afterwards.
- {{jsxref("Map.prototype.entries()")}}
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.forEach()")}}
  - : Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order. If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
- {{jsxref("Map.prototype.get()")}}
  - : Returns the value associated to the passed key, or `undefined` if there is none.
- {{jsxref("Map.prototype.has()")}}
  - : Returns a boolean indicating whether a value has been associated with the passed key in the `Map` object or not.
- {{jsxref("Map.prototype.keys()")}}
  - : Returns a new Iterator object that contains the keys for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.set()")}}
  - : Sets the value for the passed key in the `Map` object. Returns the `Map` object.
- {{jsxref("Map.prototype.values()")}}
  - : Returns a new Iterator object that contains the values for each element in the `Map` object in insertion order.
- [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.

## Examples

### Using the Map object

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}
```

### Using NaN as Map keys

{{jsxref("NaN")}} can also be used as a key. Even though every `NaN` is
not equal to itself (`NaN !== NaN` is true), the following example works because
`NaN`s are indistinguishable from each other:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Iterating Map with for...of

Maps can be iterated using a `for...of` loop:

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

### Iterating Map with forEach()

Maps can be iterated using the
{{jsxref("Map.prototype.forEach", "forEach()")}} method:

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### Relation with Array objects

```js
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Cloning and merging Maps

Just like `Array`s, `Map`s can be cloned:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> **Note:** Keep in mind that _the data itself_ is not cloned.

Maps can be merged, maintaining key uniqueness:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Maps can be merged with Arrays, too:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill for `Map` in `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
