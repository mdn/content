---
title: scroll-snap-type-y
slug: Web/CSS/scroll-snap-type-y
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.scroll-snap-type-y
---

{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

The **`scroll-snap-type-y`** [CSS](/en-US/docs/Web/CSS) property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.

> **Note:** See [scroll-snap-type](/en-US/docs/Web/CSS/scroll-snap-type) for the standard feature.

Specifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.

```css
/* Keyword values */
scroll-snap-type-y: none;
scroll-snap-type-y: mandatory;
scroll-snap-type-y: proximity;

/* Global values */
scroll-snap-type-y: inherit;
scroll-snap-type-y: initial;
scroll-snap-type-y: unset;
```

## Syntax

### Values

- `none`
  - : When the visual {{Glossary("viewport")}} of this scroll container is scrolled vertically, it must ignore snap points.
- `mandatory`
  - : The visual viewport of this scroll container will rest on a snap point if it isn't currently scrolled vertically. That means it snaps on that point when the scroll action finished, if possible. If content is added, moved, deleted or resized the scroll offset will be adjusted to maintain the resting on that snap point.
- `proximity`
  - : The visual viewport of this scroll container may come to rest on a snap point if it isn't currently scrolled vertically considering the user agent's scroll parameters. If content is added, moved, deleted or resized the scroll offset may be adjusted to maintain the resting on that snap point.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
scroll-snap-type-y =
  none | mandatory | proximity
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-controlled scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
