---
title: Spread syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
page-type: javascript-operator
browser-compat: javascript.operators.spread
---

{{jsSidebar("Operators")}}

The **spread (`...`)** syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and [rest property](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property).

{{InteractiveExample("JavaScript Demo: Expressions - Spread syntax")}}

```js interactive-example
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

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

Only [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) values, like {{jsxref("Array")}} and {{jsxref("String")}}, can be spread in [array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) and argument lists. Many objects are not iterable, including all [plain objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that lack a [`Symbol.iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method:

```js example-bad
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, spreading in [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) [enumerates](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties) the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

All [primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_values) can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
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

Without spread syntax, the array literal syntax is no longer sufficient to create a new array using an existing array as one part of it. Instead, imperative code must be used using a combination of methods, including {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, {{jsxref("Array/concat", "concat()")}}, etc. With spread syntax, this becomes much more succinct:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Just like spread for argument lists, `...` can be used anywhere in the array literal, and may be used more than once.

#### Copying an array

You can use spread syntax to make a {{Glossary("shallow copy")}} of an array. Each array element retains its identity without getting copied.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays. The same is true with {{jsxref("Object.assign()")}} — no native operation in JavaScript does a deep clone. The web API method {{DOMxRef("Window.structuredClone", "structuredClone()")}} allows deep copying values of certain [supported types](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types). See [shallow copy](/en-US/docs/Glossary/Shallow_copy) for more details.

```js example-bad
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

#### A better way to concatenate arrays

{{jsxref("Array.prototype.concat()")}} is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

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

{{jsxref("Array.prototype.unshift()")}} is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

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

> [!NOTE]
> Unlike `unshift()`, this creates a new `arr1`, instead of modifying the original `arr1` array in-place.

#### Conditionally adding values to an array

You can make an element present or absent in an array literal, depending on a condition, using a [conditional operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

When the condition is `false`, we spread an empty array, so that nothing gets added to the final array. Note that this is different from the following:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In this case, an extra `undefined` element is added when `isSummer` is `false`, and this element will be visited by methods such as {{jsxref("Array.prototype.map()")}}.

### Spread in object literals

#### Copying and merging objects

You can use spread syntax to merge multiple objects into one new object.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

A single spread creates a shallow copy of the original object (but without non-enumerable properties and without copying the prototype), similar to [copying an array](#copying_an_array).

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

#### Overriding properties

When one object is spread into another object, or when multiple objects are spread into one object, and properties with identical names are encountered, the property takes the last value assigned while remaining in the position it was originally set.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

#### Conditionally adding properties to an object

You can make an element present or absent in an object literal, depending on a condition, using a [conditional operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

The case where the condition is `false` is an empty object, so that nothing gets spread into the final object. Note that this is different from the following:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In this case, the `watermelon` property is always present and will be visited by methods such as {{jsxref("Object.keys()")}}.

Because primitives can be spread into objects as well, and from the observation that all {{Glossary("falsy")}} values do not have enumerable properties, you can simply use a [logical AND](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) operator:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In this case, if `isSummer` is any falsy value, no property will be created on the `fruits` object.

#### Comparing with Object.assign()

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
