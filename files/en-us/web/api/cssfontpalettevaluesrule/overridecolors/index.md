---
title: "CSSFontPaletteValuesRule: overrideColors property"
short-title: overrideColors
slug: Web/API/CSSFontPaletteValuesRule/overrideColors
page-type: web-api-instance-property
browser-compat: api.CSSFontPaletteValuesRule.overrideColors
---

{{APIRef("CSSOM")}}

The read-only **`overrideColors`** property of the {{domxref("CSSFontPaletteValuesRule")}} interface is a string containing a list of color index and color pair that are to be used instead. It is specified in the same format as the corresponding {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor.

## Value

A string containing a comma-separated list of color index and color pair

## Examples

### Read the overridden color

This example first defines a few at-rules, among them two {{cssxref("@font-palette-values")}}. As these rules live in the last stylesheet added to the document, the palette will be the second {{domxref("CSSRule")}} returned by the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`).

#### HTML

```html
<div class="hat">
  <div class="emoji colored-hat">🎩</div>
</div>
<button>Toggle color</button>
<pre id="log"></pre>
```

#### CSS

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}

@font-palette-values --blue {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(1, 28, 193),
    4 rgb(60, 124, 230);
}

@font-palette-values --green {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(28, 193, 1),
    4 rgb(34, 230, 1);
}

.colored-hat {
  font-palette: --blue;
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const button = document.querySelector("button");
const hat = document.querySelector(".colored-hat");
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const greenFontPaletteValuesRule = rules[3];
const blueFontPaletteValuesRule = rules[2];
log.textContent = `Overridden colors: ${blueFontPaletteValuesRule.overrideColors}`;

button.addEventListener("click", (event) => {
  if (hat.style.fontPalette !== "--green") {
    hat.style.fontPalette = "--green";
    log.textContent = `Overridden colors: ${greenFontPaletteValuesRule.overrideColors}`;
  } else {
    hat.style.fontPalette = "--blue";
    log.textContent = `Overridden colors: ${blueFontPaletteValuesRule.overrideColors}`;
  }
});
```

#### Result

{{EmbedLiveSample("Read the overridden colors", "100", "125")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-palette-values")}} at-rule
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
