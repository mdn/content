---
title: NodeList.entries()
slug: Web/API/NodeList/entries
tags:
  - DOM
  - Iteration
  - Method
  - Node
  - NodeList
  - Polyfill
browser-compat: api.NodeList.entries
---
{{APIRef("DOM")}}

The **`NodeList.entries()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all key/value pairs
contained in this object. The values are {{domxref("Node")}} objects.

## Syntax

```js
list.entries();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// Using for..of
for(var entry of list.entries()) {
  console.log(entry);
}
```

results in:

    Array [ 0, <p> ]
    Array [ 1, #text "hey" ]
    Array [ 2, <span> ]

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `NodeList.prototype.entries` is available in [`core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
