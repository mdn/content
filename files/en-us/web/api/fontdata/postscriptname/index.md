---
title: "FontData: postscriptName property"
short-title: postscriptName
slug: Web/API/FontData/postscriptName
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FontData.postscriptName
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`postscriptName`** read-only property of the {{domxref("FontData")}} interface returns the PostScript name of the font face.

This is the name used to uniquely identify the PostScript font, and is generally an unbroken sequence of characters that includes the font's name and style.

Examples include:

- AppleSDGothicNeo-UltraLight
- Arial-Black
- AvenirNext-Heavy
- Katari-MediumItalic
- YuMin_36pKn-Extrabold

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

## See also

- [Use advanced typography with local fonts](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
