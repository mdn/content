---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
tags:
  - Attribute
  - HTML
  - HTML document metadata
  - Reference
  - metadata
browser-compat: html.elements.meta.name.theme-color
---

{{HTMLRef}}

The **`theme-color`** value for the {{htmlattrxref("name", "meta")}} attribute of the {{htmlelement("meta")}} element indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. If specified, the {{htmlattrxref("content", "meta")}} attribute must contain a valid CSS {{cssxref("&lt;color&gt;")}}.

## Example

```html
<meta name="theme-color" content="#4285f4">
```

The following image shows the effect that the {{htmlelement("meta")}} element above will have on a document displayed in Chrome running on an Android mobile device.

![Image showing the effect of using theme-color](theme-color.png)

_Image credit: from [Icons & Browser Colors](https://web.dev/icons-and-browser-colors/), created and shared by Google and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

You can provide a media type or query inside the {{htmlattrxref("media", "meta")}} attribute; the color will then only be set if the media condition is true. For example:

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
