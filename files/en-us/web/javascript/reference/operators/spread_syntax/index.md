---
title: Spread syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
page-type: javascript-operator
browser-compat: javascript.operators.spread
---

{{jsSidebar("Operators")}}

The **spread (`...`)** syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and [rest property](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntax

```js-nolint
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

## Description

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

- [Function arguments](#spread_in_function_calls) list (`myFunction(a, ...iterableObj, b)`)
- [Array literals](#spread_in_array_literals) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Object literals](#spread_in_object_literals) (`{ ...obj, key: 'value' }`)

Although the syntax looks the same, they come with slightly different semantics.

Only [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) objects, like {{jsxref("Array")}}, can be spread in array and function parameters. Many objects are not iterable, including all [plain objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that lack a [`Symbol.iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, spreading in object literals [enumerates](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties) the own properties of the object. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See {{jsxref("Function.prototype.apply()")}} for more details.

## Examples

### Spread in function calls

#### Replace apply()

It is common to use {{jsxref("Function.prototype.apply()")}} in cases where you want to
use the elements of an array as arguments to a function.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

With spread syntax the above can be written as:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Any argument in the argument list can use spread syntax, and the spread syntax can be
used multiple times.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply for new operator

When calling a constructor with {{jsxref("Operators/new", "new")}}, it's not possible to **directly** use an array and `apply()`, because `apply()` _calls_ the target function instead of _constructing_ it, which means, among other things, that [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) will be `undefined`. However, an array can be easily used with `new` thanks to spread syntax:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in array literals

#### A more powerful array literal

Without spread syntax, to create a new array using an existing array as one part of it,
the array literal syntax is no longer sufficient and imperative code must be used
instead using a combination of {{jsxref("Array.prototype.push", "push()")}},
{{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}}, etc. With spread syntax this becomes much more succinct:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Just like spread for argument lists, `...` can be used anywhere in the array
literal, and may be used more than once.

#### Copy an array

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

> **Note:** Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays. The same is true with {{jsxref("Object.assign()")}} — no native operation in JavaScript does a deep clone. The web API method {{domxref("structuredClone()")}} allows deep copying values of certain [supported types](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).
>
> ```js example-bad
> const a = [[1], [2], [3]];
> const b = [...a];
>
> b.shift().shift();
> // 1
>
> // Oh no! Now array 'a' is affected as well:
> console.log(a);
> // [[], [2], [3]]
> ```

#### A better way to concatenate arrays

{{jsxref("Array.prototype.concat()")}} is often used to concatenate an array to the end
of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}} is often used to insert an array of values at
the start of an existing array. Without spread syntax, this is done as:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

With spread syntax, this becomes:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

> **Note:** Unlike `unshift()`, this creates a new `arr1`, instead of modifying the original `arr1` array in-place.

### Spread in object literals

Shallow-cloning (excluding prototype) or merging of objects is possible using a shorter syntax than {{jsxref("Object.assign()")}}.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

Note that {{jsxref("Object.assign()")}} can be used to mutate an object, whereas spread syntax can't.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

In addition, {{jsxref("Object.assign()")}} triggers setters on the target object, whereas spread syntax does not.

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// Logs "1"; objectAssign.foo is still the original setter

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// Nothing is logged; spread.foo is 1
```

You cannot naively re-implement the {{jsxref("Object.assign()")}} function through a single spreading:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

In the above example, the spread syntax does not work as one might expect: it spreads an _array_ of arguments into the object literal, due to the rest parameter. Here is an implementation of `merge` using the spread syntax, whose behavior is similar to {{jsxref("Object.assign()")}}, except that it doesn't trigger setters, nor mutates any object:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Rest property](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property)
- {{jsxref("Function.prototype.apply()")}}
