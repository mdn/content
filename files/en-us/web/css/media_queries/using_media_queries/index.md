---
title: Using media queries
slug: Web/CSS/Media_Queries/Using_media_queries
tags:
  - Advanced
  - CSS
  - Guide
  - Media
  - Media Queries
  - Responsive Design
  - Web
---
{{CSSRef}}

**Media queries** are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser {{glossary("viewport")}} width).

Media queries are used for the following:

- To conditionally apply styles with the [CSS](/en-US/docs/Web/CSS) {{cssxref("@media")}} and {{cssxref("@import")}} [at-rules.](/en-US/docs/Web/CSS/At-rule)
- To target specific media for the {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, and other [HTML](/en-US/docs/Web/HTML) elements with the `media=` attribute.
- To [test and monitor media states](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries) using the {{domxref("Window.matchMedia()")}} and {{domxref("MediaQueryList.addListener()")}} [JavaScript](/en-US/docs/Web/JavaScript) methods.

> **Note:** The examples on this page use CSS's `@media` for illustrative purposes, but the basic syntax remains the same for all types of media queries.

## Syntax

A media query is composed of an optional _media type_ and any number of _media feature_ expressions. Multiple queries can be combined in various ways by using _logical operators_. Media queries are case-insensitive.

A media query computes to true when the media type (if specified) matches the device on which a document is being displayed _and_ all media feature expressions compute as true. Queries involving unknown media types are always false.

> **Note:** A style sheet with a media query attached to its {{HTMLElement("link")}} tag [will still download](https://scottjehl.github.com/CSS-Download-Tests/) even if the query returns false. Nevertheless, its contents will not apply unless and until the result of the query changes to true.

### Media types

_Media types_ describe the general category of a device. Except when using the `not` or `only` logical operators, the media type is optional and the `all` type will be implied.

- `all`
  - : Suitable for all devices.
- `print`
  - : Intended for paged material and documents viewed on a screen in print preview mode. (Please see [paged media](/en-US/docs/Web/CSS/Paged_Media) for information about formatting issues that are specific to these formats.)
- `screen`
  - : Intended primarily for screens.
- `speech`
  - : Intended for speech synthesizers.

> **Note:** CSS2.1 and [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, and `aural`), but they were deprecated in [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types) and shouldn't be used. The `aural` type has been replaced by `speech`, which is similar.

### Media features

_Media features_ describe specific characteristics of the {{glossary("user agent")}}, output device, or environment. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.

| Name                                                                                                              | Summary                                                                                                                          | Notes                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| {{cssxref("@media/any-hover", "any-hover")}}                                                      | Does any available input mechanism allow the user to hover over elements?                                                        | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/any-pointer", "any-pointer")}}                                                  | Is any available input mechanism a pointing device, and if so, how accurate is it?                                               | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/aspect-ratio", "aspect-ratio")}}                                              | Width-to-height aspect ratio of the viewport                                                                                     |                                                                                                         |
| {{cssxref("@media/color", "color")}}                                                                  | Number of bits per color component of the output device, or zero if the device isn't color                                       |                                                                                                         |
| {{cssxref("@media/color-gamut", "color-gamut")}}                                                  | Approximate range of colors that are supported by the user agent and output device                                               | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/color-index", "color-index")}}                                                  | Number of entries in the output device's color lookup table, or zero if the device does not use such a table                     |                                                                                                         |
| {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}} | Width-to-height aspect ratio of the output device                                                                                | Deprecated in Media Queries Level 4.                                                                    |
| {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}                 | Height of the rendering surface of the output device                                                                             | Deprecated in Media Queries Level 4.                                                                    |
| {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}                 | Width of the rendering surface of the output device                                                                              | Deprecated in Media Queries Level 4.                                                                    |
| {{cssxref("@media/display-mode", "display-mode")}}                                              | The display mode of the application, as specified in the web app manifest's [`display`](/en-US/docs/Web/Manifest#display) member | Defined in the [Web App Manifest spec](https://w3c.github.io/manifest/#the-display-mode-media-feature). |
| {{cssxref("@media/forced-colors", "forced-colors")}}                                              | Detect whether user agent restricts color palette                                                                                | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/grid", "grid")}}                                                                      | Does the device use a grid or bitmap screen?                                                                                     |                                                                                                         |
| {{cssxref("@media/height", "height")}}                                                              | Height of the viewport                                                                                                           |                                                                                                         |
| {{cssxref("@media/hover", "hover")}}                                                                  | Does the primary input mechanism allow the user to hover over elements?                                                          | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/inverted-colors", "inverted-colors")}}                                      | Is the user agent or underlying OS inverting colors?                                                                             | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/monochrome", "monochrome")}}                                                      | Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome                            |                                                                                                         |
| {{cssxref("@media/orientation", "orientation")}}                                                  | Orientation of the viewport                                                                                                      |                                                                                                         |
| {{cssxref("@media/overflow-block", "overflow-block")}}                                          | How does the output device handle content that overflows the viewport along the block axis?                                      | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/overflow-inline", "overflow-inline")}}                                      | Can content that overflows the viewport along the inline axis be scrolled?                                                       | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/pointer", "pointer")}}                                                              | Is the primary input mechanism a pointing device, and if so, how accurate is it?                                                 | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}                          | Detect if the user prefers a light or dark color scheme                                                                          | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/prefers-contrast", "prefers-contrast")}}                                      | Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors                 | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}                      | The user prefers less motion on the page                                                                                         | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/resolution", "resolution")}}                                                      | Pixel density of the output device                                                                                               |                                                                                                         |
| {{cssxref("@media/scripting", "scripting")}}                                                      | Detects whether scripting (i.e. JavaScript) is available                                                                         | Added in Media Queries Level 5.                                                                         |
| {{cssxref("@media/update-frequency", "update")}}                                                  | How frequently the output device can modify the appearance of content                                                            | Added in Media Queries Level 4.                                                                         |
| {{cssxref("@media/width", "width")}}                                                                  | Width of the viewport including width of scrollbar                                                                               |                                                                                                         |

### Logical operators

The _logical operators_ `not`, `and`, and `only` can be used to compose a complex media query. You can also combine multiple media queries into a single rule by separating them with commas.

#### `and`

The `and` operator is used for combining multiple media features together into a single media query, requiring each chained feature to return true in order for the query to be true. It is also used for joining media features with media types.

#### `not`

The `not` operator is used to negate a media query, returning true if the query would otherwise return false. If present in a comma-separated list of queries, it will only negate the specific query to which it is applied. If you use the `not` operator, you _must also_ specify a media type.

> **Note:** In Level 3, the `not` keyword can't be used to negate an individual media feature expression, only an entire media query.

#### `only`

The `only` operator is used to apply a style only if an entire query matches, and is useful for preventing older browsers from applying selected styles. When not using `only`, older browsers would interpret the query `screen and (max-width: 500px)` as `screen`, ignoring the remainder of the query, and applying its styles on all screens. If you use the `only` operator, you _must also_ specify a media type.

#### `,` (comma)

Commas are used to combine multiple media queries into a single rule. Each query in a comma-separated list is treated separately from the others. Thus, if any of the queries in a list is true, the entire media statement returns true. In other words, lists behave like a logical `or` operator.

## Targeting media types

Media types describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screenreaders. For example, this CSS targets printers:

```css
@media print { ... }
```

You can also target multiple devices. For instance, this `@media` rule uses two media queries to target both screen and print devices:

```css
@media screen, print { ... }
```

See [Media types](#Media_types) for a list of all media types. Because they describe devices in only very broad terms, just a few are available; to target more specific attributes, use _media features_ instead.

## Targeting media features

Media features describe the specific characteristics of a given {{glossary("user agent")}}, output device, or environment. For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions. This example applies styles when the user's _primary_ input mechanism (such as a mouse) can hover over elements:

```css
@media (hover: hover) { ... }
```

Many media features are _range features_, which means they can be prefixed with "min-" or "max-" to express "minimum condition" or "maximum condition" constraints. For example, this CSS will apply styles only if your browser's {{glossary("viewport")}} width is equal to or narrower than 12450px:

```css
@media (max-width: 12450px) { ... }
```

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not zero (or `none`, in Level 4). For example, this CSS will apply to any device with a color screen:

```css
@media (color) { ... }
```

If a feature doesn't apply to the device on which the browser is running, expressions involving that media feature are always false. For example, the styles nested inside the following query will never be used, because no speech-only device has a screen aspect ratio:

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

For more [media feature](#media_features) examples, please see the reference page for each specific feature.

## Creating complex media queries

Sometimes you may want to create a media query that depends on multiple conditions. This is where the _logical operators_ come in: `not`, `and`, and `only`. Furthermore, you can combine multiple media queries into a _comma-separated list_; this allows you to apply the same styles in different situations.

In the previous example, we've already seen the `and` operator used to group a media _type_ with a media _feature_. The `and` operator can also combine multiple media features into a single media query. The `not` operator, meanwhile, negates a media query, basically reversing its normal meaning. The `only` operator prevents older browsers from applying the styles.

> **Note:** In most cases, the `all` media type is used by default when no other type is specified. However, if you use the `not` or `only` operators, you must explicitly specify a media type.

### Combining multiple types or features

The `and` keyword combines a media feature with a media type _or_ other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

To limit the styles to devices with a screen, you can chain the media features to the `screen` media type:

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### Testing for multiple queries

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portrait mode:

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

### Inverting a query's meaning

The `not` keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The `not` keyword can't be used to negate an individual feature query, only an entire media query. The `not` is evaluated last in the following query:

```css
@media not all and (monochrome) { ... }
```

... so that the above query is evaluated like this:

```css
@media not (all and (monochrome)) { ... }
```

... rather than like this:

```css example-bad
@media (not all) and (monochrome) { ... }
```

As another example, the following media query:

```css
@media not screen and (color), print and (color) { ... }
```

... is evaluated like this:

```css
@media (not (screen and (color))), print and (color) { ... }
```

### Improving compatibility with older browsers

The `only` keyword prevents older browsers that do not support media queries with media features from applying the given styles. _It has no effect on modern browsers._

```css
@media only screen and (color) { ... }
```

## Syntax improvements in Level 4

The Media Queries Level 4 specification includes some syntax improvements to make media queries using features that have a "range" type, for example width or height, less verbose. Level 4 adds a _range context_ for writing such queries. For example, using the `max-` functionality for width we might write the following:

> **Note:** The Media Queries Level 4 specification has reasonable support in modern browsers, but some media features are not well supported. See the [`@media` browser compatibility table](/en-US/docs/Web/CSS/@media#Browser_compatibility) for more details.

```css
@media (max-width: 30em) { ... }
```

In Media Queries Level 4 this can be written as:

```css
@media (width <= 30em) { ... }
```

Using `min-` and `max-` we might test for a width between two values like so:

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

This would convert to the Level 4 syntax as:

```css
@media (30em <= width <= 50em ) { ... }
```

Media Queries Level 4 also adds ways to combine media queries using full boolean algebra with **and**, **not**, and **or**.

### Negating a feature with `not`

Using `not()` around a media feature negates that feature in the query. For example, `not(hover)` would match if the device had no hover capability:

```css
@media (not(hover)) { ... }
```

### Testing for multiple features with `or`

You can use `or` to test for a match among more than one feature, resolving to `true` if any of the features are true. For example, the following query tests for devices that have a monochrome display or hover capability:

```css
@media (not (color)) or (hover) { ... }
```

## See also

- [Testing media queries programmatically](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- [CSS Animations Between Media Queries](http://davidwalsh.name/animate-media-queries)
- [Extended Mozilla media features](/en-US/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [Extended WebKit media features](/en-US/docs/Web/CSS/Webkit_Extensions#Media_features)
