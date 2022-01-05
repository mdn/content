---
title: NodeList.keys()
slug: Web/API/NodeList/keys
tags:
  - DOM
  - Iterator
  - Method
  - NodeList
  - Reference
  - Web
  - Polyfill
browser-compat: api.NodeList.keys
---
{{APIRef("DOM")}}

The **`NodeList.keys()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all keys contained
in this object. The keys are `unsigned integer`.

## Syntax

```js
nodeList.keys();
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
for(var key of list.keys()) {
   console.log(key);
}
```

The result is:

    0
    1
    2

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `NodeList.prototype.keys` is available in [`core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
