---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
page-type: web-api-interface
browser-compat: api.CSSFontPaletteValuesRule
---

{{APIRef("CSSOM")}}

The **`CSSFontPaletteValuesRule`** interface represents an {{cssxref("@font-palette-values")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSFontPaletteValuesRule.name")}} {{ReadOnlyInline}}
  - : A string with the name of the font palette.
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}} {{ReadOnlyInline}}
  - : A string indicating the font families on which the rule has to be applied.
- {{domxref("CSSFontPaletteValuesRule.basePalette")}} {{ReadOnlyInline}}
  - : A string indicating the base palette associated with the rule.
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}} {{ReadOnlyInline}}
  - : A string indicating the colors of the base palette that are overwritten and the new colors.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

### Read associated font family using CSSOM

This example first defines an {{cssxref("@import")}} and an {{cssxref("@font-palette-values")}} at-rule. Then it reads the {{cssxref("@font-palette-values")}} rule and displays its name. As these rules live in the last stylesheet added to the document, the palette will be the second {{domxref("CSSRule")}} returned by the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`). So, `rules[1]` returns a `CSSFontPaletteValuesRule` object, from which we can access `fontFamily`.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule font families:</pre>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);

@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}

.alternate {
  font-palette: --Alternate;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const fontPaletteValuesRule = rules[1]; // aA CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Result

{{EmbedLiveSample("Read associated font family using CSSOM", "100", "40")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values")}}
