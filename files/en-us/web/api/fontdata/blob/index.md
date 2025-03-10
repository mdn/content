---
title: "FontData: blob() method"
short-title: blob()
slug: Web/API/FontData/blob
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FontData.blob
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`blob()`** method of the {{domxref("FontData")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("Blob")}} containing the raw bytes of the underlying font file.

## Syntax

```js-nolint
blob()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("Blob")}} containing the raw bytes of the underlying font file.

## Examples

The `blob()` method provides access to low-level [SFNT](https://en.wikipedia.org/wiki/SFNT) data — this is a font file format that can contain other font formats, such as PostScript, TrueType, OpenType, or Web Open Font Format (WOFF).

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` returns a Blob containing valid and complete
      // SFNT-wrapped font data.
      const sfnt = await fontData.blob();
      // Slice out only the bytes we need: the first 4 bytes are the SFNT
      // version info.
      // Spec: https://learn.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
      const sfntVersion = await sfnt.slice(0, 4).text();

      let outlineFormat = "UNKNOWN";
      switch (sfntVersion) {
        case "\x00\x01\x00\x00":
        case "true":
        case "typ1":
          outlineFormat = "truetype";
          break;
        case "OTTO":
          outlineFormat = "cff";
          break;
      }
      console.log("Outline format:", outlineFormat);
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
