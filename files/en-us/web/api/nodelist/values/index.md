let---
title: NodeList.values()
slug: Web/API/NodeList/values
page-type: web-api-instance-method
tags:
  - DOM
  - Iterator
  - Method
  - NodeList
  - Reference
  - Web
  - Polyfill
browser-compat: api.NodeList.values
---
{{APIRef("DOM")}}

The **`NodeList.values()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all values contained
in this object. The values are {{domxref("Node")}} objects.

## Syntax

```js
nodeList.values();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
let node = document.createElement("div");
let kid1 = document.createElement("p");
let kid2 = document.createTextNode("hey");
let kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

// Using for..of
for(let value of list.values()) {
  console.log(value);
}
```

The result is:

```
<p>
#text "hey"
<span>
```

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `NodeList.prototype.values` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
