---
title: CSSFontFaceRule.style
slug: Web/API/CSSFontFaceRule/style
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - CSSFontFaceRule
  - Property
  - Reference
  - Read-only
browser-compat: api.CSSFontFaceRule.style
---
{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("CSSFontFaceRule")}} interface returns the style information from the {{cssxref("@font-face")}} [at-rule](/en-US/docs/Web/CSS/At-rule). This will be in the form of a {{domxref("CSSStyleDeclaration")}} object.

## Value

A {{domxref("CSSStyleDeclaration")}}.

## Examples

This example uses the CSS found as an example on the {{cssxref("@font-face")}} page. The first {{domxref("CSSRule")}} returned will be a `CSSFontFaceRule`. The `style` property returns a {{domxref("CSSStyleDeclaration")}} with the properties `fontFamily`, `fontWeight`, and `src` populated with the information from the rule.

```css
@font-face {
    font-family: MyHelvetica;
    src: local("Helvetica Neue Bold"),
    local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
    font-weight: bold;
  }
```

```js
let myRules = document.styleSheets[0].cssRules;
  console.log(myRules[0].style); //a CSSStyleDeclaration
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
