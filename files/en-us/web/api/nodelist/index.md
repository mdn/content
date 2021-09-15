---
title: NodeList
slug: Web/API/NodeList
tags:
  - API
  - DOM
  - Interface
  - NodeList
browser-compat: api.NodeList
---
{{APIRef("DOM")}}

**`NodeList`** objects are collections of [nodes](/en-US/docs/Web/API/Node), usually returned by properties such as {{domxref("Node.childNodes")}} and methods such as {{domxref("document.querySelectorAll()")}}.

> **Note:** Although `NodeList` is not an `Array`, it is possible to iterate over it with `forEach()`. It can also be converted to a real `Array` using {{jsxref("Array.from()")}}.
>
> However, some older browsers have not implemented `NodeList.forEach()` nor `Array.from()`. This can be circumvented by using {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} — see this document's [Example](#example).

## Live vs. Static NodeLists

Although they are both considered `NodeList`s, there are 2 varieties of NodeList: _live_ and _static_.

### Live NodeLists

In some cases, the `NodeList` is _live_, which means that changes in the DOM automatically update the collection.

For example, {{domxref("Node.childNodes")}} is live:

```js
const parent = document.getElementById('parent');
let child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // outputs "3"
```

### Static NodeLists

In other cases, the `NodeList` is _static,_ where any changes in the DOM does not affect the content of the collection. The ubiquitous {{domxref("document.querySelectorAll()")}} method returns a _static_ `NodeList`.

It's good to keep this distinction in mind when you choose how to iterate over the items in the `NodeList`, and whether you should cache the list's `length`.

## Properties

- {{domxref("NodeList.length")}}
  - : The number of nodes in the `NodeList`.

## Methods

- {{domxref("NodeList.item()")}}

  - : Returns an item in the list by its index, or `null` if the index is out-of-bounds.

    An alternative to accessing `nodeList[i]` (which instead returns  `undefined` when `i` is out-of-bounds). This is mostly useful for non-JavaScript DOM implementations.

- {{domxref("NodeList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}}, allowing code to go through all key/value pairs contained in the collection. (In this case, the keys are numbers starting from `0` and the values are nodes.)
- {{domxref("NodeList.forEach()")}}
  - : Executes a provided function once per `NodeList` element, passing the element as an argument to the function.
- {{domxref("NodeList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}}, allowing code to go through all the keys of the key/value pairs contained in the collection. (In this case, the keys are numbers starting from `0`.)
- {{domxref("NodeList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing code to go through all values (nodes) of the key/value pairs contained in the collection.

## Example

It's possible to loop over the items in a `NodeList` using a [for](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Don't use [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in "JavaScript/ Reference/Statements/for...in") to enumerate the items in `NodeList`s**, since they will _also_ enumerate its `length` and `item` properties and cause errors if your script assumes it only has to deal with {{domxref("element")}} objects. Also, `for..in` is not guaranteed to visit the properties in any particular order.

[`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops **will** loop over `NodeList` objects correctly:

```js
const list = document.querySelectorAll('input[type=checkbox]');
for (let checkbox of list) {
  checkbox.checked = true;
}
```

Recent browsers also support iterator methods ({{domxref("NodeList.forEach()", "forEach()")}}) as well as {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, and {{domxref("NodeList.keys()", "keys()")}}.

There is also an Internet Explorer-compatible way to use {{jsxref("Array.forEach()", "Array.prototype.forEach")}} for iteration:

```js
const list = document.querySelectorAll('input[type=checkbox]');
Array.prototype.forEach.call(list, function (checkbox) {
  checkbox.checked = true;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
