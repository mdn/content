---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
page-type: css-media-feature
status:
  - experimental
browser-compat: css.at-rules.media.prefers-reduced-data
---

{{CSSRef}}{{SeeCompatTable}}

> **Note:** This feature is not supported by any user agent and its specifics are subject to change.

The **`prefers-reduced-data`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to detect if the user has requested the web content that consumes less internet traffic.

## Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the boolean context.
- `reduce`
  - : Indicates that user has expressed the preference for lightweight alternate content.

## User preferences

Currently no user agent implements this feature, although various operating systems do support such preferences and if this media query is ever implemented user agents will likely rely on the settings provided by the operating system.

## Examples

> **Note:** No browser currently implements this feature so the following example will not work.

In this example the `montserrat-regular.woff2` font file will neither be preloaded nor downloaded if the user prefers reduced data, in this case the "[system font stack](https://css-tricks.com/snippets/css/system-font-stack/)" will serve as the fallback font:

### HTML

```html
<head>
  <link
    rel="preload"
    href="fonts/montserrat-regular.woff2"
    as="font"
    media="(prefers-reduced-data: no-preference)"
    crossorigin />
  <link rel="stylesheet" href="style.css" />
</head>
```

### CSS

```css
@media (prefers-reduced-data: no-preference) {
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    /* latin */
    src:
      local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("fonts/montserrat-regular.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
      U+2212, U+2215, U+FEFF, U+FFFD;
  }
}

body {
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    "Microsoft YaHei",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Save-Data")}} HTTP header
