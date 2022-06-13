---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
tags:
  - CSS
  - Property
  - Reference
  - scrollbar-gutter
browser-compat: css.properties.scrollbar-gutter
---
{{CSSRef}}

The **`scrollbar-gutter`** [CSS](/en-US/docs/Web/CSS) property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

An element's _scrollbar gutter_ is the space between the inner border edge and the outer padding edge, where the browser may display a scrollbar. If no scrollbar is present, the gutter will be painted as an extension of the padding.

The browser determines whether _classic_ scrollbars or _overlay_ scrollbars are used:

- Classic scrollbars are always placed in a gutter, consuming space when present.
- Overlay scrollbars are placed over the content, not in a gutter, and are usually partially transparent.

## Syntax

```css
/* Initial value */
scrollbar-gutter: auto;

/* "stable" keyword, with optional modifier */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* Global values */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: unset;
```

### Values

- `auto`
  - : The initial value. Classic scrollbars create a gutter when `overflow` is `scroll`, or when `overflow` is `auto` and the box is overflowing. Overlay scrollbars do not consume space.
- `stable`
  - : When using classic scrollbars, the gutter will be present if `overflow` is `auto`, `scroll`, or `hidden` even if the box is not overflowing. When using overlay scrollbars, the gutter will not be present.
- `both-edges`
  - : If a gutter would be present on one of the inline start/end edges of the box, another will be present on the opposite edge as well.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Example 1

Prevent unneeded layout changes as the content growing or shrinking causes the scrollbar to appear/disappear:

```css
.container {
    scrollbar-gutter: stable;
}
```

### Example 3

Add symmetric spacing to both sides of the box so the content is centered:

```css
.container {
    scrollbar-gutter: stable both-edges;
}
```

### Example 4

Align the contents of a non-scrolling element and a scrolling one adjacent to it:

```css
.header {
    overflow: hidden;
    scrollbar-gutter: stable;
}

.container {
    scrollbar-gutter: stable;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("overflow")}}
