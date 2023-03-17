---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
page-type: web-api-interface
browser-compat: api.CSSFontPaletteValuesRule
---

{{APIRef("CSSOM")}}

The **`CSSFontPaletteValuesRule`** interface represents an {{cssxref("@font-palette-values")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontPaletteValuesRule.name")}} {{ReadOnlyInline}}
  - : A string with the name of the font palette.
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}} {{ReadOnlyInline}}
  - : A string indicating which font families the rule has to be applied to.
- {{domxref("CSSFontPaletteValuesRule.basePalette")}} {{ReadOnlyInline}}
  - : A string indicating the base palette associated with the rule.
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}} {{ReadOnlyInline}}
  - : A string indicating which colors of the base palette are overwritten, and by what colors.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

This example uses the CSS found as an example on the {{cssxref("@font-palette-values")}} page. The first {{domxref("CSSRule")}} returned will be a `CSSFontFaceRule`.

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
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

## See also

- {{cssxref("@font-palette-values")}}
