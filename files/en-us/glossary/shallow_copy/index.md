---
title: Shallow copy
slug: Glossary/Shallow_copy
tags:
  - Glossary
  - Shallow copy
---
{{MDNSidebar}}

A **shallow copy** of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don’t expect. That behavior contrasts with the behavior of a [deep copy](/en-US/docs/Glossary/Deep_copy), in which the source and copy are completely independent.

For shallow copies, it’s important to understand that changing the value of a shared property of an existing element in an object is different from assigning a completely new value to an existing element.

For example, if a shallow copy of an array object has `{"list":["butter","flour","sugar"]}` as an element, and you change that to `{"list":["oil","flour","sugar"]}` in the shallow copy, then the corresponding element in the source object will change, too — because the two share that object.

However, if an array element in a shallow copy of an array object has the string `"Cake"` assigned to it, and you reassign the completely new value `"Pie"` to that array element, then the corresponding element in the source object **will not change** — because in that case, you’re not just changing a property of an existing array element that the shallow copy shares with the source object; instead you’re assigning a completely new value to that array element, just in the shallow copy.

In JavaScript, all standard built-in object-copy operations ([`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), and [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) create shallow copies rather than deep copies.

## Example

Consider the following example, in which an `ingredients_list` array object is created, and then an `ingredients_list_copy` object is created by copying that `ingredients_list` object.

```js
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]
```

Changing the value of the `list` property in `ingredients_list_copy` will also cause the `list` property to change in the `ingredients_list` source object.

```js
ingredients_list_copy[1].list = ["rice flour","water"]
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

Assigning a completely new value to the first element in `ingredients_list_copy` will not cause any change to the first element in the `ingredients_list` source object.

```js
ingredients_list_copy[0] = "rice noodles"
console.log(ingredients_list[0])
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## See also

- [Deep copy](/en-US/docs/Glossary/Deep_copy)
