---
title: "Navigator: presentation property"
short-title: presentation
slug: Web/API/Navigator/presentation
page-type: web-api-instance-property
browser-compat: api.Navigator.presentation
---

{{securecontext_header}}{{APIRef("Presentation API")}}

The `presentation` read-only property of {{DOMxRef("Navigator")}} serves as the entry
point for the [Presentation API](/en-US/docs/Web/API/Presentation_API) and
returns a reference to {{DOMxRef("Presentation")}} object.

## Value

A reference to {{DOMxRef("Presentation")}} object.

## Examples

Currently, the `navigator.presentation` property is most useful for feature checking, and, for the receiving user agent, to access the {{domxref("PresentationReceiver")}}.

```js
// Check if the Presentation API is available in the current browser
if ("presentation" in navigator) {
  footer.textContent = navigator.presentation.receiver
    ? "Receiving presentation"
    : "(idle)";
} else {
  console.error("Presentation API is not available in this browser.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Presentation API](/en-US/docs/Web/API/Presentation_API)
- {{DOMxRef("Presentation")}}
