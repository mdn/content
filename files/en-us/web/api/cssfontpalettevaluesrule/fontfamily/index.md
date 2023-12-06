---
title: "CSSFontPaletteValuesRule: fontFamily property"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
page-type: web-api-instance-property
browser-compat: api.CSSFontPaletteValuesRule.fontFamily
---

{{APIRef("CSSOM")}}

The read-only **`fontFamily`** property of the {{domxref("CSSFontPaletteValuesRule")}} interface lists the font families the rule can be applied to. The font families must be _named_ families; _generic_ families like `courier` are not valid.

## Value

A string containing a space-separated list of the font families on which the rule can be applied

## Examples

### Read the associated font family

This example first defines an {{cssxref("@import")}} and an {{cssxref("@font-palette-values")}} at-rule. Then it reads the {{cssxref("@font-palette-values")}} rule and displays its name. As these rules live in the last stylesheet added to the document, the palette will be the second {{domxref("CSSRule")}} returned by the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`). So, `rules[1]` returns a {{domxref("CSSFontPaletteValuesRule")}} object, from which we can access `fontFamily`.

#### HTML

```html
<pre id="log">
The @font-palette-values at-rule's applies to the font families:</pre
>
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
const fontPaletteValuesRule = rules[1]; // a CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Result

{{EmbedLiveSample("Read the associated font family", "100", "40")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values")}} at-rule
- {{cssxref("@font-palette-values/font-family", "font-family")}} descriptor
