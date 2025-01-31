---
title: icons
slug: Web/Manifest/Reference/icons
page-type: web-manifest-member
browser-compat: html.manifest.icons
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `icons` manifest member is used to specify one or more image files that define the icons to represent your web application.

## Syntax

```json-nolint
/* Single icon with the minimum required property */
"icons": [
  {
    "src": "icon/basic-icon.png"
  }
]

/* Single icon with multiple purposes */
"icons": [
  {
    "src": "icon/basic-icon.png",
    "purpose": "monochrome maskable"
  }
]

/* Two icons with various properties */
"icons": [
  {
    "src": "icon/low-res.png",
    "sizes": "48x48"
  },
  {
    "src": "maskable_icon.png",
    "sizes": "48x48",
    "type": "image/png"
  }
]
```

### Values

- `icons`

  - : An array of objects.
    Each object represents an icon to be used in a specific context.
    For example, you can add icons to represent your web app on devices with different screen sizes, for integration with various operating systems, for splash screens, or for app notifications.

    Each icon object can have one or more properties. Of these, only `src` is required. The possible properties include:

    - `src`

      - : A string that specifies the path to the icon image file.
        If `src` is relative, the path is resolved relative to the manifest file's URL.
        For example, the relative URL `images/icon-192x192.png` for the manifest file located at `https://example.com/manifest.json` will be resolved as `https://example.com/images/icon-192x192.png`.

    - `sizes` {{Optional_Inline}}

      - : A string that specifies one or more sizes at which the icon file can be used.
        Each size is specified as `<width in pixels>x<height in pixels>`.
        If multiple sizes are specified, they are separated by spaces; for example, `48x48 96x96`.
        When multiple icons are available, browsers may select the most suitable icon for a particular display context.
        For raster formats like PNG, specifying the exact available sizes is recommended.
        For vector formats like SVG, you can use `any` to indicate scalability.
        If `sizes` is not specified, the selection and display of the icon may vary depending on the browser's implementation.

        Note that the format of `sizes` is similar to the HTML `<link>` element's [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute.

    - `type` {{Optional_Inline}}

      - : A string that specifies the {{Glossary("MIME type")}} of the icon.
        The value should be in the format `image/<subtype>`, where `<subtype>` is a specific image format; for example, `image/png` indicates a PNG image.
        If omitted, browsers typically infer the image type from the file extension.

    - `purpose` {{Optional_Inline}}

      - : A case-sensitive keyword string that specifies one or more contexts in which the icon can be used by the browser or operating system.
        The value can be a single keyword or multiple space-separated keywords.
        If omitted, the browser can use the icon for any purpose.

        Browsers use these values as hints to determine where and how an icon is displayed.
        For example, a `monochrome` icon might be used as a badge or pinned icon with a solid fill, which is visually distinct from a full-color launch icon.
        With multiple keywords, say `monochrome maskable`, the browser can use the icon for any of those purposes.
        If an unrecognized purpose is included along with valid values (e.g., `monochrome fizzbuzz`), the icon can still be used for the valid purposes.
        However, if only unrecognized purposes are specified (e.g., `fizzbuzz`), then it will be ignored.

        Valid values include:

        - `monochrome`

          - : Indicates that the icon is intended to be used as a monochrome icon with a solid fill.
            With this value, a browser discards the color information in the icon and uses only the alpha channel as a mask over any solid fill.

        - `maskable`

          - : Indicates that the icon is designed with icon masks and safe zone in mind, such that any part of the image outside the safe zone can be ignored and masked away.

        - `any`
          - : Indicates that the icon can be used in any context. This is the default value.

## Description

Icons uniquely identify your web app in different contexts, such as in an operating system's task switcher, system settings, home screen, app listings, and other places when application icons are displayed.

The context in which an icon can be used is determined by the browser and the operating system, based on the specified sizes and formats.

## Security considerations

The browser's ability to fetch an icon image is governed by the Content Security Policy ({{Glossary("CSP")}}) of the manifest's owner document, specifically by the [`img-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directive. This security aspect is related to the `src` property.

For example, if the `img-src` directive in a CSP header specifies `icons.example.com`, icons from only that domain would be fetchable. In a manifest with two icons, one from `icons.example.com/low-res` and another from `other.com/hi-res`, only the former would be fetched successfully because of CSP restrictions.

## Performance considerations

Specifying the `type` property can significantly improve performance because it allows browsers to ignore images with unsupported formats more easily.
If you don't specify the `type` property, browsers may need to infer the image format using more resource-intensive methods, such as [MIME sniffing](/en-US/docs/Web/HTTP/MIME_types#mime_sniffing) the file for a signature.

At a minimum, if you omit the `type` property, use appropriate and unambiguous file extensions for your icon images.

## Examples

### Declaring multiple icons

This example shows how to declare multiple icons for different scenarios and devices. If an icon for a specific situation is not supported or not available, browsers will fall back to other available formats and sizes.

- Two icons of the same size (`48x48`) are provided in different formats. The first is explicitly specified as [WebP](/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image) using the `type` property. If a browser doesn't support WebP, it will fall back to the second icon of the same size. For the second icon, the browser will determine the MIME type either from the HTTP header or by inferring it from the image file's content. Icons at this size are typically used for browser tabs and bookmarks.

- An [ICO](/en-US/docs/Web/Media/Guides/Formats/Image_types#ico_microsoft_windows_icon) file is provided with multiple sizes ranging from `72x72` to `256x256`. ICO files contain multiple raster icons that are individually optimized for various display sizes. Icons at these sizes are commonly used for desktop shortcuts.

- For larger icons (`257x257` and above), an [SVG](/en-US/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) file is specified. The `sizes` value of this icon is set to `any`, which allows a browser to use this icon at any size. SVG icons maintain their quality at larger sizes. These icons are ideal for high-resolution displays like in [progressive web apps (PWAs)](/en-US/docs/Web/Progressive_web_apps).

```json
{
  "icons": [
    {
      "src": "icon/low-res.webp",
      "sizes": "48x48",
      "type": "image/webp"
    },
    {
      "src": "icon/low-res",
      "sizes": "48x48"
    },
    {
      "src": "icon/hd_hi.ico",
      "sizes": "72x72 96x96 128x128 256x256"
    },
    {
      "src": "icon/hd_hi.svg",
      "sizes": "any"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image)
- [Monochrome icons and solid fills](https://w3c.github.io/manifest/#monochrome-icons-and-solid-fills)
- [Icon masks and safe zone](https://w3c.github.io/manifest/#icon-masks)
