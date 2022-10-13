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

The **`HTMLMetaElement.media`** property enables specifying the media for `theme-color` metadata.

The `theme-color` property enables setting the color of the browser's toolbar or UI in supporting browsers and operating systems.
The `media` property enables setting different theme colors for different `media` values.

## Value

A string.

## Examples

### Setting the theme color for dark mode

When a user has specified a dark mode in their operating system, the `media` property can be used to set a different `theme-color`:

```js
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Setting theme colors by device size

Most meta properties can only be used once, however `theme-color` can be used multiple times if there are unique `media` values provided.

This example adds two meta elements, one with a `theme-color` for all devices and another for small screens.
The order of matching the `media` query matters, so the more specific query should be added later in the document:

```js
// Add a theme-color for all devices
meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#ffffff";
document.head.appendChild(meta);

// Add a theme-color specific to small devices
var meta = document.createElement("meta");
meta.name = "theme-color";
meta.media = "(max-width: 600px)";
meta.content = "#000000";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
- [Possible values for media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
