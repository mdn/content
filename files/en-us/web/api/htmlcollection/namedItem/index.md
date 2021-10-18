---
title: HTMLCollection.namedItem()
slug: Web/API/HTMLCollection/namedItem
tags:
  - API
  - HTML DOM
  - Element Lists
  - HTMLCollection
  - Interface
  - Reference
browser-compat: api.HTMLCollection.namedItem
---
{{APIRef("HTML DOM")}}

The **`HTMLCollection.namedItem()`** method returns
the first {{domxref("Element")}} in the collection whose
`id` or `name` attribute match the specified name, or `null` if
no node matches.

In JavaScript, using the array bracket syntax with a {{jsxref("String")}}, like `collection["value"]` is
equivalent to `collection.namedItem("value")`.

## Syntax

```js
const item = collection.namedItem(key);
```

### Parameters

- `key` is a {{domxref("DOMString")}}

### Return value

- `item` is an {{domxref("Element")}}, or
  {{jsxref("null")}}.

## Example

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="firstname">John</span>
  <span name="lastname">Doe</span>
</div>
```

### JavaScript

```js
const container = document.getElementById('personal');
// Returns the HTMLSpanElement with the name "title" if no such element exists null is returned
const titleSpan = container.children.namedItem('title');
// The following variants return undefined instead of null if there's no element with a matching name or id
const firstnameSpan = container.children['firstname'];
const lastnameSpan = container.children.firstname;
```

## Browser compatibility

{{Compat}}
