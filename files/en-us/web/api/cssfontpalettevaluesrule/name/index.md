---
title: "CSSFontPaletteValuesRule: name property"
short-title: name
slug: Web/API/CSSFontPaletteValuesRule/name
page-type: web-api-instance-property
browser-compat: api.CSSFontPaletteValuesRule.name
---

{{APIRef("CSSOM")}}

The read-only **`name`** property of the {{domxref("CSSFontPaletteValuesRule")}} interface represents the name identifying the associated {{CSSxRef("@font-palette-values")}} at-rule. A valid name always starts with two dashes, such as `--Alternate`.

## Value

A string beginning with two dashes.

## Examples

## Read the at-rule's name

This example first defines an {{cssxref("@import")}} and an {{cssxref("@font-palette-values")}} at-rule. Then it reads the {{cssxref("@font-palette-values")}} rule and displays its name. As these rules live in the last stylesheet added to the document, the palette will be the second {{domxref("CSSRule")}} returned by the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`). So, `rules[1]` returns a {{domxref("CSSFontPaletteValuesRule")}} object, from which we can access `name`.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule's name:</pre>
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
log.textContent += ` ${fontPaletteValuesRule.name}`;
```

#### Result

{{EmbedLiveSample("Read the at-rule's name", "100", "40")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values")}} at-rule
