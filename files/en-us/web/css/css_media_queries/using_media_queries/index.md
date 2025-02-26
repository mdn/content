---
title: Using media queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
page-type: guide
---

{{CSSRef}}

**Media queries** allow you to apply CSS styles depending on a device's media type (such as print vs. screen) or other features or characteristics such as screen resolution or orientation, {{glossary("aspect ratio")}}, browser {{glossary("viewport")}} width or height, user preferences such as preferring reduced motion, data usage, or transparency.

Media queries are used for the following:

- To conditionally apply styles with the [CSS](/en-US/docs/Web/CSS) {{cssxref("@media")}} and {{cssxref("@import")}} [at-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule).
- To target specific media for the {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, and other [HTML](/en-US/docs/Web/HTML) elements with the `media=` or `sizes="` attributes.
- To [test and monitor media states](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries) using the {{domxref("Window.matchMedia()")}} and {{domxref("EventTarget.addEventListener()")}} methods.

> [!NOTE]
> The examples on this page use CSS's `@media` for illustrative purposes, but the basic syntax remains the same for all types of media queries.

## Syntax

A media query is composed of an optional _media type_ and any number of _media feature_ expressions, which may optionally be combined in various ways using _logical operators_.
Media queries are case-insensitive.

- [Media types](/en-US/docs/Web/CSS/@media#media_types) define the broad category of device for which the media query applies: `all`, `print`, `screen`.

  The type is optional (assumed to be `all`) except when using the `only` logical operator.

- [Media features](/en-US/docs/Web/CSS/@media#media_features) describe a specific characteristic of the {{glossary("user agent")}}, output device, or environment:

  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-posture", "device-posture")}}
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
  - {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}

  For example, the {{cssxref("@media/hover", "hover")}} feature allows a query to check whether the device supports hovering over elements.
  Media feature expressions test for their presence or value, and are entirely optional.
  Each media feature expression must be surrounded by parentheses.

- [Logical operators](/en-US/docs/Web/CSS/@media#logical_operators) can be used to compose a complex media query: `not`, `and`, and `only`.
  You can also combine multiple media queries into a single rule by separating them with commas.

A media query computes to `true` when the media type (if specified) matches the device on which a document is being displayed _and_ all media feature expressions compute as true.
Queries involving unknown media types are always false.

> [!NOTE]
> A style sheet with a media query attached to its {{HTMLElement("link")}} tag [will still download](https://scottjehl.github.io/CSS-Download-Tests/) even if the query returns `false`, the download will happen but the priority of downloading will be much lower.
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

See [media types](/en-US/docs/Web/CSS/@media#media_types) for the list of available media types.
Because media types describe devices in very broad terms, most of the originally-defined media types were deprecated, with just `screen`, `print`, and `all` remaining. To target more specific attributes, use _media features_ instead.

## Targeting media features

Media features describe the specific characteristics of a given {{glossary("user agent")}}, output device, or environment.
For instance, you can apply specific styles to widescreen monitors, computers that use mice, or devices that are being used in low-light conditions.
This example applies styles when the user's _primary_ input mechanism (such as a mouse) can hover over elements:

```css
@media (hover: hover) {
  /* … */
}
```

Media features are either range or discrete.

_Discrete features_ take their value from an {{glossary("enumerated")}} set of possible keyword values. For example, the discrete `orientation` feature accepts either `landscape` or `portrait`.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

Many _range features_ can be prefixed with "min-" or "max-" to express "minimum condition" or "maximum condition" constraints.
For example, this CSS will apply styles only if your browser's {{glossary("viewport")}} width is equal to or narrower than 1250px:

```css
@media (max-width: 1250px) {
  /* … */
}
```

The following media queries are equivalent to the above example:

```css
@media (width <= 1250px) {
  /* … */
}

@media (1250px >= width) {
  /* … */
}
```

With media query range features, you can either use the inclusive `min-` and `max-` prefixes or the more concise range syntax operators `<=` and `>=`.

The following media queries are equivalent:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}

@media (50em >= width >= 30em) {
  /* … */
}
```

The range comparisons above are inclusive. To exclude the comparison value, use `<` and/or `>`.

```css
@media (30em < width < 50em) {
  /* … */
}

@media (50em > width > 30em) {
  /* … */
}
```

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not `0` or `none`.
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
Furthermore, you can combine multiple media queries into a comma-separated list; this allows you to apply the same styles in different situations, with the contained media queries evaluated as a logical `or` composition: interpreted as if each media query were within parentheses with an `or` between them.

In the previous example, we saw the `and` operator used to group a media _type_ with a media _feature_.
The `and` operator can also combine multiple media features within a single media query.
The `not` operator negates a media query, or a media feature when used with brackets, basically reversing their normal meanings.
The `or` operator can, under certain conditions, be used to combine multiple media features within a single media query.
Lastly, the `only` operator was used to prevent older browsers from applying the styles without evaluating the media feature expressions but it has no effect in modern browsers.

> [!NOTE]
> In most cases, the `all` media type is used by default when no other type is specified.
> However, if you use the `only` operator, you must explicitly specify a media type. You can see `only screen` or `only print` as a whole.

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

You can use a comma-separated list of media queries to apply styles when the user's device matches any one of various media types, features, or states.

The following rule contains two media queries. The block's styles will apply if either the user's device has a height of 680px or more _or_ if the browser viewport is in portrait mode (the viewport height is greater than the viewport width):

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

In this example, if the user is printing to a PDF and the page height is 800px, the media query returns true because the first query component — which tests whether the viewport has a height of `680px` or more — is true.
Likewise, if a user is on a smartphone in portrait mode with a viewport height of 480px, the media query returns true because the second query component is true.

In a comma-separated list of media queries, the individual media queries end at the comma or, in the case of the last media query in the list, at the opening bracket (`{`).

### Inverting a query's meaning

The `not` keyword inverts the meaning of a single media query. For example, the CSS styles in this media query will apply to everything _except_ printed media:

```css
@media not print {
  /* … */
}
```

The `not` negates only the media query it is applied to. The `not`, without parenthesis, negates all the features within the media query in which it is contained. This means, in a comma-separated list of media queries, each `not` applies to the single query it is contained within, applying to _all_ the features within that single query. In this example, the `not` applies to the first media query, which concludes at the first comma:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

The above query is evaluated like this:

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

Both examples are valid. Media conditions can be grouped by wrapping them in parentheses (`()`). These groups can then be nested within a condition the same as a single media query.

The `not` is evaluated last in a media query, meaning it applies to the entire media query, not to a single feature within a query, as if an open parenthesis was added immediately after the `not` and closed at the end of the media query.

The following query:

```css
@media not all and (monochrome) {
  /* … */
}
```

is evaluated like this:

```css
@media not (all and (monochrome)) {
  /* … */
}
```

It is not evaluated like this:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

To negate a single feature within a media query, use parenthesis. Encompassing a `not` and a media feature in parentheses limits the components of the query that get negated.

In this example, we negate the `hover` media feature but not the `all` media type:

```css
@media all and (not(hover)) {
  /* … */
}
```

The `not(hover)` matches if the device has no hover capability. In this case, because of the parentheses, the `not` applies to `hover` but not to `all`.

### Improving compatibility with older browsers

The `only` keyword prevents older browsers that do not support media queries with media features from applying the given styles.
_It has no effect on modern browsers._

```css
@media only screen and (color) {
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

Note that you cannot use the `or` operator on the same level as the `and` and `not` operators. You can either separate the media features with a comma or use parenthesis to group sub-expressions of media features to clarify the order of evaluation.

For example, the following queries are both valid:

```css
@media ((color) and (hover)) or (monochrome) {
  /* … */
}

/* or */
@media (color) and (hover), (monochrome) {
  /* … */
}
```

## See also

- [@media](/en-US/docs/Web/CSS/@media)
- [Container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Testing media queries programmatically](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Extended Mozilla media features](/en-US/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Extended WebKit media features](/en-US/docs/Web/CSS/WebKit_Extensions#media_features)
