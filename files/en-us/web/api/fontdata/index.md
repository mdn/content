---
title: FontData
slug: Web/API/FontData
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FontData
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

The **`FontData`** interface of the {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} represents a single local font face.

## Instance properties

- {{domxref('FontData.family')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the family of the font face.
- {{domxref('FontData.fullName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the full name of the font face.
- {{domxref('FontData.postscriptName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the PostScript name of the font face.
- {{domxref('FontData.style')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the style of the font face.

## Instance methods

- {{domxref('FontData.blob()')}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("Blob")}} containing the raw bytes of the underlying font file.

## Examples

For a working live demo, see [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Font enumeration

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

### Accessing low-level data

The {{domxref("FontData.blob", "blob()")}} method provides access to low-level [SFNT](https://en.wikipedia.org/wiki/SFNT) data — this is a font file format that can contain other font formats, such as PostScript, TrueType, OpenType, or Web Open Font Format (WOFF).

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
