---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
page-type: html-attribute-value
browser-compat: html.elements.meta.name.theme-color
sidebar: htmlsidebar
---

The **`theme-color`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of the {{htmlelement("meta")}} element indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface.
If specified, you define a theme color using a [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute in the `<meta>` element as a CSS {{cssxref("&lt;color&gt;")}} value.

For example, to indicate that a document should use `cornflowerblue` as a theme color, set the `<meta>` as:

```html
<meta name="theme-color" content="cornflowerblue" />
```

To set the media to which the theme color metadata applies, include the [`media`](/en-US/docs/Web/HTML/Reference/Elements/meta#media) attribute with a valid media query list (see the [`theme-color` media query example](#using_a_media_query_with_theme-color)).

## Usage notes

A `<meta name="theme-color">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : A `<meta>` element with `name=theme-color` must have a `content` attribute that defines the theme color.
    The value of `content` attribute is as follows:
    - {{cssxref("&lt;color&gt;")}} value
      - : A valid color value, such as hexadecimal, RGB, named color, etc.
- `media` {{optional_inline}}
  - : Any valid media type or query.
    If provided, the options for the document's theme color defined in the `content` attribute are suggested to the browser when the media query matches.

## Examples

### Setting a color value

Consider the following code that uses `<meta>` to set a theme color:

```html
<meta name="theme-color" content="#4285f4" />
```

The following image shows the effect of this setting in Chrome on an Android mobile device:

![Image showing the effect of using theme-color](theme-color.png)

_Image credit: from [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), created and shared by Google and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

### Using a media query with `theme-color`

You can provide a media type or query inside the [`media`](/en-US/docs/Web/HTML/Reference/Elements/meta#media) attribute.
The `theme-color` will then only be set if the media condition is true.
For example:

```html
<meta
  name="theme-color"
  content="cornflowerblue"
  media="(prefers-color-scheme: light)" />
<meta
  name="theme-color"
  content="dimgray"
  media="(prefers-color-scheme: dark)" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `<meta>` `name` attribute [`color-scheme`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) value
- {{cssxref("color-scheme")}} CSS property
- {{cssxref("@media/prefers-color-scheme")}} media query
