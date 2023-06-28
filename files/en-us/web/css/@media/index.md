---
title: "@media"
slug: Web/CSS/@media
page-type: css-at-rule
browser-compat: css.at-rules.media
---

{{CSSRef}}

The **`@media`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) can be used to apply part of a style sheet based on the result of one or more [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). With it, you specify a media query and a block of CSS to apply to the document if and only if the media query matches the device on which the content is being used.

> **Note:** In JavaScript, the rules created using `@media` can be accessed with the {{domxref("CSSMediaRule")}} CSS object model interface.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

The `@media` at-rule may be placed at the top level of your code or nested inside any other [conditional group at-rule](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

For a discussion of media query syntax, please see [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Description

### Media types

_Media types_ describe the general category of a device.
Except when using the `not` or `only` logical operators, the media type is optional and the `all` type is implied.

- `all`
  - : Suitable for all devices.
- `print`
  - : Intended for paged material and documents viewed on a screen in print preview mode. (Please see [paged media](/en-US/docs/Web/CSS/CSS_paged_media) for information about formatting issues that are specific to these formats.)
- `screen`
  - : Intended primarily for screens.

> **Note:** CSS2.1 and [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, and `aural`), but they were deprecated in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) and shouldn't be used.

### Media features

_Media features_ describe specific characteristics of the {{glossary("user agent")}}, output device, or environment.
Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Does any available input mechanism allow the user to hover over elements?
    Added in Media Queries Level 4.
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Is any available input mechanism a pointing device, and if so, how accurate is it?
    Added in Media Queries Level 4.
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Width-to-height aspect ratio of the viewport
- {{cssxref("@media/color", "color")}}
  - : Number of bits per color component of the output device, or zero if the device isn't color
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Approximate range of colors that are supported by the user agent and output device.
    Added in Media Queries Level 4.
- {{cssxref("@media/color-index", "color-index")}}
  - : Number of entries in the output device's color lookup table, or zero if the device does not use such a table
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - : Width-to-height aspect ratio of the output device.
    Deprecated in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - : Height of the rendering surface of the output device.
    Deprecated in Media Queries Level 4.
- {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - : Width of the rendering surface of the output device. Deprecated in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : The display mode of the application, as specified in the web app manifest's [`display`](/en-US/docs/Web/Manifest#display) member.
    Defined in the [Web App Manifest spec](https://w3c.github.io/manifest/#the-display-mode-media-feature).
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Combination of brightness, contrast ratio, and color depth that are supported by the user agent and the output device. Added in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Detect whether user agent restricts color palette.
    Added in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Does the device use a grid or bitmap screen?
- {{cssxref("@media/height", "height")}}
  - : Height of the viewport.
- {{cssxref("@media/hover", "hover")}}
  - : Does the primary input mechanism allow the user to hover over elements?
    Added in Media Queries Level 4.
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Is the user agent or underlying OS inverting colors?
    Added in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientation of the viewport.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : How does the output device handle content that overflows the viewport along the block axis?
    Added in Media Queries Level 4.
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Can content that overflows the viewport along the inline axis be scrolled?
    Added in Media Queries Level 4.
- {{cssxref("@media/pointer", "pointer")}}
  - : Is the primary input mechanism a pointing device, and if so, how accurate is it?
    Added in Media Queries Level 4.
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Detect if the user prefers a light or dark color scheme.
    Added in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors.
    Added in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : The user prefers less motion on the page.
    Added in Media Queries Level 5.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixel density of the output device.
- {{cssxref("@media/scripting", "scripting")}} {{Experimental_Inline}}
  - : Detects whether scripting (i.e. JavaScript) is available.
    Added in Media Queries Level 5.
- {{cssxref("@media/update", "update")}}
  - : How frequently the output device can modify the appearance of content.
    Added in Media Queries Level 4.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Combination of brightness, contrast ratio, and color depth that are supported by the video plane of user agent and the output device. Added in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Width of the viewport including width of scrollbar.

### Logical operators

The _logical operators_ `not`, `and`, `only`, and `or` can be used to compose a complex media query.
You can also combine multiple media queries into a single rule by separating them with commas.

- `and`
  - : Used for combining multiple media features together into a single media query, requiring each chained feature to return `true` for the query to be `true`.
    It is also used for joining media features with media types.
- `not`

  - : Used to negate a media query, returning `true` if the query would otherwise return `false`.
    If present in a comma-separated list of queries, it will only negate the specific query to which it is applied.
    If you use the `not` operator, you _must also_ specify a media type.

    > **Note:** In Level 3, the `not` keyword can't be used to negate an individual media feature expression, only an entire media query.

- `only`
  - : Applies a style only if an entire query matches.
    It is useful for preventing older browsers from applying selected styles.
    When not using `only`, older browsers would interpret the query `screen and (max-width: 500px)` as `screen`, ignoring the remainder of the query, and applying its styles on all screens.
    If you use the `only` operator, you _must also_ specify a media type.
- `,` (comma)
  - : Commas are used to combine multiple media queries into a single rule.
    Each query in a comma-separated list is treated separately from the others
    Thus, if any of the queries in a list is `true`, the entire media statement returns `true`.
    In other words, lists behave like a logical `or` operator.
- `or`
  - : Equivalent to the `,` operator. Added in Media Queries Level 4.

## Accessibility concerns

To best accommodate people who adjust a site's text size, use [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values)s when you need a {{cssxref("&lt;length&gt;")}} for your [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).

Both [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) and [`px`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) are valid units, but [`em`](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numeric_values) works better if the user changes the browser text size.

Also consider using Level 4 media queries to improve the user's experience. For example, `prefers-reduced-motion` to [detect if the user has requested that the system minimize the amount of animation](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) or motion it uses.

## Security

Because media queries provide insights into the capabilities—and by extension, the features and design—of the device the user is working with, there is the potential that they could be abused to construct a ["fingerprint"](/en-US/docs/Glossary/Fingerprinting) which identifies the device, or at least categorizes it to some degree of detail that may be undesirable to users.

Because of this potential, a browser may opt to fudge the returned values in some manner in order to prevent them from being used to precisely identify a computer. A browser might also offer additional measures in this area; for example, if Firefox's "Resist Fingerprinting" setting is enabled, many media queries report default values rather than values representing the actual device state.

## Formal syntax

{{csssyntax}}

## Examples

### Testing for print and screen media types

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

Introduced in Media Queries Level 4 is a new range syntax that allows for less verbose media queries when testing for any feature accepting a range, as shown in the below examples:

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

For more examples, please see [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- In JavaScript, `@media` can be accessed via the CSS object model interface {{domxref("CSSMediaRule")}}.
- [Extended Mozilla media features](/en-US/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Extended WebKit media features](/en-US/docs/Web/CSS/WebKit_Extensions#media_features)
