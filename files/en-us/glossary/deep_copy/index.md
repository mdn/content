---
title: Deep copy
slug: Glossary/Deep_copy
page-type: glossary-definition
sidebar: glossarysidebar
---

A **deep copy** of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a {{Glossary("shallow copy")}}, in which changes to nested properties in the source or the copy may cause the other object to change too.

Deep copying is usually implemented recursively as such:

1. A new object of the same type is created. The prototype chain may or may not be copied (and usually it is not), but for example deep copying an {{jsxref("Array")}} should result in an {{jsxref("Array")}} and not something else.
2. For each own property of the original object, a property with the same key and descriptors is defined on the new object.
3. Each new property's value is set to a deep copy of the original property's value. If the property's value is a primitive, no copying is done.
4. Any data that's not exposed as properties, such as {{jsxref("Map")}}, is deeply copied, provided that the implementation recognizes the object type and knows how to retrieve and set the data.
5. Usually there's some support for circular references.

Note that because JavaScript has no built-in mechanism that performs a true deep copy, library implementations often diverge on technical details, such as:

- Are non-enumerable or symbol properties copied
- Are accessor properties copied as accessors
- Are prototype properties copied
- What data structures support copying non-property data

The copy of an object whose properties all have primitive values fits the definition of both a deep copy and a {{Glossary("shallow copy")}}. It is somewhat useless to talk about the depth of such a copy, though, because it has no nested properties and we usually talk about deep copying in the context of mutating nested properties.

In JavaScript, standard built-in object-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), and [`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) do not create deep copies (instead, they create shallow copies).

One way to make a deep copy of a JavaScript object, if it can be {{Glossary("serialization", "serialized")}}, is to use {{jsxref("JSON.stringify()")}} to convert the object to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string back into a (completely new) JavaScript object:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.

```js
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

However, while the object in the code above is simple enough to be {{Glossary("serialization", "serializable")}}, many JavaScript objects are not serializable at all — for example, [functions](/en-US/docs/Web/JavaScript/Guide/Functions) (with closures), [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), objects that represent HTML elements in the [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API), recursive data, and many other cases. Calling `JSON.stringify()` to serialize the objects in those cases will fail. Deep-copying these objects require other APIs or libraries.

The web API {{DOMxRef("Window.structuredClone", "structuredClone()")}} also creates deep copies and has the advantage of allowing [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) in the source to be _transferred_ to the new copy, rather than just cloned. It also handles more data types, such as `Error`. But note that `structuredClone()` isn't a feature of the JavaScript language itself — instead it's a feature of browsers and other JavaScript hosts that implement web APIs. And calling `structuredClone()` to clone a non-serializable object will fail in the same way that calling `JSON.stringify()` to serialize it will fail.

## See also

- Related glossary terms:
  - {{Glossary("Deep equality")}}
  - {{Glossary("Shallow copy")}}
- {{DOMxRef("Window.structuredClone()")}}
- {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
