---
title: scroll-snap-type-x
slug: Web/CSS/scroll-snap-type-x
tags:
  - CSS
  - CSS Property
  - CSS Scroll Snap
  - NeedsExample
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.scroll-snap-type-x
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-type-x`** [CSS](/en-US/docs/Web/CSS) property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.

Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.

```css
/* Keyword values */
scroll-snap-type-x: none;
scroll-snap-type-x: mandatory;
scroll-snap-type-x: proximity;

/* Global values */
scroll-snap-type-x: inherit;
scroll-snap-type-x: initial;
scroll-snap-type-x: unset;
```

## Syntax

### Values

- `none`
  - : When the visual {{Glossary("viewport")}} of this scroll container is scrolled horizontally, it must ignore snap points.
- `mandatory`
  - : The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled horizontally. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.
- `proximity`
  - : The visual viewport of this scroll container may come to rest on a snap point if it isn't currently scrolled horizontally considering the user agent's scroll parameters. If content is added, moved, deleted or resized the scroll offset may be adjusted to maintain the resting on that snap point.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [`scroll-snap-type-y`](/en-US/docs/Web/CSS/scroll-snap-type-y)
- [`scroll-snap-type`](/en-US/docs/Web/CSS/scroll-snap-type)
