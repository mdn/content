---
title: "@custom-media"
slug: Web/CSS/@custom-media
page-type: css-at-rule
browser-compat: css.at-rules.custom-media
---

{{CSSRef}}

The **`@custom-media`** CSS [at-rule](/en-US/docs/Web/CSS/At-rule) defines aliases for long and complex [media queries](/en-US/docs/Web/CSS/CSS_media_queries). Instead of using hardcoded {{CSSxRef("@media")}} values, in multiple places and files, custom media query sets a media query in a single line of code.

## Syntax

```css
@custom-media --media-query-name (max-width: 1200px);
@custom-media --media-query-name (max-width: 1200px), (orientation: portrait);
```

### Values

- `<extension-name>`
  - : A name identifying the custom media.
- `<media-query-list>`
  - : A comma-separated list of of `<media-query>` values.

## Description

When designing documents that use media queries, the {{CSSxRef("@media")}} may be used in multiple places. Repeating the same media query values multiple times is an editing hazard; developers making a change must edit every copy in the same way, or suffer from difficult-to-find bugs in their CSS.

To help ameliorate this, the custom media queries at-rule defines named aliases for long and complex media queries. In this way, a media query used in multiple places can instead be assigned to a custom media query, which can be used everywhere, and editing the media query requires touching only one line of code.

A `@custom-media` rule can refer to other custom media queries. However, loops are forbidden, and a custom media query must not be defined in terms of itself or of another custom media query that directly or indirectly refers to it. Any attempt of defining a custom media query with a circular dependency will cause all the custom media queries in the loop to fail.

If multiple `@custom-media` rules declare the same name, the truth value is based on the last one alone, ignoring all previous declarations of the same name.

## Formal syntax

{{csssyntax}}

## Examples

### Updating multiple responsive breakpoints

The `@custom-media` at-rule is used on responsive websites which use a particular breakpoint in several places:

```css
@custom-media --narrow-window (max-width: 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

By changing one line of code, all media queries are updated.

### Grouping multiple responsive breakpoints

The `@custom-media` at-rule is used to set breakpoints from a single place:

```css
@custom-media --mobile-max (max-width: 479px);
@custom-media --mobile-min (min-width: 480px);
@custom-media --tablet-max (max-width: 767px);
@custom-media --tablet-min (min-width: 768px);
@custom-media --laptop-max (max-width: 1023px);
@custom-media --laptop-min (min-width: 1024px);
@custom-media --desktop-max (max-width: 1439px);
@custom-media --desktop-min (min-width: 1440px);
@custom-media --widescreen-max (max-width: 1599px);
@custom-media --widescreen-min (min-width: 1600px);
```

By grouping all breakpoints in a single location, it's easier to control the responsive design.

### Complex queries with a list of quereis

The custom media query is evaluated logically. For instance, the following code snippet:

```css
@custom-media --modern (color), (hover);

@media (--modern) and (width > 1024px) {
}
```

Is equivalent to:

```css
@media ((color) or (hover)) and (width > 1024px) {
}
```

The following would be incorrect:

```css
@media (color), (hover) and (width > 1024px) {
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@media")}}
- {{CSSxRef("@import")}}
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries)
