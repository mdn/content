---
title: Iterator.zip()
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
page-type: javascript-static-method
browser-compat: javascript.builtins.Iterator.zip
---

{{JSRef}}

The **`Iterator.zip()`** static method creates a new {{jsxref("Iterator")}} object that aggregates elements from multiple iterable objects by yielding arrays containing elements at the same position. It essentially "zips" the input iterables together, allowing simultaneous iteration over them.

The {{jsxref("Iterator.zipKeyed()")}} method is similar, but yields objects instead of arrays with keys you can specify.

## Syntax

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### Parameters

- `iterables`
  - : An iterable of iterables whose elements are aggregated. It must be [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) and cannot be an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol). It should be finite, although its elements can be infinite iterables. Each element must implement either the [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) protocol or, failing that, the [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) protocol. Strings are rejected: to zip strings, convert them to iterators explicitly using {{jsxref("Iterator.from()")}}.
- `options` {{optional_inline}}
  - : An object specifying behavior in case of inconsistent input lengths. It may have the following properties:
    - `mode` {{optional_inline}}
      - : One of the following:
        - `"shortest"` (default): The resulting iterator stops when one input iterable is exhausted.
        - `"longest"`: The resulting iterator stops when all input iterables are exhausted. Missing values from shorter iterables are filled according to the `padding` option.
        - `"strict"`: A {{jsxref("TypeError")}} is thrown if not all input iterables finish at the same time.
    - `padding` {{optional_inline}}
      - : Either `undefined` (default) or an iterable object (not iterator). Only retrieved and validated when `mode` is `"longest"`. If `undefined`, missing values from shorter iterables are filled with `undefined`. If an iterable is provided, it is iterated for the number of times equal to the number of elements in `iterables` _as soon as `Iterator.zip()` is called_. `padding[i]` is used for missing values for `iterables[i]` (assuming `padding` and `iterables` are provided as arrays; they don't have to be). If `padding` is shorter than `iterables`, `undefined` is used for the remaining iterables.

### Return value

A new {{jsxref("Iterator")}} object. Each of its elements is an array with length equal to the number of input iterables, containing the elements from each input iterable at the corresponding position. If the `iterables` object is empty, the resulting iterator is created as completed.

## Description

The `Iterator.zip()` function behaves like a [transpose](https://en.wikipedia.org/wiki/Transpose) operation, yielding arrays containing the elements at matching positions in each of the inputs. If we represent iterables as arrays, the input may looks like this:

```js
[
  [a1, a2, a3, a4], // Iterable a
  [b1, b2, b3], // Iterable b
  [c1, c2, c3, c4, c5], // Iterable c
];
```

The resulting iterator, regardless of the options, will start by yielding the following arrays:

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

After the first three arrays are yielded, the input iterable `b` is exhausted on the fourth `next()` call—it returns `{ done: true }`. What happens next depends on the `mode` option. If `mode` is `"shortest"` (the default), the resulting iterator stops here: the other two input iterators are [closed](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration). If `mode` is `"strict"`, an error is thrown because the other two iterables are _not_ finished when the second one yields the result `{ done: true }`. If `mode` is `"longest"`, the resulting iterator continues yielding arrays, filling missing values. For example, if `padding` is not provided, it defaults to `undefined`:

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

If `padding` is provided as an iterable, because there are three input iterables, the first three values from the `padding` iterable are used to fill missing values. Let's suppose that `padding` is an array with values `[p1, p2, p3]`. Then `p2` is used to fill the missing value from the input iterable `b`, and `p1` is used to fill the missing value from the input iterable `a`:

```js
[a4, p2, c4];
[p1, p2, c5];
```

If the `padding` iterable has fewer than three values, the remaining missing values are filled with `undefined`.

## Examples

### Iteration over a map with indices

Using `Iterator.zip()`, you can iterate over any iterable object (strings aren't supported by default) while also having access to an incrementing counter:

```js
const ages = new Map([
  ["Caroline", 30],
  ["Danielle", 25],
  ["Evelyn", 35],
]);

const numbers = (function* () {
  let n = 0;
  while (true) {
    yield n++;
  }
})();
for (const [index, [name, age]] of Iterator.zip([numbers(), ages])) {
  console.log(`${index}: ${name} is ${age} years old.`);
}

// Output:
// 0: Caroline is 30 years old.
// 1: Danielle is 25 years old.
// 2: Evelyn is 35 years old.
```

`numbers()` is an infinite iterator that generates incrementing numbers starting from `0`. Because `Iterator.zip()` stops by default when the shortest input iterable is exhausted, the loop iterates exactly three times. The `numbers()` iterator is properly closed after the loop ends; it doesn't cause an infinite loop.

### Creating a Map from lists of keys and values

Suppose you have two arrays: one with keys and another with values. You can use `Iterator.zip()` to combine them into a {{jsxref("Map")}}:

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const temperatures = [22, 21, 23, 20, 19];

const dayTemperatureMap = new Map(Iterator.zip([days, temperatures]));
console.log(dayTemperatureMap);
// Map(5) { 'Mon' => 22, 'Tue' => 21, 'Wed' => 23, 'Thu' => 20, 'Fri' => 19 }
```

### Joint iteration over multiple data sources

Suppose you have data coming from multiple sources, such as multiple microservices or databases. You know that each source provides related data in the same order, and you want to process them together. You can use `Iterator.zip()` to achieve this:

```js
const names = fetchNames(); // e.g., ["Caroline", "Danielle", "Evelyn"]
const ages = fetchAges(); // e.g., [30, 25, 35]
const cities = fetchCities(); // e.g., ["New York", "London", "Hong Kong"]

for (const [name, age, city] of Iterator.zip([names, ages, cities])) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// Output:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

### Providing padding for uneven iterables

When zipping iterables of different lengths with `mode` set to `"longest"`, you can provide a `padding` iterable to specify the values used to fill in missing entries:

```js
const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3];

// One padding value per iterable
const padding = ["[Letter missing]", "[Number missing]"];
const it = Iterator.zip([letters, numbers], { mode: "longest", padding });
for (const [letter, number] of it) {
  console.log(`${letter}: ${number}`);
}
// Output:
// a: 1
// b: 2
// c: 3
// d: [Number missing]
// e: [Number missing]
```

### Zipping strings

Strings are not accepted as input iterables to `Iterator.zip()`, because it is now considered a mistake to make strings implicitly iterable. To zip strings, convert them to iterators explicitly using {{jsxref("Iterator.from()")}}:

```js
const str1 = "abc";
const str2 = "1234";
const it = Iterator.zip([Iterator.from(str1), Iterator.from(str2)]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Output:
// a - 1
// b - 2
// c - 3
```

In some cases, you may wish to split by [grapheme clusters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) instead of code units. In that case, you can use the {{jsxref("Intl.Segmenter")}} API:

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
const str1 = "😁😭😡";
const str2 = "123";
const it = Iterator.zip([
  segmenter.segment(str1).map(({ segment }) => segment),
  segmenter.segment(str2).map(({ segment }) => segment),
]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// Output:
// 😁 - 1
// 😭 - 2
// 😡 - 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zipKeyed()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
