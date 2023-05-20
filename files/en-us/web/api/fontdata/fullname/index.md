---
title: "FontData: fullName property"
short-title: fullName
slug: Web/API/FontData/fullName
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FontData.fullName
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`fullName`** read-only property of the {{domxref("FontData")}} interface returns the full name of the font face. This is usually a human-readable name used to identify the font, e.g., "Optima Bold".

Examples include:

- Apple SD Gothic Neo UltraLight
- Arial Black
- Avenir Next Heavy
- Katari Medium Italic
- YuMincho +36p Kana Extrabold

## Value

A string.

## Examples

The following snippet will query for all available fonts, and log metadata. This could be used, for example, to populate a font-picker control.

```js
async function logFontData() {
  try {
    const availableFonts = await window.queryLocalFonts();
    for (const fontData of availableFonts) {
      console.log(fontData.postscriptName);
      console.log(fontData.fullName);
      console.log(fontData.family);
      console.log(fontData.style);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [Use advanced typography with local fonts](https://developer.chrome.com/articles/local-fonts/)
- {{cssxref("@font-face")}}
