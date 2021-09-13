---
title: StyleSheet.disabled
slug: Web/API/StyleSheet/disabled
tags:
  - API
  - CSS
  - CSSOM
  - Disabled
  - Property
  - Reference
browser-compat: api.StyleSheet.disabled
---
{{APIRef("CSSOM")}}

The **`disabled`** property of the
{{domxref("StyleSheet")}} interface determines whether the style sheet is prevented from
applying to the document.

A style sheet may be disabled by manually setting this property to `true` or
if it's an inactive [alternative
style sheet](/en-US/docs/Web/CSS/Alternative_style_sheets). Note that `disabled == false` does not guarantee the style
sheet is applied (it could be removed from the document, for instance).

## Syntax

```js
bool = stylesheet.disabled
```

## Example

```js
// If the stylesheet is disabled...
if (stylesheet.disabled) {
  // ... apply styles in-line.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
