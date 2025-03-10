---
title: "Window: queryLocalFonts() method"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Window.queryLocalFonts
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`window.queryLocalFonts()`** method returns a {{jsxref("Promise")}} that fulfills with an array of {{domxref("FontData")}} objects representing the font faces available locally.

To use this method, the user must grant permission to access `local-fonts` (permission status can be queried via the {{domxref("Permissions API", "", "", "nocode")}}). In addition, this feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

## Syntax

```js-nolint
queryLocalFonts(options)
```

### Parameters

- `options` {{optional_inline}}
  - : Contains optional configuration parameters. Currently only one property is defined:
    - `postscriptNames` {{optional_inline}}
      - : An array of font PostScript names. If this is specified, only fonts with PostScript names matching those in the array will be included in the results; if not, all fonts will be included in the results.

### Return value

A {{jsxref("Promise")}} that fulfills with an array of {{domxref("FontData")}} objects representing the font faces available locally.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : The user chose to deny permission to use this feature when presented with the browser's permission prompt after the method was first invoked.
- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), or it was not called via a user interaction such as a button press, or current {{glossary("origin")}} is an opaque origin.

## Examples

For a working live demo, see [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Font enumeration

The following snippet will query for all available fonts and log metadata. This could be used, for example, to populate a font picker control.

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

### Limiting returned results

To limit the returned font data to only a specific list of font faces, use the `postscriptNames` option.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
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

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- [Use advanced typography with local fonts](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
