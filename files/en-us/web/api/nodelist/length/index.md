---
title: NodeList.length
slug: Web/API/NodeList/length
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Gecko
  - NeedsSpecTable
  - NodeList
  - Property
  - Reference
browser-compat: api.NodeList.length
---
{{APIRef("DOM")}}

The **`NodeList.length`** property returns the number of items
in a {{domxref("NodeList")}}.

## Value

An integer value representing the number of items in a `NodeList`.

## Examples

The `length` property is often useful in DOM programming. It's often used to
test the length of a list, to see if it exists at all. It's also commonly used as the
iterator in a `for` loop, as in this example.

```js
// All the paragraphs in the document
const items = document.getElementsByTagName("p");

// For each item in the list,
// append the entire element as a string of HTML
let gross = "";
for (const item of items) {
  gross += item.innerHTML;
}

// gross is now all the HTML for the paragraphs
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
