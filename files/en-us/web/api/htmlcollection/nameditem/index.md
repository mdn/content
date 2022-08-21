---
title: HTMLCollection.namedItem()
slug: Web/API/HTMLCollection/namedItem
page-type: web-api-instance-method
tags:
  - API
  - Element Lists
  - HTMLCollection
  - Method
  - Reference
browser-compat: api.HTMLCollection.namedItem
---
{{APIRef("DOM")}}

The **`namedItem()`** method of the {{domxref("HTMLCollection")}} interface returns
the first {{domxref("Element")}} in the collection whose `id` or `name` attribute match the specified name, or `null` if no element matches.

In JavaScript, using the array bracket syntax with a {{jsxref("String")}}, like `collection["value"]` is equivalent to `collection.namedItem("value")`.

## Syntax

```js
const item = collection.namedItem(key);
```

### Parameters

- `key` is a string representing the value of the `id` or `name` attribute of the element we are looking for.

### Return value

- `item` is the first {{domxref("Element")}} in the {{domxref("HTMLCollection")}} matching the _key_, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), if there are none.

## Example

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="firstname">John</span>
  <span name="lastname">Doe</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById('personal');

// Returns the HTMLSpanElement with the name "title" if no such element exists null is returned
const titleSpan = container.children.namedItem('title');

// The following variants return undefined instead of null if there's no element with a matching name or id
const firstnameSpan = container.children['firstname'];
const lastnameSpan = container.children.lastname;

// Returns the span element with the id "degree"
const degreeSpan = container.children.namedItem('degree');

const output = document.createElement('div');
output.textContent = `Result: ${titleSpan.textContent} ${firstnameSpan.textContent} ${lastnameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement('afterend', output);
```

{{EmbedLiveSample("Example")}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}
