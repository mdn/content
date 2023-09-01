---
title: "CSSImportRule: stylesheet property"
short-title: stylesheet
slug: Web/API/CSSImportRule/stylesheet
page-type: web-api-instance-property
browser-compat: api.CSSImportRule.styleSheet
---

{{APIRef("CSSOM")}}

The read-only **`styleSheet`** property of the
{{domxref("CSSImportRule")}} interface returns the CSS Stylesheet specified by the
{{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule). This will be
in the form of a {{domxref("CSSStyleSheet")}} object.

An {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule) always has
an associated stylesheet.

## Value

A {{domxref("CSSStyleSheet")}}.

## Examples

The following stylesheet includes a single {{cssxref("@import")}} rule. Therefore the
first item in the list of CSS rules will be a `CSSImportRule`. The
`styleSheet` property returns the imported stylesheet.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); //returns a CSSStyleSheet object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
