---
title: "HTMLLinkElement: sheet property"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.sheet
---

{{APIRef("HTML DOM")}}

The read-only **`sheet`** property of the {{domxref("HTMLLinkElement")}} interface
contains the stylesheet associated with that element.

A stylesheet is associated to an `HTMLLinkElement` if `rel="stylesheet"` is used with `<link>`.

## Value

A {{DOMxRef("StyleSheet")}} object, or `null` if none is associated with the element.

## Examples

```html
<html>
  <header>
    <link rel="stylesheet" href="styles.css" />
    …
  </header>
</html>
```

The `sheet` property of the `HTMLLinkElement` object will return the {{domxref("StyleSheet")}} object describing `styles.css`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
