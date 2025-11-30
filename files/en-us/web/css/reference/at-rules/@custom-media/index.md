---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.custom-media
---

{{CSSRef}}{{SeeCompatTable}}

The **`@custom-media`** CSS [at-rule](/en-US/docs/Web/CSS/Reference/At-rules) defines aliases for long or complex [media queries](/en-US/docs/Web/CSS/Guides/Media_queries). Instead of repeating the same hardcoded [`@media`](/en-US/docs/Web/CSS/Reference/At-rules/@media) rule with a `<media-query-list>`, it can be defined once in a `@custom-media` and referenced throughout the stylesheet whenever needed.

## Syntax

```css
@custom-media <extension-name> <media-query-list>;

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Values

- `<extension-name>`
  - : A [`<dashed-ident>`](/en-US/docs/Web/CSS/Reference/Values/dashed-ident); the name identifying the custom media query.
- `<media-query-list>`
  - : A comma-separated [list of `<media-query>` values](/en-US/docs/Web/CSS/Reference/At-rules/@media#description), or the `true` or `false` keywords

## Description

When building responsive interfaces, the same [`@media`](/en-US/docs/Web/CSS/Reference/At-rules/@media) query often needs to be repeated across multiple rules, files, or even teams. Duplicating media queries increases the risk of mistakes, makes refactoring harder, and creates unnecessary maintenance overhead. Any time a media-query changes, every instance must be found and updated manually — a process that is both error-prone and difficult to track in large codebases.

The `@custom-media` at-rule solves this problem by letting you define **named aliases** for media queries. Instead of repeating the full media query everywhere, you declare it once as a custom media query and reference its alias throughout your stylesheets. Updating the underlying media query then requires a single change in one location.

Custom media queries can be composed from others by referencing their alias names inside the media query features. This enables building more expressive, layered conditions. However, a custom media query cannot refer to itself, nor can it form part of a circular chain of references. Any circular dependency — direct or indirect — invalidates all custom media queries involved in that loop.

If multiple `@custom-media` rules define the same `<dashed-ident>` name, **only the last declaration in source order applies**. All earlier declarations are ignored, ensuring a deterministic and predictable result.

Using `@custom-media` improves maintainability, reusability, and consistency across your styles. Centralizing shared breakpoints and other media conditions reduces duplication and makes responsive design easier to reason about — especially in large projects or design systems.

## Formal syntax

{{csssyntax}}

## Examples

### Updating multiple media queries

In this example, the `@custom-media` at-rule is used on a responsive website that uses a particular breakpoint in several places:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

If the breakpoint needs to be changed, it can be updated in one place to adjust all dependent media queries across the whole site.

### Grouping multiple responsive breakpoints

Here, the `@custom-media` at-rule is used to set multiple breakpoints in a single place, improving maintainability and simplifying responsive design management across multiple stylesheets:

```css
/* general.css */

@custom-media --mobile-screen (width < 480px);
@custom-media --tablet-screen (width < 768px);
@custom-media --laptop-screen (width < 1024px);
@custom-media --desktop-screen (width < 1440px);
@custom-media --widescreen (width > 1441px);
```

```css
/* layout.css */

.container {
  padding: 1rem;
}

@media (--mobile-screen) {
  .container {
    padding: 0.5rem;
  }
}

@media (--laptop-screen) {
  .container {
    max-width: 1200px;
  }
}

@media (--widescreen) {
  .container {
    max-width: 1400px;
    padding: 2rem;
  }
}
```

```css
/* typography.css */

@media (--tablet-screen) {
  .container {
    font-size: 0.9rem;
  }
}

@media (--laptop-screen) {
  .container {
    font-size: 1rem;
  }
}

@media (--widescreen) {
  .container {
    font-size: 1.1rem;
  }
}
```

Grouping all the breakpoints in a single location makes it easier to maintain the responsive design. When a breakpoint needs adjustment, it only requires a single update to the `@custom-media` definition, ensuring consistency across all stylesheets.

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

### Using `true` and `false` keywords

The `true` keyword evaluates to a media query that always matches, while `false` evaluates to a media query that never matches.

```css
@custom-media --enabled true;
@custom-media --disabled false;

@media (--enabled) {
  /* These styles always apply */
  body {
    background-color: blue;
  }
}

@media (--disabled) {
  /* These styles never apply */
  body {
    background-color: red;
  }
}
```

This can be useful for feature flags or conditional logic within stylesheets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS [`@media`](/en-US/docs/Web/CSS/Reference/At-rules/@media) at-rule
- CSS [`@import`](/en-US/docs/Web/CSS/Reference/At-rules/@import) at-rule
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS media queries](/en-US/docs/Web/CSS/Guides/Media_queries) module
