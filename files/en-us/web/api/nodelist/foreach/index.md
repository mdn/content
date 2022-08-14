---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
page-type: web-api-instance-method
tags:
  - DOM
  - Iterable
  - Method
  - NodeList
  - Reference
  - Web
  - Polyfill
browser-compat: api.NodeList.forEach
---
{{APIRef("DOM")}}

The **`forEach()`** method of the {{domxref("NodeList")}}
interface calls the callback given in parameter once for each value pair in the list, in
insertion order.

## Syntax

```js
someNodeList.forEach(callback);
someNodeList.forEach(callback, thisArg);
```

### Parameters

- `callback`

  - : A function to execute on each element of `someNodeList`. It
    accepts 3 parameters:

    - `currentValue`
      - : The current element being processed in `someNodeList`.
    - `currentIndex` {{Optional_inline}}
      - : The index of the `currentValue` being processed in
        `someNodeList`.
    - `listObj` {{Optional_inline}}
      - : The `someNodeList` that `forEach()` is being
        applied to.

- `thisArg` {{Optional_inline}}
  - : Value to use as
    [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
    when executing `callback`.

### Return value

{{jsxref('undefined')}}.

## Example

```js
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

const list = node.childNodes;

list.forEach(
  function (currentValue, currentIndex, listObj) {
    console.log(`${currentValue}, ${currentIndex}, ${this}`);
  },
  'myThisArg'
);
```

The above code results in the following:

```
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `NodeList.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
