---
title: "StyleSheet: parentStyleSheet property"
short-title: parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
page-type: web-api-instance-property
browser-compat: api.StyleSheet.parentStyleSheet
---

{{APIRef("CSSOM")}}

The **`parentStyleSheet`** property of the
{{domxref("StyleSheet")}} interface returns the style sheet, if any, that is including
the given style sheet.

## Value

A {{domxref("StyleSheet")}} object.

## Examples

```js
// Find the top level stylesheet
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## Notes

This property returns `null` if the current stylesheet is a top-level
stylesheet or if stylesheet inclusion is not supported.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
