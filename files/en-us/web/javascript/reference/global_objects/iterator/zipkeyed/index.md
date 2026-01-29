---
title: Iterator.zipKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zipKeyed
page-type: javascript-static-method
browser-compat: javascript.builtins.Iterator.zipKeyed
---

{{JSRef}}

The **`Iterator.zipKeyed()`** static method creates a new {{jsxref("Iterator")}} object that aggregates elements from multiple iterable objects by yielding objects containing elements at the same position, with keys specified by the input. It essentially "zips" the input iterables together, allowing simultaneous iteration over them.

The {{jsxref("Iterator.zip()")}} method is similar, but yields arrays instead of objects.

## Syntax

```js-nolint
Iterator.zipKeyed(iterables)
Iterator.zipKeyed(iterables, options)
```

### Parameters

- `iterables`
  - : An object. Each property's key is used as the key in the resulting objects. The property's value must implement either the [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) protocol or, failing that, the [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) protocol. These iterables may be infinite. Strings are rejected: to zip strings, convert them to iterators explicitly using {{jsxref("Iterator.from()")}}.
- `options` {{optional_inline}}
  - : An object specifying behavior in case of inconsistent input lengths. It may have the following properties:
    - `mode` {{optional_inline}}
      - : One of the following:
        - `"shortest"` (default): The resulting iterator stops when one input iterable is exhausted.
        - `"longest"`: The resulting iterator stops when all input iterables are exhausted. Missing values from shorter iterables are filled according to the `padding` option.
        - `"strict"`: A {{jsxref("TypeError")}} is thrown if not all input iterables finish at the same time.
    - `padding` {{optional_inline}}
      - : Either `undefined` (default) or an object. Only retrieved and validated when `mode` is `"longest"`. If `undefined`, missing values from shorter iterables are filled with `undefined`. If an object is provided, each key of the `iterables` argument is retrieved _as soon as `Iterator.zipKeyed()` is called_. `padding[key]` is used for missing values for `iterables[key]`. If the `padding` object is missing some keys, those keys are filled with `undefined`.

### Return value

A new {{jsxref("Iterator")}} object. Each of its elements is an object with the same keys as the `iterables` argument, containing the elements from each input iterable at the corresponding position.

## Description

The `Iterator.zipKeyed()` function behaves like {{jsxref("Iterator.zip()")}}; the only difference is that you can specify the keys used in the resulting objects.

If we represent iterables as arrays, the input may looks like this:

```js
({
  a: [a1, a2, a3, a4],
  b: [b1, b2, b3],
  c: [c1, c2, c3, c4, c5],
});
```

The resulting iterator will yield the following objects:

```js
({ a: a1, b: b1, c: c1 });
({ a: a2, b: b2, c: c2 });
({ a: a3, b: b3, c: c3 });
```

After the first three objects are yielded, the input iterable `b` is exhausted on the fourth `next()` call—it returns `{ done: true }`. What happens next depends on the `mode` option. If `mode` is `"shortest"` (the default), the resulting iterator stops here: the other two input iterators are closed. If `mode` is `"strict"`, an error is thrown because the other two iterables are _not_ finished when the second one yields the result `{ done: true }`. If `mode` is `"longest"`, the resulting iterator continues yielding objects, filling missing values. For example, if `padding` is not provided, it defaults to `undefined`:

```js
({ a: a4, b: undefined, c: c4 });
({ a: undefined, b: undefined, c: c5 });
```

If `padding` is provided as an object, it may look like `{ a: p1, b: p2, c: p3 }`. Then `p2` is used to fill the missing value from the input iterable `b`, and `p1` is used to fill the missing value from the input iterable `a`:

```js
({ a: a4, b: p2, c: c4 });
({ a: p1, b: p2, c: c5 });
```

## Examples

### Transposing tabular data

There are two common ways to represent tabular data: as an object where each property is a column, or as an array of objects where each object is a row. This example shows how to convert from the former to the latter using `Iterator.zipKeyed()`.

```js
const table = {
  name: ["Caroline", "Danielle", "Evelyn"],
  age: [30, 25, 35],
  city: ["New York", "London", "Hong Kong"],
};

for (const { name, age, city } of Iterator.zipKeyed(table)) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// Output:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

Most use cases of `Iterator.zipKeyed()` are identical to those of {{jsxref("Iterator.zip()")}}. Which one to use depends on whether you already have an object of iterables (use `zipKeyed()`) or an array of iterables (use `zip()`). We recommend using `zipKeyed()` when possible, because specifying explicit keys makes it harder to accidentally mix up the order of iterables.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zip()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
