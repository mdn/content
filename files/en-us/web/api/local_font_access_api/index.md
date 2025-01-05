---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Window.queryLocalFonts
spec-urls: https://wicg.github.io/local-font-access/
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

The **Local Font Access API** provides a mechanism to access the user's locally installed font data — this includes higher-level details such as names, styles, and families, as well as the raw bytes of the underlying font files.

## Concepts and usage

[Web fonts](/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts) were revolutionary in enabling typography on the web by allowing web designers to provide custom fonts to use on a web document. Specified via the {{cssxref("@font-face")}} at-rule, a web font can be loaded from a URL provided in the `url()` function.

`@font-face` has several other useful features available. In particular, you can also specify the font's full or Postscript name inside the `local()` function to tell the browser to use a local copy if the user has the font installed on their computer. This is not without its problems — `local()` has become notorious as a [fingerprinting vector](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector).

In addition, high-end design tools have historically been difficult to deliver on the web, due to challenges in accurate font enumeration and accessing low-level font data (for example, to apply filters and transformations). Current apps often rely on workarounds such as asking users to upload their fonts to a server where they are processed to get raw byte data, or installing a separate local program to provide additional capabilities.

The Local Font Access API has been created to address these problems.

The {{domxref("Window.queryLocalFonts()")}} method provides access to an array of locally-installed fonts, each represented by a {{domxref("FontData")}} object instance. {{domxref("FontData")}} has several properties providing access to names, styles, and families, and it also has a {{domxref("FontData.blob", "blob()")}} method providing access to a {{domxref("Blob")}} containing the raw bytes of the underlying font file.

In terms of privacy and security:

- The Local Font Access API is designed to only provide access to the data required to solve the above problems. There is also no requirement for browsers to provide the full list of available local fonts, nor to provide the data in the same order as it appears on disk.
- When {{domxref("Window.queryLocalFonts()")}} is invoked, the user is asked for permission to access their local fonts. The status of this permission can be queried via the [Permissions API](/en-US/docs/Web/API/Permissions_API) (the `local-fonts` permission).
- You can control access to this feature using a {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Interfaces

- {{domxref("FontData")}}
  - : Represents a single local font face.

## Extensions to other interfaces

- {{domxref("Window.queryLocalFonts()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an array of {{domxref("FontData")}} objects representing the font faces available locally.

## Examples

For a working live demo, see [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Feature detection

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

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
- The {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) directive
