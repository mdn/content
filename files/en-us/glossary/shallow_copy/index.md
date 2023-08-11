---
title: Shallow copy
slug: Glossary/Shallow_copy
page-type: glossary-definition
---

{{GlossarySidebar}}

A **shallow copy** of an object is a copy whose properties share the same [references](/en-US/docs/Glossary/Object_reference) (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect. That behavior contrasts with the behavior of a [deep copy](/en-US/docs/Glossary/Deep_copy), in which the source and copy are completely independent.

For shallow copies, it's important to understand that selectively changing the value of a shared property of an existing element in an object is different from assigning a completely new value to an existing element.

For example, if in a shallow copy named `copy` of an array object, the value of the `copy[0]` element is `{"list":["butter","flour"]}`, and you do `copy[0].list = ["oil","flour"]`, then the corresponding element in the source object will change, too — because you selectively changed a property of an object shared by both the source object and the shallow copy.

However, if instead you do `copy[0] = {"list":["oil","flour"]}`, then the corresponding element in the source object **will not change** — because in that case, you're not just selectively changing a property of an existing array element that the shallow copy shares with the source object; instead you're actually assigning a completely new value to that `copy[0]` array element, just in the shallow copy.

In JavaScript, all standard built-in object-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), and [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)) create shallow copies rather than deep copies.

## Example

Consider the following example, in which an `ingredients_list` array object is created, and then an `ingredients_list_copy` object is created by copying that `ingredients_list` object.

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]
```

Changing the value of the `list` property in `ingredients_list_copy` will also cause the `list` property to change in the `ingredients_list` source object.

```js
ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

Assigning a completely new value to the first element in `ingredients_list_copy` will not cause any change to the first element in the `ingredients_list` source object.

```js
ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## See also

- [Deep copy](/en-US/docs/Glossary/Deep_copy)
