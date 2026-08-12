---
title: download
slug: Web/SVG/Reference/Attribute/download
page-type: svg-attribute
browser-compat: svg.elements.a.download
sidebar: svgref
---

The **`download`** attribute instructs browsers to download a {{Glossary("URL")}} instead of navigating to it, so the user will be prompted to save it as a local file.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Value

The `download` attribute can take an optional string value:

- Without a value (boolean form), the browser will suggest a filename and extension for the download, which may be derived from the following sources:
  - The {{HTTPHeader("Content-Disposition")}} HTTP header
  - The final segment in the URL [path](/en-US/docs/Web/API/URL/pathname)
  - The {{Glossary("MIME_type", "media type")}} (from the {{HTTPHeader("Content-Type")}} header, the start of a [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data), or {{domxref("Blob.type")}} for a [`blob:` URL](/en-US/docs/Web/URI/Reference/Schemes/blob))
- With a string value, the browser will use that string as a suggested filename when downloading. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.

## Description

The `download` attribute works for only [same-origin URLs](/en-US/docs/Web/Security/Defenses/Same-origin_policy) or for the `blob:` and `data:` schemes.

The download behavior varies by browser, user settings, and other factors. The user may be prompted before the download starts, and the file may be saved and/or opened automatically, either in an external application or in the browser itself.

If the {{httpheader("Content-Disposition")}} header conflicts with the `download` attribute, the resulting behavior depends on the header:

- If the header specifies a filename, it takes priority over the filename specified in the `download` attribute.
- If the header specifies a disposition of `inline`, Chrome and Firefox prioritize the `download` attribute and treat the resource as a download.

## Examples

### Demonstrating the effect of `download`

This example shows the effect of adding the `download` attribute to an SVG link.

```css hidden live-sample___download-effect
html,
body {
  height: 100%;
}

svg {
  height: 100px;
}
```

#### HTML

In this example, we present two very similar SVG links that point to the same [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data), which encodes a red heart-shaped image. The first one _doesn't_ include the `download` attribute and has the link text "Display my image". The second one includes the `download` attribute and has the link text "Download my image".

```html live-sample___download-effect
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E">
    <text x="10" y="25">Display my image</text>
  </a>
</svg>

<hr />

<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E"
    download="heart.svg">
    <text x="10" y="25">Download my image</text>
  </a>
</svg>
```

#### Result

{{EmbedLiveSample("download-effect", "320", "220")}}

Click the two links to see the difference in effect. The first navigates to the linked image and displays it in the embedded document. The second triggers the image to be downloaded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("a")}}
- {{SVGAttr("href")}}
- {{domxref("SVGAElement.download")}}
