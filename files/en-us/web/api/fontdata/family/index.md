---
title: "FontData: family property"
short-title: family
slug: Web/API/FontData/family
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FontData.family
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`family`** read-only property of the {{domxref("FontData")}} interface returns the family of the font face.

This is the name used when referring to the font family from code, for example, in the {{cssxref("font-family")}} property or in places within the {{cssxref("@font-face")}} at-rule such as the `local()` function.

Examples include:

- Apple SD Gothic Neo
- Arial Black
- Avenir Next
- Katari
- YuMincho +36p Kana

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
