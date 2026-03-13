---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
page-type: html-attribute-value
browser-compat: html.elements.meta.name.color-scheme
sidebar: htmlsidebar
---

The **`color-scheme`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of the {{htmlelement("meta")}} element indicates a suggested color scheme that user agents should use for a page.
If specified, you define the color scheme using a [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute in the `<meta>` element with a valid CSS {{cssxref("color-scheme")}} value.

The theme color works at the _document level_ in the same way that the CSS {{cssxref("color-scheme")}} property specifies the preferred and accepted color schemes of _individual elements_.
The primary use for `<meta name="color-scheme">` is to indicate compatibility and order of preference for light and dark color modes.
For example, to indicate that a document prefers dark mode but also supports light mode:

```html
<meta name="color-scheme" content="dark light" />
```

Your styles can adapt to the current color scheme using the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS media feature.

## Usage notes

A `<meta name="color-scheme">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : A `<meta>` element with `name=color-scheme` must have a `content` attribute that defines the color scheme as a CSS {{cssxref("color-scheme")}} value.
    The `content` attribute may be one of the following:
    - `normal`
      - : The document is unaware of color schemes and should be rendered using the default color palette.
    - `light`, `dark`, `light dark`, `dark light`
      - : One or more color schemes supported by the document.
        Multiple color schemes indicates that the first scheme is preferred by the document, but that the second scheme is acceptable if the user prefers it.
        Specifying the same color scheme multiple times has the same effect as specifying it once.
    - `only light`
      - : Indicates that the document _only_ supports light mode, with a light background and dark foreground colors.
        `only dark` _is invalid_, because forcing a document to render in dark mode when it isn't compatible can result in unreadable content and all major browsers default to light mode if not otherwise configured.
- `media` {{optional_inline}}
  - : Any valid media type or query.
    If provided, the options for the document's color scheme defined in the `content` attribute are suggested to the browser when the media query matches.
    This is mostly useful for the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS media feature.

## Examples

### Using a color-scheme keyword

The following example indicates to the browser that the page supports both light and dark themes.
Whether the light or dark color scheme is used depends on user preferences such as OS-level settings or the browser settings:

```html
<meta name="color-scheme" content="light dark" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color-scheme")}} CSS property
- {{cssxref("@media/prefers-color-scheme")}} media query
