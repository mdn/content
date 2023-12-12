---
title: "FontData: style property"
short-title: style
slug: Web/API/FontData/style
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FontData.style
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`style`** read-only property of the {{domxref("FontData")}} interface returns the style of the font face.

This is the value used to select the style of the font you want to use, for example inside the {{cssxref("font-style")}} property.

Examples include:

- UltraLight
- Regular
- Heavy
- Medium Italic
- Extrabold

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
