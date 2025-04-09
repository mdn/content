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

The following example verifies whether the browser supports the [Presentation API](/en-US/docs/Web/API/Presentation_API). If supported, it logs the presentation object to the console; otherwise, it displays an error message.

```js
// Check if the Presentation API is available in the current browser
if ("presentation" in navigator) {
  // The presentation property returns a reference to the Presentation object.
  const presentationObj = navigator.presentation;
  console.log("Presentation object:", presentationObj);
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
