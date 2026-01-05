---
title: "HTMLScriptElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLScriptElement")}} interface represents a hint to the browser indicating how it should prioritize fetching an external script relative to other external scripts.
It reflects the `<script>` element's [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Elements/script#fetchpriority) content attribute.

## Value

A string. For the permitted values, see the HTML [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute.

## Examples

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Output: "high"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLLinkElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
