---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.custom-media
---

{{CSSRef}}{{SeeCompatTable}}

The **`@custom-media`** CSS [at-rule](/en-US/docs/Web/CSS/Reference/At-rules) defines aliases for long or complex [media queries](/en-US/docs/Web/CSS/Guides/Media_queries). Instead of repeating the same hardcoded `<media-query-list>` in multiple {{cssxref("@media")}} at-rules, it can be defined once in a `@custom-media` at-rule and referenced throughout the stylesheet whenever needed.

## Syntax

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Values

- `<extension-name>`
  - : A {{cssxref("dashed-ident")}}; the name identifying the custom media query.
- Represented value
  - : The value aliased by the custom media query. Possible values are:
    - `<media-query-list>`
      - : A comma-separated [list of `<media-query>` values](/en-US/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : The `@custom-media` value always evaluates to `true`.
    - `false`
      - : The `@custom-media` value always evaluates to `false`.

## Description

When building responsive interfaces, the same media condition often needs to be repeated across multiple {{cssxref("@media")}} at-rules, sometimes across different files and teams. Duplicating media queries increases the risk of mistakes, makes refactoring harder, and creates unnecessary maintenance overhead. Any time a media query changes, every instance must be found and updated manually — a process that can be both error-prone and difficult to track in large codebases.

The `@custom-media` at-rule solves this problem by letting you define **named aliases** for media queries. Instead of repeating the full media query everywhere, you declare the media condition once as a custom media query and reference its alias throughout your stylesheets. With this in place, updating the underlying media query requires a single change in one location.

Custom media queries can be composed from others by referencing their alias names inside the media query features. This enables building more expressive, layered conditions. However, a custom media query cannot refer to itself, nor can it form part of a circular chain of references. Any circular dependency — direct or indirect — invalidates all custom media queries involved in that loop.

If multiple `@custom-media` rules define the same `<dashed-ident>` name, only the last declaration in the source order applies. All earlier declarations are ignored.

### Evaluating media queries with logical operators

Custom media queries accept the full range of CSS logical operators — `not`, `and`, and `or` (comma-separated or using the `or` keyword).

Because a `@custom-media` value is just a normal `<media-query-list>`, you can combine, invert, or group conditions exactly as you would in a regular `@media` rule.

#### Using the `not` operator

The `not` operator negates an entire media condition. This is useful when you want a rule to apply only when a specific condition is `false`.

```css
@custom-media --no-script not (script);

@media (--no-script) {
}
```

#### Using the `and` operator

The `and` operator lets you combine multiple conditions that must all be `true`.

```css
@custom-media --medium-screen (min-width: 40em) and (max-width: 60em);

@media (--medium-screen) {
}
```

This alias only matches when the viewport is within the specified width range.

#### Using the `or` operator

The logical `or` operator (or its comma alias) creates a media query that matches if any of the listed conditions are `true`.

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

The two aliases are identical. They are activated for both screen and print environments.

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

Grouping all the breakpoints in a single location makes it easier to maintain the responsive design. When a breakpoint needs adjustment, it only requires a single update to the associated `@custom-media` definition, ensuring consistency across all stylesheets.

### Using `true` and `false` keywords

The following example shows how the `true` and `false` keywords can be used with `@custom-media` to create media queries that always or never match, respectively.

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

### Overriding existing `@custom-media` rules

In this example, one `@custom-media` rule is overridden by another `@custom-media` rule using the same `<dashed-ident>` name.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

The initial definition of `--mobile-breakpoint` is overridden and therefore ignored. The final declaration becomes the active value used by all references to that custom media query.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("@media")}} at-rule
- CSS {{cssxref("@import")}} at-rule
- [Responsive design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS media queries](/en-US/docs/Web/CSS/Guides/Media_queries) module
