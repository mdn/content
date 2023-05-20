---
title: "HTMLStyleElement: sheet property"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
page-type: web-api-instance-property
browser-compat: api.HTMLStyleElement.sheet
---

{{APIRef("HTML DOM")}}

The read-only **`sheet`** property of the {{domxref("HTMLStyleElement")}} interface
contains the stylesheet associated with that element.

An {{DOMxref("StyleSheet")}} is always associated with a {{domxref("HTMLStyleElement")}}, unless its `type` attribute is not `text/css`.

## Value

A {{DOMxRef("StyleSheet")}} object, or `null` if none is associated with the element.

## Examples

```html
<html>
  <header>
    <style media="print" />
    …
  </header>
</html>
```

The `sheet` property of the associated `HTMLStyleElement` object will return the {{domxref("StyleSheet")}} object describing it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
