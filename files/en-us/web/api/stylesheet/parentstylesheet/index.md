---
title: StyleSheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
tags:
  - API
  - CSSOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.StyleSheet.parentStyleSheet
---
{{APIRef("CSSOM")}}

The **`parentStyleSheet`** property of the
{{domxref("StyleSheet")}} interface returns the style sheet, if any, that is including
the given style sheet.

## Syntax

```js
objRef = stylesheet.parentStyleSheet
```

## Example

```js
// Find the top level stylesheet
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
} else {
  sheet = stylesheet;
}
```

## Notes

This property returns `null` if the current stylesheet is a top-level
stylesheet or if stylesheet inclusion is not supported.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
