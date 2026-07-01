---
title: "Document: hidden property"
short-title: hidden
slug: Web/API/Document/hidden
page-type: web-api-instance-property
browser-compat: api.Document.hidden
---

{{ ApiRef("DOM") }}

The **`Document.hidden`** read-only property returns a Boolean
value indicating if the page is considered hidden or not.

The {{domxref("Document.visibilityState")}} property provides an alternative way to determine whether the page is hidden.

## Value

A Boolean value, `true` if the page is hidden, and `false` otherwise.

## Examples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // Modify behavior…
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.visibilityState")}}
