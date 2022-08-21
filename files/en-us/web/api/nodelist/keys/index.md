---
title: NodeList.keys()
slug: Web/API/NodeList/keys
page-type: web-api-instance-method
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
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

// Using for..of
for (const key of list.keys()) {
   console.log(key);
}
```

The result is:

```
0
1
2
```

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `NodeList.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
