---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
page-type: javascript-class
browser-compat: javascript.builtins.Set
---

{{JSRef}}

The **`Set`** object lets you store unique values of any type, whether {{Glossary("Primitive", "primitive values")}} or object references.

## Description

`Set` objects are collections of values. A value in the set **may only occur once**; it is unique in the set's collection. You can iterate through the elements of a set in insertion order. The _insertion order_ corresponds to the order in which each element was inserted into the set by the [`add()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add) method successfully (that is, there wasn't an identical element already in the set when `add()` was called).

The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

### Value equality

Value equality is based on the [SameValueZero](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) algorithm. (It used to use [SameValue](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is), which treated `0` and `-0` as different. Check [browser compatibility](#browser_compatibility).) This means {{jsxref("NaN")}} is considered the same as `NaN` (even though `NaN !== NaN`) and all other values are considered equal according to the semantics of the `===` operator.

### Performance

The [`has`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has) method checks if a value is in the set, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the set. In particular, it is, on average, faster than the [`Array.prototype.includes`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method when an array has a `length` equal to a set's `size`.

### Set composition

The `Set` object provides some methods that allow you to compose sets like you would with mathematical operations. These methods include:

<table>
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Return type</th>
      <th scope="col">Mathematical equivalent</th>
      <th scope="col">Venn diagram</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Set/difference", "A.difference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi></mrow><annotation encoding="TeX">A\setminus B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="A Venn diagram where two circles overlap. The difference of A and B is the part of A that is not overlapping B." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="A Venn diagram where two circles overlap. The intersection of A and B is the part where they overlap." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="A Venn diagram where two circles overlap. The symmetric difference of A and B is the region contained by either circle but not both." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="A Venn diagram where two circles overlap. The union of A and B is the region contained by either or both circles." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="A Venn diagram with two circles. A and B are disjoint because the circles have no region of overlap." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSubsetOf", "A.isSubsetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSubsetOf/diagram.svg" alt="A Venn diagram with two circles. A is a subset of B because A is completely contained in B." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSupersetOf", "A.isSupersetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi></mrow><annotation encoding="TeX">A\supseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSupersetOf/diagram.svg" alt="A Venn diagram with two circles. A is a superset of B because B is completely contained in A." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
  </tbody>
</table>

To make them more generalizable, these methods don't just accept `Set` objects, but anything that's [set-like](#set-like_objects).

### Set-like objects

All [set composition methods](#set_composition) require {{jsxref("Operators/this", "this")}} to be an actual `Set` instance, but their arguments just need to be set-like. A _set-like object_ is an object that provides the following:

- A {{jsxref("Set/size", "size")}} property that contains a number.
- A {{jsxref("Set/has", "has()")}} method that takes an element and returns a boolean.
- A {{jsxref("Set/keys", "keys()")}} method that returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of the elements in the set.

For example, {{jsxref("Map")}} objects are set-like because they also have {{jsxref("Map/size", "size")}}, {{jsxref("Map/has", "has()")}}, and {{jsxref("Map/keys", "keys()")}}, so they behave just like sets of keys when used in set methods:

```js
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
```

> [!NOTE]
> The set-like protocol invokes the `keys()` method instead of [`[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) to produce elements. This is to make maps valid set-like objects, because for maps, the iterator produces _entries_ but the `has()` method takes _keys_.

[Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are not set-like because they don't have a `has()` method or the `size` property, and their `keys()` method produces indices instead of elements. {{jsxref("WeakSet")}} objects are also not set-like because they don't have a `keys()` method.

### Set-like browser APIs

Browser **`Set`-like objects** (or "setlike objects") are [Web API](/en-US/docs/Web/API) interfaces that behave in many ways like a `Set`.

Just like `Set`, elements can be iterated in the same order that they were added to the object.
`Set`-like objects and `Set` also have properties and methods that share the same name and behavior.
However unlike `Set` they only allow a specific predefined type for each entry.

The allowed types are set in the specification IDL definition.
For example, {{domxref("GPUSupportedFeatures")}} is a `Set`-like object that must use strings as the key/value.
This is defined in the specification IDL below:

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

`Set`-like objects are either read-only or read-writable (see the `readonly` keyword in the IDL above).

- Read-only `Set`-like objects have the property [`size`](#set.prototype.size), and the methods: [`entries()`](#set.prototype.entries), [`forEach()`](#set.prototype.foreach), [`has()`](#set.prototype.has), [`keys()`](#set.prototype.keys), [`values()`](#set.prototype.values), and [`[Symbol.iterator]()`](#set.prototypesymbol.iterator).
- Writeable `Set`-like objects additionally have the methods: [`clear()`](#set.prototype.clear), [`delete()`](#set.prototype.delete), and [`add()`](#set.prototype.add).

The methods and properties have the same behavior as the equivalent entities in `Set`, except for the restriction on the types of the entry.

The following are examples of read-only `Set`-like browser objects:

- {{domxref("GPUSupportedFeatures")}}
- {{domxref("XRAnchorSet")}}

The following are examples of writable `Set`-like browser objects:

- {{domxref("CustomStateSet")}}
- {{domxref("FontFaceSet")}}
- {{domxref("Highlight")}}

## Constructor

- {{jsxref("Set/Set", "Set()")}}
  - : Creates a new `Set` object.

## Static properties

- [`Set[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : The constructor function that is used to create derived objects.

## Instance properties

These properties are defined on `Set.prototype` and shared by all `Set` instances.

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Set` instances, the initial value is the {{jsxref("Set/Set", "Set")}} constructor.
- {{jsxref("Set.prototype.size")}}
  - : Returns the number of values in the `Set` object.
- `Set.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Set"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Set.prototype.add()")}}
  - : Inserts a new element with a specified value in to a `Set` object, if there isn't an element with the same value already in the `Set`.
- {{jsxref("Set.prototype.clear()")}}
  - : Removes all elements from the `Set` object.
- {{jsxref("Set.prototype.delete()")}}
  - : Removes the element associated to the `value` and returns a boolean asserting whether an element was successfully removed or not. `Set.prototype.has(value)` will return `false` afterwards.
- {{jsxref("Set.prototype.difference()")}}
  - : Takes a set and returns a new set containing elements in this set but not in the given set.
- {{jsxref("Set.prototype.entries()")}}
  - : Returns a new iterator object that contains **an array of `[value, value]`** for each element in the `Set` object, in insertion order. This is similar to the {{jsxref("Map")}} object, so that each entry's _key_ is the same as its _value_ for a `Set`.
- {{jsxref("Set.prototype.forEach()")}}
  - : Calls `callbackFn` once for each value present in the `Set` object, in insertion order. If a `thisArg` parameter is provided, it will be used as the `this` value for each invocation of `callbackFn`.
- {{jsxref("Set.prototype.has()")}}
  - : Returns a boolean asserting whether an element is present with the given value in the `Set` object or not.
- {{jsxref("Set.prototype.intersection()")}}
  - : Takes a set and returns a new set containing elements in both this set and the given set.
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : Takes a set and returns a boolean indicating if this set has no elements in common with the given set.
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : Takes a set and returns a boolean indicating if all elements of this set are in the given set.
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : Takes a set and returns a boolean indicating if all elements of the given set are in this set.
- {{jsxref("Set.prototype.keys()")}}
  - : An alias for {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : Takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.
- {{jsxref("Set.prototype.union()")}}
  - : Takes a set and returns a new set containing elements which are in either or both of this set and the given set.
- {{jsxref("Set.prototype.values()")}}
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.
- [`Set.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Returns a new iterator object that yields the **values** for each element in the `Set` object in insertion order.

## Examples

### Using the Set object

```js
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

### Iterating sets

The iteration over a set visits elements in insertion order.

```js
for (const item of mySet1) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// the following will also work if run in an HTML document
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Iterate set entries with forEach()
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### Implementing basic set operations

```js
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // returns Set {3, 4}
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
difference(setA, setC); // returns Set {1, 2}
```

### Relation to arrays

```js
const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

### Remove duplicate elements from an array

```js
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### Relation to strings

```js
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Use a set to ensure the uniqueness of a list of values

```js
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
