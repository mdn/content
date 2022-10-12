---
title: HTMLMetaElement.media
slug: Web/API/HTMLMetaElement/media
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMetaElement
  - Property
  - Reference
browser-compat: api.HTMLMetaElement.media
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.media`** property allows you to specify the media for which the metadata applies.
This is useful for the `theme-color` property as it allows you to set the color of the browser's toolbar or UI elements depending on the media the page is displayed on.

## Value

A string.

## Examples

### Setting the theme color

```js
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
document.head.appendChild(meta);
```

### Setting the theme color for dark mode

When a user has specified a dark mode in their operating system, the `media` property can be used to set a different `theme-color`:

```js
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
