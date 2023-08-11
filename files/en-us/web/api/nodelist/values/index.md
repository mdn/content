---
title: "NodeList: values() method"
short-title: values()
slug: Web/API/NodeList/values
page-type: web-api-instance-method
browser-compat: api.NodeList.values
---

{{APIRef("DOM")}}

The **`NodeList.values()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all values contained
in this object. The values are {{domxref("Node")}} objects.

## Syntax

```js-nolint
values()
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
for (const value of list.values()) {
  console.log(value);
}
```

The result is:

```plain
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
