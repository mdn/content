---
title: "HTMLCollection: namedItem() method"
short-title: namedItem()
slug: Web/API/HTMLCollection/namedItem
page-type: web-api-instance-method
browser-compat: api.HTMLCollection.namedItem
---

{{APIRef("DOM")}}

The **`namedItem()`** method of the {{domxref("HTMLCollection")}} interface returns
the first {{domxref("Element")}} in the collection whose `id` or `name` attribute match the specified name, or `null` if no element matches.

In JavaScript, instead of calling `collection.namedItem("value")`, you can also directly access the name on the collection, like `collection["value"]`, unless the name collides with one of the existing `HTMLCollection` properties.

## Syntax

```js-nolint
namedItem(key)
```

### Parameters

- `key`
  - : A string representing the value of the `id` or `name` attribute of the element we are looking for.

### Return value

The first {{domxref("Element")}} in the {{domxref("HTMLCollection")}} matching the `key`, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if there is none. Always returns `null` if `key` is the empty string.

## Example

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="first-name">Carina</span>
  <span name="last-name">Anand</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById("personal");

// Returns the HTMLSpanElement with the name "title" if no such element exists null is returned
const titleSpan = container.children.namedItem("title");

// The following variants return undefined instead of null if there's no element with a matching name or id
const firstNameSpan = container.children["first-name"];
const lastNameSpan = container.children["last-name"];

// Returns the span element with the id "degree"
const degreeSpan = container.children.namedItem("degree");

const output = document.createElement("div");
output.textContent = `Result: ${titleSpan.textContent} ${firstNameSpan.textContent} ${lastNameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement("afterend", output);
```

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
