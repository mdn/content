---
title: HTMLCollection.length
slug: Web/API/HTMLCollection/length
tags:
  - API
  - HTML DOM
  - HTMLCollection
  - Reference
  - Property
browser-compat: api.HTMLCollection.length
---
{{APIRef("DOM")}}

The **`HTMLCollection.length`** property returns the number of
items in a {{domxref("HTMLCollection")}}.

## Syntax

```js
numItems = htmlCollection.length
```

- `numItems` is an integer value representing the number of items in a
  `HTMLCollection`.

## Example

The `length` property is often useful in DOM programming. It's often used to
test the length of a list, to see if it exists at all. It's also commonly used as the
iterator in a `for` loop, as in this example.

```js
// All the elements with the class ".test" in the document
var items = document.getElementsByClassName("test");

// For each test item in the list,
// append the entire element as a string of HTML
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross is now all the HTML for the test elements
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
