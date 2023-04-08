---
title: "CSSFontPaletteValuesRule: basePalette property"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
page-type: web-api-instance-property
browser-compat: api.CSSFontPaletteValuesRule.basePalette
---

{{APIRef("CSSOM")}}

The read-only **`basePalette`** property of the {{domxref("CSSFontPaletteValuesRule")}} interface indicates the base palette associated with the rule.

## Value

A string that can be one of the following color values:

- `light`
  - : Matches the first palette in the font file that is marked as applicable to a light background, that is, _close to white_. If there is no palette in the font or if no palette has the required metadata, the value is equivalent to `"0"`, that is, the first palette in the font.
- `dark`
  - : Matches the first palette in the font file that is marked as applicable to a dark background, that is, _close to black_. If there is no palette in the font or if no palette has the required metadata, the value is equivalent to `"0"`, that is, the first palette in the font.
- a string containing an index (like `"0"`, `"1"`, …)
  - : Matches the palette corresponding to the index. The first palette corresponds to `"0"`.

## Examples

### Read the associated base palette

This example adds rules in an extra stylesheet added to the document, returned as the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`). So, `rules[2]` returns the first {{domxref("CSSFontPaletteValuesRule")}} object, and `rules[3]` the second one.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
<pre id="log"></pre>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

h2 {
  font-family: "Nabla";
}

@font-palette-values --two {
  font-family: "Nabla";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Nabla";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const twoRule = rules[2]; // A CSSFontPaletteValuesRule interface
const fiveRule = rules[3]; // A CSSFontPaletteValuesRule interface

log.textContent = `The ${twoRule.name} @font-palette-values base palette is: ${twoRule.basePalette}\n`;
log.textContent += `The ${fiveRule.name} @font-palette-values base palette is: ${fiveRule.basePalette}`;
```

#### Result

{{EmbedLiveSample("Read the associated base palette", "100", "255")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values")}} at-rule
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} descriptor
