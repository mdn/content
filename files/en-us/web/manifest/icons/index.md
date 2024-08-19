---
title: icons
slug: Web/Manifest/icons
page-type: web-manifest-member
browser-compat: html.manifest.icons
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

The `icons` manifest member is used to specify one or more image files that define the icons to represent your web application.
These icons uniquely identify your web app in different contexts, such as in an operating system's task switcher, system settings, home screen, app listings, and other places when application icons are displayed.

## Syntax

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  }
]
```

### Values

The value of the `icons` member is an array of objects. Each object represents an icon to be used in a specific context. For example, you can add icons to represent your web app on devices with different screen sizes. You can add different icons for integration with various operating systems. You can also add icons for splash screens or app notifications.

### Properties

Each object in the array includes one or more of the following properties (`src` is the only required property):

- `src`

  - : A string that specifies the path to the icon image file. If `src` is a relative URL, the path is resolved relative to the URL of the manifest file. For example, the relative URL `images/icon-192x192.png` for the manifest file located at `https://example.com/manifest.json` will be resolved as `https://example.com/images/icon-192x192.png`. `src` is a required property.

- `sizes`

  - : A string that specifies one or more dimensions of the icon. Each dimension is specified as `<width>x<height>`. Mutiple dimensions are separated by spaces, as in `48x48 96x96`. Specifying multiple sizes allows a browser to select the most appropriate one for the context. The `sizes` property uses the same syntax as the [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute of the `<link>` HTML element. This property is optional; if not specifed, the default value of `any` is used, which indicates that the icon can be used at any size.

- `type`

  - : A string that specifies the media type (also known as the {{Glossary("MIME type")}}) of the icon. The value should be in the format `image/<subtype>`, where `<subtype>` is a specific image format; for example, `image/png` indicates a PNG image. This property is optional; if not specified, a browser typically uses the file extension to determine the image type.

- `purpose`
  - : A string that specifies one or more the purposes of the icon, which indicate how the icon should be used by the browser or operating system. The value can be a single keyword or multiple space-separated keywords. Valid keyword values include `monochrome`, `maskable`, and `any` and are case-sensitive. This property is optional; `any` is assumed if no value is specified. If multiple values are specified, they should be listed in the following order of precedence:
    - `monochrome`: Indicates that the icon is intended to be used as a monochrome icon with a solid fill. With this value, a browser discards the color information in the icon and uses only the alpha channel as a mask over any solid fill.
    - `maskable`: Indicates that the icon is designed with icon masks and safe zone in mind, such that any part of the image outside the safe zone can be ignored and masked away by a browser.
    - `any`: Indicates that the icon can be used in any context. This is the default value.

## Description

The context in which an icon can be used is determined by the browser and the operating system, based on the specified sizes and formats.

When working with icon images, both security and performance are important considerations.

The browser's ability to fetch an icon image is governed by the Content Security Policy ({{Glossary("CSP")}}) of the manifest's owner document, specifically by the [`img-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directive. This security aspect is related to the `src` property. For example, if the `img-src` directive in a CSP header specifies `icons.example.com`, icons from only that domain would be fetchable. In a manifest with two icons, one from `icons.example.com/lowres` and another from `other.com/hi-res`, only the former would be fetched successfully because of CSP restrictions.

The `type` property plays a part in determining performance. While this property is optional, specifying it can improve performance significantly. It allows browsers to quickly ignore images with formats they do not support. If you don't specify the `type` property, it is recommended to specify clear file extensions for the icon images to ensure correct handling by the browser.

## Examples

### Declaring multiple icons

This example shows how to declare multiple icons for different scenarios and devices. If an icon for a specific situation is not supported or not available, browsers will fall back to other available formats and sizes.

- Two icons of the same size (`48x48`) are provided in different formats. The first is explicitly specified as [WebP](/en-US/docs/Web/Media/Formats/Image_types#webp_image) using the `type` property. If a browser doesn't support WebP, it will fall back to the second icon of the same size. For the second icon, the browser will determine the MIME type either from the HTTP header or by inferring it from the image file's content. Icons at this size are typically used for browser tabs and bookmarks.

- For smaller icons (up to `256x256`), an [ICO](/en-US/docs/Web/Media/Formats/Image_types#ico_microsoft_windows_icon) file is provided. ICO files contain multiple raster icons that are individually optimized for small display sizes. icons at these sizes are commonly used for desktop shortcuts.

- For larger icons (`257x257` and above), an [SVG](/en-US/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) file is specified. The `sizes` value of this icon is set to `any`, which allows a browser to use this icon at any size. SVG icons maintain their quality at larger sizes. These icons ate ideal for high-resolution displays like in [progressive web apps (PWAs)](/en-US/docs/Web/Progressive_web_apps).

```json
"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types#webp_image)
