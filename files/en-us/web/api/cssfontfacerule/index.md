---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - CSSFontFaceRule
  - Interface
  - Reference
browser-compat: api.CSSFontFaceRule
---
{{APIRef("CSSOM")}}

The **`CSSFontFaceRule`** interface represents an {{cssxref("@font-face")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontFaceRule.style")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CSSStyleDeclaration")}}.

## Methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

This example uses the CSS found as an example on the {{cssxref("@font-face")}} page. The first {{domxref("CSSRule")}} returned will be a `CSSFontFaceRule`.

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
console.log(myRules[0]); //a CSSFontFaceRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
