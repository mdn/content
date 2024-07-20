---
title: "HTMLMetaElement: media property"
short-title: media
slug: Web/API/HTMLMetaElement/media
page-type: web-api-instance-property
browser-compat: api.HTMLMetaElement.media
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.media`** property enables specifying the media for `theme-color` metadata.

The `theme-color` property enables setting the color of the browser's toolbar or UI in browsers and operating systems that support this property.
The `media` property enables setting different theme colors for different `media` values.

## Value

A string.

## Examples

### Setting the theme color for dark mode

The following example creates a new `<meta>` element with a `name` attribute set to [`theme-color`](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification).
The `content` attribute is set to `#3c790a`, the `media` attribute is set to `prefers-color-scheme: dark`, and the element is appended to the document `<head>`.
When a user has specified a dark mode in their operating system, the `media` property can be used to set a different `theme-color`:

```js
const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#3c790a";
meta.media = "(prefers-color-scheme: dark)";
document.head.appendChild(meta);
```

### Setting theme colors by device size

Most meta properties can be used only once. However, `theme-color` can be used multiple times if unique `media` values are provided.

This example adds two meta elements with a `theme-color`; one for all devices and another for small screens.
The order of matching the `media` query matters, so the more specific query should be added later in the document, as shown below:

```js
// Add a theme-color for all devices
const meta1 = document.createElement("meta");
meta1.name = "theme-color";
meta1.content = "#ffffff";
document.head.appendChild(meta1);

// Add a theme-color for small devices
const meta2 = document.createElement("meta");
meta2.name = "theme-color";
meta2.media = "(max-width: 600px)";
meta2.content = "#000000";
document.head.appendChild(meta2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
- [Possible values for media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
