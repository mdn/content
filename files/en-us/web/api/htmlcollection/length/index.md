---
title: "HTMLCollection: length property"
short-title: length
slug: Web/API/HTMLCollection/length
page-type: web-api-instance-property
browser-compat: api.HTMLCollection.length
---

{{APIRef("DOM")}}

The **`HTMLCollection.length`** property returns the number of
items in a {{domxref("HTMLCollection")}}.

## Value

An integer value representing the number of items in a `HTMLCollection`.

## Examples

The `length` property is often useful in DOM programming. It's often used to
test the length of a list, to see if it exists at all. It's also commonly used as the
iterator in a `for` loop, as in this example.

```js
// All the elements with the class ".test" in the document
const items = document.getElementsByClassName("test");

// For each test item in the list,
// append the entire element as a string of HTML
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross is now all the HTML for the test elements
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
