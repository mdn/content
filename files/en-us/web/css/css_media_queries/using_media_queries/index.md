---
title: Using media queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
page-type: guide
---

{{CSSRef}}

**Media queries** allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser {{glossary("viewport")}} width.
Media queries are used for the following:

- To conditionally apply styles with the [CSS](/en-US/docs/Web/CSS) {{cssxref("@media")}} and {{cssxref("@import")}} [at-rules](/en-US/docs/Web/CSS/At-rule).
- To target specific media for the {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, and other [HTML](/en-US/docs/Web/HTML) elements with the `media=` attribute.
- To [test and monitor media states](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries) using the {{domxref("Window.matchMedia()")}} and {{domxref("EventTarget.addEventListener()")}} methods.

> **Note:** The examples on this page use CSS's `@media` for illustrative purposes, but the basic syntax remains the same for all types of media queries.

## Syntax

A media query is composed of an optional _media type_ and any number of _media feature_ expressions, which may optionally be combined in various ways using _logical operators_.
Media queries are case-insensitive.

- [Media types](/en-US/docs/Web/CSS/@media#media_types) define the broad category of device for which the media query applies: `all`, `print`, `screen`.

  The type is optional (assumed to be `all`) except when using the `not` or `only` logical operators.

- [Media features](/en-US/docs/Web/CSS/@media#media_features) describe a specific characteristic of the {{glossary("user agent")}}, output device, or environment:

  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - {{cssxref("@media/display-mode", "display-mode")}}
  - {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/orientation", "orientation")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} {{experimental_inline}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}.

  For example, the {{cssxref("@media/hover", "hover")}} feature allows a query to test against whether the device supports hovering over elements.
  Media feature expressions test for their presence or value, and are entirely optional.
  Each media feature expression must be surrounded by parentheses.

- [Logical operators](/en-US/docs/Web/CSS/@media#logical_operators) can be used to compose a complex media query: `not`, `and`, and `only`.
  You can also combine multiple media queries into a single rule by separating them with commas.

A media query computes to `true` when the media type (if specified) matches the device on which a document is being displayed _and_ all media feature expressions compute as true.
Queries involving unknown media types are always false.

> **Note:** A style sheet with a media query attached to its {{HTMLElement("link")}} tag [will still download](https://scottjehl.github.io/CSS-Download-Tests/) even if the query returns `false`, the download will happen but the priority of downloading will be much lower.
> Nevertheless, its contents will not apply unless and until the result of the query changes to `true`.
> You can read why this happens in Tomayac's blog [Why Browser Download Stylesheet with Non-Matching Media Queries](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2).

## Targeting media types

Media types describe the general category of a given device.
Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screen readers.
For example, this CSS targets printers:

```css
@media print {
  /* … */
}
```

You can also target multiple devices.
For instance, this `@media` rule uses two media queries to target both screen and print devices:

```css
@media screen, print {
  /* … */
}
```

See [media type](/en-US/docs/Web/CSS/@media#media_types) for a list of all media types.
Because they describe devices in only very broad terms, just a few are available; to target more specific attributes, use _media features_ instead.

## Targeting media features

Media features describe the specific characteristics of a given {{glossary("user agent")}}, output device, or environment.
For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions.
This example applies styles when the user's _primary_ input mechanism (such as a mouse) can hover over elements:

```css
@media (hover: hover) {
  /* … */
}
```

Many media features are _range features_, which means they can be prefixed with "min-" or "max-" to express "minimum condition" or "maximum condition" constraints.
For example, this CSS will apply styles only if your browser's {{glossary("viewport")}} width is equal to or narrower than 1250px:

```css
@media (max-width: 1250px) {
  /* … */
}
```

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not zero (or `none`, in [Level 4](https://drafts.csswg.org/mediaqueries-4/)).
For example, this CSS will apply to any device with a color screen:

```css
@media (color) {
  /* … */
}
```

If a feature doesn't apply to the device on which the browser is running, expressions involving that media feature are always false.

For more [Media feature](/en-US/docs/Web/CSS/@media#media_features) examples, please see the reference page for each specific feature.

## Creating complex media queries

Sometimes you may want to create a media query that depends on multiple conditions. This is where the _logical operators_ come in: `not`, `and`, and `only`.
Furthermore, you can combine multiple media queries into a _comma-separated list_; this allows you to apply the same styles in different situations.

In the previous example, we've already seen the `and` operator used to group a media _type_ with a media _feature_.
The `and` operator can also combine multiple media features into a single media query. The `not` operator, meanwhile, negates a media query, basically reversing its normal meaning.
The `only` operator prevents older browsers from applying the styles.

> **Note:** In most cases, the `all` media type is used by default when no other type is specified.
> However, if you use the `not` or `only` operators, you must explicitly specify a media type.

### Combining multiple types or features

The `and` keyword combines a media feature with a media type _or_ other media features.
This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

To limit the styles to devices with a screen, you can chain the media features to the `screen` media type:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Testing for multiple queries

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states.
For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portrait mode:

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply.
Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

### Inverting a query's meaning

The `not` keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to.
(Thus, it will not apply to every media query in a comma-separated list of media queries.)
The `not` keyword can't be used to negate an individual feature query, only an entire media query.
The `not` is evaluated last in the following query:

```css
@media not all and (monochrome) {
  /* … */
}
```

This means that the above query is evaluated like this:

```css
@media not (all and (monochrome)) {
  /* … */
}
```

It wouldn't be evaluated like this:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

As another example, the following media query:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

This means that the above query is evaluated like this:

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

### Improving compatibility with older browsers

The `only` keyword prevents older browsers that do not support media queries with media features from applying the given styles.
_It has no effect on modern browsers._

```css
@media only screen and (color) {
  /* … */
}
```

## Syntax improvements in Level 4

The Media Queries Level 4 specification includes some syntax improvements to make media queries using features that have a "range" type, for example width or height, less verbose.
Level 4 adds a _range context_ for writing such queries. For example, using the `max-` functionality for width we might write the following:

> **Note:** The Media Queries Level 4 specification has reasonable support in modern browsers, but some media features are not well supported.
> See the [`@media` browser compatibility table](/en-US/docs/Web/CSS/@media#browser_compatibility) for more details.

```css
@media (max-width: 30em) {
  /* … */
}
```

In Media Queries Level 4 this can be written as:

```css
@media (width <= 30em) {
  /* … */
}
```

Using `min-` and `max-` we might test for a width between two values like so:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

This would convert to the Level 4 syntax as:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

Media Queries Level 4 also adds ways to combine media queries using full boolean algebra with **and**, **not**, and **or**.

### Negating a feature with `not`

Using `not()` around a media feature negates that feature in the query. For example, `not(hover)` would match if the device had no hover capability:

```css
@media (not(hover)) {
  /* … */
}
```

### Testing for multiple features with `or`

You can use `or` to test for a match among more than one feature, resolving to `true` if any of the features are true.
For example, the following query tests for devices that have a monochrome display or hover capability:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

## See also

- [@media](/en-US/docs/Web/CSS/@media)
- [Container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- [Testing media queries programmatically](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Extended Mozilla media features](/en-US/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Extended WebKit media features](/en-US/docs/Web/CSS/WebKit_Extensions#media_features)
