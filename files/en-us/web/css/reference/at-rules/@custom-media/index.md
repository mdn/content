---
title: "@custom-media"
slug: Web/CSS/@custom-media
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.custom-media
---

{{CSSRef}}{{SeeCompatTable}}

The **`@custom-media`** CSS [at-rule](/en-US/docs/Web/CSS/At-rule) defines aliases for longer or complex [media queries](/en-US/docs/Web/CSS/CSS_media_queries). Instead of using the same hardcoded [media features](/en-US/docs/Web/CSS/@media#media_features) {{CSSxRef("@media")}} query list multiple times in multiple CSS files, a `@custom-media` query is defined once, in a single location, and can then be used everywhere.

## Syntax

```css
@custom-media --media-query-name (max-width: 1200px);
@custom-media --media-query-name (max-width: 1200px), (orientation: portrait);
```

### Values

- `<extension-name>`
  - : A [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident); the name identifying the custom media.
- `<media-query-list>`
  - : A comma-separated [list of `<media-query>` values](/en-US/docs/Web/CSS/@media#description).

## Description

When designing documents that use media queries, an {{CSSxRef("@media")}} rule may be used in multiple places. Repeating the same media query values multiple times can lead to errors and maintenance issues. If a change needs to be made, every occurrence must be found and updated in the same way, which may be hard to detect, especially when media queries are used in multiple files and multiple teams.

To help address this, the custom media queries at-rule defines named aliases that can be used for long and complex media queries. In this way, a media query used in multiple places can instead be defined as a custom media query, which can be used everywhere. Then, updating the media query requires touching only one line of code.

A `@custom-media` rule can refer to other custom media queries and include the alias name within the feature list. However, ensure the custom media query is not defined in terms of itself or of another custom media query that directly or indirectly refers to it as loops are not valid. Any attempt to define a custom media query with a circular dependency will cause all the custom media queries in the loop to fail.

If multiple `@custom-media` rules are declared using the same dashed-identifier, the last declaration defined is used, with all previous declarations using the same name being ignored.

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

If the breakpoint changes, by changing one line of code, a single media feature value, all media queries using this custom media query alias in all CSS files are updated accordingly.

### Grouping multiple responsive breakpoints

The `@custom-media` at-rule is used to set multiple breakpoints in a single place:

```css
@custom-media --mobile-screen (max-width: 480px);
@custom-media --tablet-screen (max-width: 768px);
@custom-media --laptop-screen (max-width: 1024px);
@custom-media --desktop-screen (max-width: 1440px);
@custom-media --widescreen (min-width: 1441px);
```

By grouping all the breakpoints in a single location, it's easier to control the responsive design.

### Complex breakpoints with a list of queries

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
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
