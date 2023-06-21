---
title: Deep copy
slug: Glossary/Deep_copy
page-type: glossary-definition
---

{{GlossarySidebar}}

A **deep copy** of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect. That behavior contrasts with the behavior of a [shallow copy](/en-US/docs/Glossary/Shallow_copy), in which changes to either the source or the copy may also cause the other object to change too (because the two objects share the same references).

In JavaScript, standard built-in object-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), and [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)) do not create deep copies (instead, they create shallow copies).

One way to make a deep copy of a JavaScript object, if it can be [serialized](/en-US/docs/Glossary/Serialization), is to use {{jsxref("JSON.stringify()")}} to convert the object to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string back into a (completely new) JavaScript object:

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

As can be seen from the code above, because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.

However, while the object in the code above is simple enough to be [serializable](/en-US/docs/Glossary/Serialization), many JavaScript objects are not serializable at all — for example, [functions](/en-US/docs/Web/JavaScript/Guide/Functions) (with closures), [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), objects that represent HTML elements in the [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API), recursive data, and many other cases. Calling `JSON.stringify()` to serialize the objects in those cases will fail. So there's no way to make deep copies of such objects.

For objects that _are_ serializable, you can alternatively use the [`structuredClone()`](/en-US/docs/Web/API/structuredClone) method to create deep copies. `structuredClone()` has the advantage of allowing [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) in the source to be _transferred_ to the new copy, rather than just cloned. But note that `structuredClone()` isn't a feature of the JavaScript language itself — instead it's a feature of browsers and any other JavaScript runtimes that implement a global object like [`window`](/en-US/docs/Web/API/Window). And calling `structuredClone()` to clone a non-serializable object will fail in the same way that calling `JSON.stringify()` to serialize it will fail.

## See also

- [Shallow copy](/en-US/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/en-US/docs/Web/API/structuredClone)
