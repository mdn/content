---
title: "NodeList: entries() method"
short-title: entries()
slug: Web/API/NodeList/entries
page-type: web-api-instance-method
browser-compat: api.NodeList.entries
---

{{APIRef("DOM")}}

The **`NodeList.entries()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all key/value pairs
contained in this object. The values are {{domxref("Node")}} objects.

## Syntax

```js-nolint
entries()
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

const list = node.childNodes;

// Using for...of
for (const entry of list.entries()) {
  console.log(entry);
}
```

results in:

```plain
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `NodeList.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
