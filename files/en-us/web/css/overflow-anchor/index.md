---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
tags:
  - CSS
  - CSS Property
  - CSS Scroll Anchoring
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-anchor
---
{{CSSRef}}

The **`overflow-anchor`** [CSS](/en-US/docs/Web/CSS) property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.

Scroll anchoring behavior is enabled by default in any browser that supports it. Therefore, changing the value of this property is typically only required if you are experiencing problems with scroll anchoring in a document or part of a document and need to turn the behavior off.

## Syntax

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Values

- `auto`
  - : The element becomes a potential anchor when adjusting scroll position.
- `none`
  - : The element won't be selected as a potential anchor.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Prevent scroll anchoring

To prevent scroll anchoring in a document, use the `overflow-anchor` property.

```css
* {
  overflow-anchor: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide to scroll anchoring](/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
